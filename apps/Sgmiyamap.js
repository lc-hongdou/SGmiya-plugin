import { segment } from "oicq";
import fetch from "node-fetch";
import fs from 'fs'
const _path = process.cwd();//项目路径
const p_path = `${_path}/plugins/SGmiya-plugin/resources/须弥-雨林/`


let picture = {
  '须弥地图沙漠绘制计划': 'https://i0.hdslb.com/bfs/article/d8d40a11cd15ca4fa9703ae38d8622190ca2b9f9.png@942w_1049h_progressive.webp',
  '赤王陵及周边遗迹群': 'https://i0.hdslb.com/bfs/article/3394d0603ddb72f96d68233d9bf543c4133af2f5.png@942w_942h_progressive.webp',
  '赤王陵东侧': 'https://i0.hdslb.com/bfs/article/ae39867e8af989b04d3eb52ae79aa2a1aa48beaf.png@942w_942h_progressive.webp',
  '舍身步道上层': 'https://i0.hdslb.com/bfs/article/fe2f772c5f250090491eebc8736947f63e989264.png@942w_1268h_progressive.webp',
  '舍身步道下层': 'https://i0.hdslb.com/bfs/article/fe2f772c5f250090491eebc8736947f63e989264.png@942w_1268h_progressive.webp',
  '圣显厅': 'https://i0.hdslb.com/bfs/article/2ab95424e3aac9eff8a9ee7b3b80aaa3fc44a57e.png@942w_942h_progressive.webp',
  '赤王绫中轴于西侧': 'https://i0.hdslb.com/bfs/article/59cf3b7977e29f0f0792362d526e6061252d43ea.png@942w_942h_progressive.webp',
  '活力之家': 'https://i0.hdslb.com/bfs/article/bbd454e9072008172ec8e3cd11c893409786e851.png@942w_942h_progressive.webp',
  '上风蚀地': 'https://i0.hdslb.com/bfs/article/9670c575333c11a3463825e0bf50b23c5d6fed0e.png@942w_674h_progressive.webp',
  '须弥地图雨林绘制计划': 'https://i0.hdslb.com/bfs/article/f56313f891417e46a0da924bf8b3c0c530c1b237.png@942w_1049h_progressive.webp',
  '挚电树洞窟': 'https://i0.hdslb.com/bfs/article/f8f9a0c64505e7555f953f5002ab1fb27e35f175.png@942w_942h_progressive.webp',
  '鸡哥洞窟' : 'https://i0.hdslb.com/bfs/article/2580a344e8c57a025973a72bdbdefb72e070ebf5.png@942w_942h_progressive.webp',
  '迪弗旧窟' : 'https://i0.hdslb.com/bfs/article/9587e9a1c9f186642fa659002d7a61b5e9f07cba.png@942w_942h_progressive.webp',
  '恒那兰那南': 'https://i0.hdslb.com/bfs/article/d66b8a0e091d6881cc77b1cd0c90121e667c9aec.png@942w_942h_progressive.webp',
  '降诸魔山东' : 'https://i0.hdslb.com/bfs/article/8ec078d4b17f90a77b4eb1a868b940265bef0d34.png@942w_942h_progressive.webp',
  '降诸魔山南' : 'https://i0.hdslb.com/bfs/article/60b4730f4f66384dc08066a7857531b03f02e428.png@942w_942h_progressive.webp',
  '雨的尽头' : 'https://i0.hdslb.com/bfs/article/9e27cd0568beaa5f792e177dc62483a7dde55633.png@942w_942h_progressive.webp',
  '茸蕈窟' : 'https://i0.hdslb.com/bfs/article/b804b91bace82aa32bcf5f4415d63048e2925057.png@942w_942h_progressive.webp',
  '失梦的国度' : 'https://i0.hdslb.com/bfs/article/32f90ff324fd77f13a506cfb82db61e7976878fa.png@942w_942h_progressive.webp',
  '无郁稠林南' : 'https://i0.hdslb.com/bfs/article/ba220a496e084d82ff7bbb47bd0551fc5d62f916.png@942w_942h_progressive.webp',
  '无郁弗摩之地' : 'https://i0.hdslb.com/bfs/article/6d4c7d6a4d63958eda79a196856fa5cb9ad9a304.png@942w_942h_progressive.webp',
  '香醉坡' : 'https://i0.hdslb.com/bfs/article/44b2ef0cef941fcc8c6fadfddb8039671acfa0d9.png@942w_942h_progressive.webp',
  '觉王之殿东' : 'https://i0.hdslb.com/bfs/article/25acce2316649f8ff2531d421b4c5644aa25a806.png@942w_942h_progressive.webp',
  '觉王东地下一层遗迹区': 'https://i0.hdslb.com/bfs/article/3238481d4c11b1f9ef59c78164e8872afbd89818.png@942w_612h_progressive.webp',
  '觉王东地下二层童梦的切片' : 'https://i0.hdslb.com/bfs/article/b085499a56eb46cdd885c39752b075aee65626fe.png@942w_612h_progressive.webp',
  '觉王之殿东地下三层小蘑菇厅' : 'https://i0.hdslb.com/bfs/article/013301c4b7b37090d2fe46be460e6ecd005afd8b.png@942w_612h_progressive.webp',
  '觉王之殿东地下二层大蘑菇厅' : 'https://i0.hdslb.com/bfs/article/a61769545a87778a14a56e63ae267e2c906c81cd.png@942w_612h_progressive.webp',
  '觉王之殿东地下一层幻梦之门' : 'https://i0.hdslb.com/bfs/article/0fe01fc90f214277426a94af439ab173c88e5435.png@942w_612h_progressive.webp',
  '觉王之殿东地下三层无相铁' : 'https://i0.hdslb.com/bfs/article/67ed8b6114805d1b24a0f5f8743577d988c82916.png@942w_612h_progressive.webp'
}
let reg = new RegExp(`^#?(须弥地图帮助|${Object.keys(picture).join("|")})$`)
await initFile()
export class example extends plugin {
  constructor() {
    super({
      name: '须弥地图',
      dsc: '图片',
      event: 'message',
      priority: 4999,
      rule: [{
          reg: '^#?须弥地图$',
          fnc: 'xumipicture'
        },
        {
          reg: reg,
          fnc: 'appointpicture'
        },
      ]
    })
  }


  async xumipicture(e) {
    let file = fs.readdirSync(p_path)
    let imgnum = Math.round(Math.random() * (file.length - 1))
    e.reply(segment.image(p_path + file[imgnum]))
  }
  async appointpicture(e) {
    
    if (e.msg.includes('帮助')) {
      e.reply(Object.keys(picture).join('\n'))
      return true
    }
    e.reply(segment.image(`${p_path}${e.msg}.jpg`))
  }
}


//文件初始化
async function initFile() {
  if (fs.existsSync(p_path)) return
  let data = Object.keys(picture)
  let url = Object.values(picture)
  let fileUrl
  let savePath
    for (let i = 0; i < data.length; i++) {
      savePath = `${p_path}${data[i]}.jpg`
      fileUrl = url[i]
     await common.downFile(fileUrl,savePath)
    }
 
}