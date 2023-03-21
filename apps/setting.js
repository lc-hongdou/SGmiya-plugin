import plugin from '../../../lib/plugins/plugin.js'
import fs from 'fs'
import _ from 'lodash'
import { Config } from '../components/index.js'
import { puppeteer } from '../model/index.js'
const configs = {
  // SGmiya-config
  链接: 'mihoyolink',
  手机图片: 'MPicture',
}

let managereg = new RegExp(`^#珊瑚宫设置(${Object.keys(configs).join('|')})(开启|关闭)$`)
export class Setting extends plugin {
  constructor () {
    super({
      name: '珊瑚宫配置',
      event: 'message',
      priority: 100,
      rule: [
        {
          reg: managereg,
          fnc: 'Config_manage',
          permission: 'master'
        },
        {
          reg: '^#珊瑚宫设置$',
          fnc: 'SGmiyaset',
          permission: 'master'
        },
      ]
    })
  }

  // 更改配置
  async Config_manage (e) {
    // 解析消息
    let regRet = managereg.exec(e.msg)
    let index = regRet[1]
    let yes = regRet[2] == '开启'
    // 处理
    Config.modify('whole', configs[index], yes)
  
    this.SGmiyaset(e)
    return true
  }

  // 修改全部设置
  async SetAll (e) {
    let yes = /启用/.test(e.msg)
    // 设置的任务
    let type = [
      'mihoyolink',
      'MPicture'
    ]

    for (let i in configs) {
      if (!type.includes(configs[i])) continue
      Config.modify('whole', configs[i], yes)
    }

    this.SGmiyaset(e)
    return true
  }

  // 渲染发送图片
  async SGmiyaset (e) {
    let config = await Config.Notice
    let data = {
      // 链接
      mihoyolink: getStatus(config.mihoyolink),
      // 手机图片
      MPicture: getStatus(config.MPicture),

      bg: await rodom() // 获取底图
    }
    // 渲染图像
    return await puppeteer.render('admin/index', {
      ...data
    }, {
      e,
      scale: 2.0
    })
  }

}

// 随机底图
const rodom = async function () {
  let image = fs.readdirSync('./plugins/SGmiya-plugin/resources/admin/imgs/bg')
  let listImg = []
  for (let val of image) {
    listImg.push(val)
  }
  let imgs = listImg.length == 1 ? listImg[0] : listImg[_.random(0, listImg.length - 1)]
  return imgs
}

const getStatus = function (rote) {
  if (rote) {
    return '<div class="cfg-status" >已开启</div>'
  } else {
    return '<div class="cfg-status status-off">已关闭</div>'
  }
}