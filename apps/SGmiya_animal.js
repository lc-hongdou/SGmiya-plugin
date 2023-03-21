import { segment } from "oicq";
import fs from 'fs';
const _path = process.cwd();//项目路径
const s_path = `${_path}/plugins/SGmiya-plugin/resources/SGmiya/`


export class SGrode extends plugin {
  constructor() {
    super({
      name: 'SG',
      dsc: '图片',
      event: 'message',
      priority: 4999,
      rule: [
        {
            /** 命令正则匹配 */
            reg: "^#?富矿$",
            /** 执行方法 */
            fnc: "fk"
        },
      ]
    })
  }


  async fk(e) {
    //获取项目运行路径
    // const _path = process.cwd();

    const text = "\n别太肝哦~(图源珊瑚宫，禁止转载)";
    let msg = [
        //@用户
        segment.at(e.user_id),
        //文本消息
       text,
        //图片
        segment.image(`file:///${s_path}/fk.jpg`)
            ];
    e.reply(msg);

    //返回true 阻挡消息不再往下
    return true;
    }   

}