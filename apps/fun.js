import plugin from '../../../lib/plugins/plugin.js'
import fetch from 'node-fetch'
import { segment } from 'oicq'
import _ from 'lodash'
import { Config } from '../components/index.js'
import { common, uploadRecord } from '../model/index.js'
const heisiType = {
  白丝: { type: 'baisi', page: 17 },
  黑丝: { type: 'heisi', page: 43 },
  巨乳: { type: 'juru', page: 8 },
  jk: { type: 'jk', page: 6 },
  网红: { type: 'mcn', page: 36 },
  美足: { type: 'meizu', page: 9 }
}
/** API请求错误文案 */
const API_ERROR = '❎ 出错辣，请稍后重试'
/** 未启用文案 */
const SWITCH_ERROR = '主人没有开放这个功能哦(＊／ω＼＊)'
/** 开始执行文案 */
const START_EXECUTION = '椰奶产出中......'

const picapis = Config.getConfig('picApi')
/** 解析匹配模式 */
let picApiKeys = []
_.forIn(picapis, (values, key) => {
  let mode = values.mode !== undefined ? values.mode : picapis.mode
  key = key.split('|').map(item => mode ? '^' + item + '$' : item).join('|')
  picApiKeys.push(key)
})

const apiReg = new RegExp(`(${picApiKeys.join('|')}|^jktj$|^接口统计$)`)

export class Fun extends plugin {
  constructor () {
    super({
      name: '椰奶娱乐',
      event: 'message',
      priority: 500,
      rule: [
        {
          reg: '^#唱歌$',
          fnc: 'Sing'
        },
        {
          reg: '^#支付宝到账.*$',
          fnc: 'ZFB'
        },
        {
          reg: '^#(([\u4e00-\u9fa5]{2,6})-)?([\u4e00-\u9fa5]{2,6})?翻译(.*)$',
          fnc: 'youdao'
        },
        {
          reg: '^#?(我要|给我)?(资料卡)?(点赞|赞我)$',
          fnc: 'zan'
        },
        {
          reg: 'github.com/[a-zA-Z0-9-]{1,39}/[a-zA-Z0-9_-]{1,100}',
          fnc: 'GH'
        },
        {
          reg: '^#?coser$',
          fnc: 'coser'
        },
        {
          reg: `#?来点(${Object.keys(heisiType).join('|')})$`,
          fnc: 'heisiwu'
        },
        {
          reg: '^#?铃声搜索.*$',
          fnc: 'lingsheng'
        },
        {
          reg: '^#?半次元话题$',
          fnc: 'bcy_topic'
        },
        {
          reg: apiReg,
          fnc: 'picture'
        },
        {
          reg: '^#?来点神秘图(\\d+|s.*)?$',
          fnc: 'mengdui'
        },
        {
          reg: '^#acg.*$',
          fnc: 'acg'
        }

      ]
    })
  }



