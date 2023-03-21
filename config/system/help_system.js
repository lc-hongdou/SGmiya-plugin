/*
* 此配置文件为系统使用，请勿修改，否则可能无法正常使用
* 如需自定义配置请复制修改上一级help_default.js
* */

export const helpCfg = {
  title: '珊瑚宫帮助',
  subTitle: 'Yunzai-Bot & SGmiya-Plugin',
  columnCount: 3,
  colWidth: 265,
  theme: 'all',
  themeExclude: ['default'],
  style: {
    fontColor: '#ceb78b',
    descColor: '#eee',
    contBgColor: 'rgba(6, 21, 31, .5)',
    contBgBlur: 3,
    headerBgColor: 'rgba(6, 21, 31, .4)',
    rowBgColor1: 'rgba(6, 21, 31, .2)',
    rowBgColor2: 'rgba(6, 21, 31, .35)'
  }
}

export const helpList = [{
  group: '定义精英怪（占用400上限的怪）',
  list: [{
    icon: 1,
    title: '#日常路线 #-6',
    desc: '效率最高的锄地路线【-6】'
  },
  {
    icon: 2,
    title: '#空壳路线',
    desc: '[补上限路线，含有其他怪]'
  },
  {
    icon: 3,
    title: '#龙兽路线 ',
    desc: 'V3.1龙兽讨伐路线图'
  },
  {
    icon: 4,
    title: '元能收益路',
    desc: '元能构装体4连上限[收益路线]'
  },
  {
    icon: 5,
    title: '#元能效率路',
    desc: '元能构装体67只快速路线[效率路线]'
  },
  {
    icon: 6,
    title: '#愚人众路线',
    desc: '愚人众精英怪配平路线(雷冰萤+债务处理人+镜女)'
  },
   {
    icon: 7,
    title: '#镜女路线',
    desc: '藏镜仕女讨伐路线'
  },
   {
    icon: 8,
    title: '#圣骸兽路线',
    desc: '圣骸兽讨伐材料路线'
  },
   {
    icon: 9,
    title: '#流血狗路线',
    desc: '流血狗-高效路线[8分钟200材料]'
  },
  {
    icon: 10,
    title: '#蕈兽路线',
    desc: '活化蕈兽材料效率路线[活化材料]'
  },
  ]
},
 {
  group: '定义普通怪（占用2000上限的怪）',
  list: [
  {
    icon: 15,
    title: '#漂浮灵路线',
    desc: '理论最优解漂浮灵讨伐路线'
  }, 
  {
    icon: 5,
    title: '#盗宝团路线',
    desc: '原神-盗宝团高效路线'
  }, 
  {
    icon: 10,
    title: '#刀镡路线',
    desc: '刀镡效率优先型路线'
  }, 
  {
    icon: 22,
    title: '#骗骗花路线',
    desc: '骗骗花高效路线'
  }, 
  {
    icon: 23,
    title: '#蕈兽路线',
    desc: '高效蕈兽路线[小怪版]'
  }, 
  {
    icon: 1,
    title: '#史莱姆路线',
    desc: '原神史莱姆高效讨伐路线'
  },
  {
    icon: 2,
    title: '#镀金路线',
    desc: '镀金大驮兽速刷[驮门!]'
  },
  {
    icon: 3,
    title: '#愚人众路线',
    desc: '愚人众讨伐路线[先遣队]'
  },
  {
    icon: 4,
    title: '#丘丘人路线',
    desc: '原神-丘丘驮兽-高效路线[驮门!]'
  },
  {
    icon: 5,
    title: '#丘丘萨满路线',
    desc: '原神丘丘萨满-高效讨伐路线'
  },
  ]
},
{
  group: '定义动物材料路线',
  list: [
  {
    icon: 15,
    title: '#兽肉路线',
    desc: '效率最高:上限型须弥肉讨伐路线[怪物版，推荐使用]'
  }, 
  {
    icon: 5,
    title: '#神秘肉路线',
    desc: '神秘的肉高效路线'
  }, 
  ]
},
 {
  group: '综合路线',
  list: [
  {
    icon: 15,
    title: '#萨满驽路线',
    desc: '丘丘萨满丘丘弩手复合路线'
  }, 
  {
    icon: 5,
    title: '#大驮兽路线',
    desc: '大驮兽速刷路线[消灭材料路线暴政，世界属于驼门! ]'
  }, 
  ]
},
{
  group: '设置，版本相关',
  auth: 'master',
  list: [{
    icon: 8,
    title: '#珊瑚宫设置',
    desc: '查看珊瑚宫设置'
  },
  {
    icon: 1,
    title: '#珊瑚宫(强制)更新',
    desc: '更新珊瑚宫'
  },
  {
    icon: 15,
    title: '#珊瑚宫版本',
    desc: '查看版本信息'
  },
  {
    icon: 12,
    title: '#珊瑚宫更新日志',
    desc: '查看更新日志'
  },  
  ]
}]

export const isSys = true
