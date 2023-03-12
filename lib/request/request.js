import fetch from 'node-fetch'
import { segment } from 'oicq'
import { Config } from '../../components/index.js'
import { Agent } from 'https'
import { HttpsProxyAgent } from './httpsProxyAgentMod.js'
import _ from 'lodash'

const CHROME_UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.79 Safari/537.36'
const POSTMAN_UA = 'PostmanRuntime/7.29.0'

class HTTPResponseError extends Error {
  constructor (response) {
    super(`HTTP Error Response: ${response.status} ${response.statusText}`)
    this.response = response
  }
}

const checkStatus = response => {
  if (response.ok) {
    // response.status >= 200 && response.status < 300
    return response
  } else {
    throw new HTTPResponseError(response)
  }
}

const qs = (obj) => {
  let res = ''
  for (const [k, v] of Object.entries(obj)) { res += `${k}=${encodeURIComponent(v)}&` }
  return res.slice(0, res.length - 1)
}
export default new class {
  /**
   * @description: Get请求
   * @param {String} url
   * @param {Object} options 同fetch第二参数
   * @param {Object} options.params 请求参数
   * @param {fetch[BodyMixin]} options.statusCode 返回数据类型
   * @return {FetchObject}
   */
  async get (url, options = {}) {
    // 处理参数
    if (options.params) {
      url = url + '?' + qs(options.params)
    }
    options.headers = {
      'User-Agent': CHROME_UA,
      ...options.headers
    }
    if (!options.agent) options.agent = await this.getAgent()
    try {
      let res = await fetch(url, options)
      if (!options.closeCheckStatus) {
        res = checkStatus(res)
      }
      if (options.statusCode) {
        return res[options.statusCode]()
      }
      return res
    } catch (err) {
      logger.error(err)
      throw Error(`Request Get Error，${err.message.match(/reason:(.*)/i) || err.message}`)
    }
  }

  /**
   * @description: Post请求
   * @param {String} url 链接
   * @param {Object|Sring} options.data 参数
   * @param {fetch[BodyMixin]} options.statusCode 返回数据类型
   */
  async post (url, options = {}) {
    options.method = 'POST'
    options.headers = {
      'User-Agent': CHROME_UA,
      'Content-Type': 'application/json',
      ...options.headers
    }
    if (options.params) {
      url = url + '?' + qs(options.params)
    }
    if (options.data) {
      if (/json/.test(options.headers['Content-Type'])) {
        options.body = JSON.stringify(options.data)
      } else if (/x-www-form-urlencoded/.test(options.headers['Content-Type'])) {
        options.body = qs(options.data)
      } else {
        options.body = options.data
      }
      delete options.data
    }
    if (!options.agent) options.agent = await this.getAgent()
    try {
      let res = await fetch(url, options)
      if (!options.closeCheckStatus) {
        res = checkStatus(res)
      }
      if (options.statusCode) {
        return res[options.statusCode]()
      }
      return res
    } catch (err) {
      logger.error(err)
      throw Error(`Request Post Error，reason：${err.message.match(/reason:(.*)/)[1]}`)
    }
  }

  /**
   * @description: 绕cf Get请求
   * @param {String} url
   * @param {Object} options 同fetch第二参数
   * @param {Object} options.params 请求参数
   * @return {FetchObject}
   */
  async cfGet (url, options = {}) {
    options.agent = await this.getAgent(true)
    options.headers = {
      'User-Agent': POSTMAN_UA,
      ...options.headers
    }
    return this.get(url, options)
  }

  /**
   * @description: 绕cf Post请求
   * @param {String} url
   * @param {Object} options 同fetch第二参数
   * @param {Object|String} options.data 请求参数
   * @return {FetchObject}
   */
  async cfPost (url, options = {}) {
    options.agent = await this.getAgent(true)
    options.headers = {
      'User-Agent': POSTMAN_UA,
      ...options.headers
    }
    return this.post(url, options)
  }

  async getAgent (cf) {
    let { proxyAddress, switchProxy } = Config.proxy; let { cfTLSVersion } = Config.picSearch
    return cf ? this.getTlsVersionAgent(proxyAddress, cfTLSVersion) : (switchProxy ? new HttpsProxyAgent(proxyAddress) : false)
  }

  /**
 * 从代理字符串获取指定 TLS 版本的代理
 * @param {string} str
 * @param {import('tls').SecureVersion} tlsVersion
 */
  getTlsVersionAgent (str, tlsVersion) {
    const tlsOpts = {
      maxVersion: tlsVersion,
      minVersion: tlsVersion
    }
    if (typeof str === 'string') {
      const isHttp = str.startsWith('http')
      if (isHttp && Config.proxy.switchProxy) {
        const opts = { ..._.pick(new URL(str), ['protocol', 'hostname', 'port', 'username', 'password']), tls: tlsOpts }
        return new HttpsProxyAgent(opts)
      }
    }
    return new Agent(tlsOpts)
  }

  /**
   * @description: 代理请求图片
   * @param {String} url 图片链接
   * @param {Boolean} cache 是否缓存
   * @param {Number} timeout 超时时间
   * @param {Object} headers 请求头
   * @return {segment.image} 构造图片消息
   */
  async proxyRequestImg (url, { cache, timeout, headers } = {}) {
    if (!await this.getAgent()) return segment.image(url, cache, timeout, headers)
    let buffer = await this.get(url, {
      headers
    }).then(res => res.arrayBuffer())
      .catch((err) => logger.warn(`图片加载失败 reason: ${err.message}`))
    if (!buffer) return segment.image('/plugins/yenai-plugin/resources/img/imgerror.png')
    let buff = Buffer.from(buffer)
    logger.debug(`Success: imgSize => ${(buff.length / 1024).toFixed(2) + 'kb'}`)
    return segment.image(buff, cache, timeout)
  }
}()
