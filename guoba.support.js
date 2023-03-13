import { Config } from './components/index.js'
/**
 *  支持锅巴
 *  锅巴插件：https://gitee.com/guoba-yunzai/guoba-plugin.git
 *  组件类型，可参考 https://vvbin.cn/doc-next/components/introduction.html
 *  https://antdv.com/components/overview-cn/
 */
const Path = process.cwd()
const Plugin_Path = `${Path}/plugins/SGmiya-plugin`

export function supportGuoba () {
  return {
    pluginInfo: {
      name: 'SGmiya-plugin',
      title: 'SGmiya-Plugin',
      author: '@早餐不要在空腹的时候吃',
      authorLink: 'https://github.com/lc-hongdou',
      link: 'https://github.com/lc-hongdou/SGmiya-plugin',
      isV3: true,
      isV2: false,
      description: '锄地扩展插件',
      // 显示图标，此为个性化配置
      // 图标可在 https://icon-sets.iconify.design 这里进行搜索
      // icon: 'emojione-monotone:baby-chick',
      // 图标颜色，例：#FF0000 或 rgb(255, 0, 0)
      // iconColor: '#ffff99',
      // 如果想要显示成图片，也可以填写图标路径（绝对路径）
      iconPath: `${Plugin_Path}/resources/img/SGmiya_logo.webp`
    },
    // 配置项信息
    configInfo: {
      // 配置项 schemas
      schemas: [
        {
          field: 'flashPhoto',
          label: '闪照',
          helpMessage: '目前QQ群聊闪照功能已被移除',
          bottomHelpMessage: '开启后将转发群聊和私聊的闪照',
          component: 'Switch'
        },
        {
          field: 'botBeenBanned',
          label: 'Bot被禁言',
          bottomHelpMessage: 'Bot在群聊被禁言后通知主人',
          component: 'Switch'
        },
        {
          component: 'Divider',
          label: 'pixiv设置'
        },
        {
          field: 'sese',
          label: 'sese',
          bottomHelpMessage: '开放一些功能',
          component: 'Switch'
        },
        {
          field: 'sesepro',
          label: 'sesepro',
          bottomHelpMessage: '开放全部功能',
          component: 'Switch'
        }

      ],
      // 获取配置数据方法（用于前端填充显示数据）
      getConfigData () {
        return Config.Notice
      },

      // 设置配置的方法（前端点确定后调用的方法）
      setConfigData (data, { Result }) {
        for (let key in data) Config.modify('whole', key, data[key])

        return Result.ok({}, 'Over!')
      }
    }
  }
}
