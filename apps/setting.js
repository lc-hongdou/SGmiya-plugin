import plugin from '../../../lib/plugins/plugin.js'
import fs from 'fs'
import _ from 'lodash'
import { Config } from '../components/index.js'
import { puppeteer } from '../model/index.js'
const configs = {
  // 其他通知
  闪照: 'flashPhoto',
  禁言: 'botBeenBanned',
  删除缓存: 'deltime',
  涩涩: 'sese',
  涩涩pro: 'sesepro',
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
        {
          reg: '^#珊瑚宫(启用|禁用)全部通知$',
          fnc: 'SetAll',
          permission: 'master'
        },
        {
          reg: '^#(增加|减少|查看)头衔屏蔽词.*$',
          fnc: 'NoTitle',
          permission: 'master'
        },
        {
          reg: '^#查看(sese|涩涩)设置$',
          fnc: 'View_Settings',
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
    // 单独处理
    if (index == '涩涩pro' && yes) Config.modify('whole', 'sese', yes)

    if (index == '涩涩' && !yes) Config.modify('whole', 'sesepro', yes)

    if (index == '涩涩' || index == '涩涩pro') return this.View_Settings(e)
    this.SGmiyaset(e)
    return true
  }

  // 修改全部设置
  async SetAll (e) {
    let yes = /启用/.test(e.msg)
    // 设置的任务
    let type = [
      'flashPhoto',
      'botBeenBanned'
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
      // 闪照
      flashPhoto: getStatus(config.flashPhoto),
      // 禁言
      botBeenBanned: getStatus(config.botBeenBanned),
      // 删除缓存时间
      deltime: Number(config.deltime),

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