  /** 支付宝语音 */
  async ZFB (e) {
    let amount = parseFloat(e.msg.replace(/#|支付宝到账|元|圆/g, '').trim())

    if (!/^\d+(\.\d{1,2})?$/.test(amount)) return e.reply('你觉得这河里吗！！', true)

    if (!(amount >= 0.01 && amount <= 999999999999.99)) {
      return e.reply('数字大小超出限制，支持范围为0.01~999999999999.99')
    }
    e.reply([segment.record(`https://mm.cqu.cc/share/zhifubaodaozhang/mp3/${amount}.mp3`)])
  }





  // github
  async GH (e) {
    const api = 'https://opengraph.githubassets.com'

    let reg = /github.com\/[a-zA-Z0-9-]{1,39}\/[a-zA-Z0-9_-]{1,100}/
    const isMatched = e.msg.match(reg)

    const id = 'Yenai'
    if (isMatched) {
      const res = isMatched[0].split('/')
      const [user, repo] = [res[1], res[2].split('#')[0]]
      e.reply(segment.image(`${api}/${id}/${user}/${repo}`))
    }

    return true
  }

  // coser
  async coser (e) {
    let { sese, sesepro } = Config.getGroup(e.group_id)
    if (!sese && !sesepro && !e.isMaster) return e.reply(SWITCH_ERROR)

    e.reply(START_EXECUTION)

    const api = 'http://ovooa.com/API/cosplay/api.php'

    let res = await fetch(api).then((res) => res.json()).catch((err) => console.error(err))

    if (!res) return e.reply(API_ERROR)

    res = res.data
    let item = 1
    let msg = [res.Title]
    for (let i of res.data) {
      msg.push(segment.image(i))
      if (item >= 20) {
        break
      } else {
        item++
      }
    }
    common.getRecallsendMsg(e, msg)
    return true
  }


  // 铃声多多
  async lingsheng (e) {
    let msg = e.msg.replace(/#|铃声搜索/g, '')
    let api = `https://xiaobai.klizi.cn/API/music/lingsheng.php?msg=${msg}&n=1`
    let res = await fetch(api).then(res => res.json()).catch(err => console.log(err))
    if (!res) return e.reply(API_ERROR)
    if (res.title == null && res.author == null) return e.reply('❎ 没有找到相关的歌曲哦~', true)

    await e.reply([
      `标题：${res.title}\n`,
      `作者：${res.author}`
    ])
    await e.reply(await uploadRecord(res.aac, 0, false))
  }

  /** 半次元话题 */
  async bcy_topic (e) {
    let api = 'https://xiaobai.klizi.cn/API/other/bcy_topic.php'
    let res = await fetch(api).then(res => res.json()).catch(err => console.log(err))
    if (!res) return e.reply(API_ERROR)
    if (res.code != 200) return e.reply('❎ 出错辣' + JSON.stringify(res))
    if (_.isEmpty(res.data)) return e.reply('请求错误！无数据，请稍后再试')
    let msg = []
    for (let i of res.data) {
      if (!i.title || _.isEmpty(i.image)) continue
      msg.push(i.title)
      msg.push(i.image.map(item => segment.image(item)))
    }
    if (_.isEmpty(msg)) return this.bcy_topic(e)
    common.getforwardMsg(e, msg)
  }

  // api大集合
  async picture (e) {
    let { sese, sesepro } = Config.getGroup(e.group_id)
    if (!sese && !sesepro && !e.isMaster) return false
    let key = 'yenai:apiAggregate:CD'
    if (await redis.get(key)) return false

    if (/jktj|接口统计/.test(e.msg)) {
      let msg = ['现接口数量如下']
      for (let i in picapis) {
        if (i == 'mode') continue
        let urls = picapis[i].url || picapis[i]
        msg.push(`\n♡ ${i} => ${Array.isArray(urls) ? urls.length : 1}`)
      }
      return e.reply(msg)
    }
    // 解析消息中的类型
    let regRet = apiReg.exec(e.msg)
    if (regRet[1] == 'mode') return false
    let picObj = picapis[_.sample(Object.keys(picapis).filter(item => new RegExp(item).test(regRet[1])))]
    if (Array.isArray(picObj)) picObj = _.sample(picObj)
    let urlReg = /^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i
    if (!picObj.url && !urlReg.test(encodeURI(picObj)) && !Array.isArray(picObj)) {
      return logger.error(`${e.logFnc}未找到url`)
    }

    if (picObj.type !== 'image' && picObj.type !== 'text' && picObj.type !== 'json' && picObj.type) {
      return logger.error(`${e.logFnc}类型不正确`)
    }

    let url = picObj.url || picObj
    // 数组随机取或指定
    if (Array.isArray(url)) url = _.sample(url)

    url = encodeURI(url)

    if (picObj.type == 'text') {
      url = await fetch(url).then(res => res.text()).catch(err => console.log(err))
    } else if (picObj.type == 'json') {
      if (!picObj.path) return logger.error(`${e.logFnc}json未指定路径`)
      let res = await fetch(url).then(res => res.json()).catch(err => console.log(err))
      url = _.get(res, picObj.path)
    }
    if (!url) return logger.error(`${e.logFnc}未获取到图片链接`)

    logger.debug(`${e.logFnc}使用接口:${url}`)
    common.recallsendMsg(e, segment.image(url))
    redis.set(key, 'cd', { EX: 2 })
  }
}
