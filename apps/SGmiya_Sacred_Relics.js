import { segment } from "oicq";
import fs from 'fs';
const _path = process.cwd();//项目路径
const s_path = `${_path}/plugins/SGmiya-plugin/resources/SGmiya/`


export class SGrode extends plugin {
  constructor() {
    super({
      name: 'SG',
      dsc: '圣遗物狗粮路线',
      event: 'message',
      priority: 5000,
      rule: [
      {
        /** 命令正则匹配 */
        reg: "^#?(圣遗物|syw)?(狗粮a线|狗粮A线|glax)$",
        /** 执行方法 */
        fnc: "glax"
      },
      {
        /** 命令正则匹配 */
        reg: "^#?(圣遗物|syw)?(狗粮b线|狗粮B线|glbx)$",
        /** 执行方法 */
        fnc: "glbx"
      },
      ]
    })
  }


  async glax(e) {
    //文本
    const text = "//---------↓SG-miya↓---------";
    //路线基本参数
    const text1 = "\n>> 路线名称:须弥圣遗物狗粮A线 (须弥线)";
    // const text2 = "\n>> 怪物数量:131";
    const text3 = "\n>> 预计耗时:12~14min";
    // const text4 = "\n>> 收益:200+矿";
    const text5 = "\n>> 狗粮平均:127个";
    // const text6 = "\n>> 上限需要:三趟";
    // const text7 = "\n>> 上限:400定义精英怪";
    const text_ = "\n------不清晰请保存原图查看------//";
    const route_link = "\n>> https://www.miyoushe.com/ys/article/35332798";
    let msg = [
        //@用户
        // segment.at(e.user_id),
      //文本消息
       text,
       text1,
      //  text2,
       text3,
      //  text4,
       text5,
      //  text6,
      //  text7,
       text_,
        //路线图
        segment.image(`file:///${s_path}/glax.jpg`),
        // segment.image(`       `),
        //插入链接[挖坑]
        // route_link,
            ];
    e.reply(msg);
    //返回true 阻挡消息不再往下
    return true;
    }
    async glbx(e) {
      //文本
      const text = "//---------↓SG-miya↓---------";
      //路线基本参数
      const text1 = "\n>> 路线名称:圣遗物狗粮B线 （全图线）";
      // const text2 = "\n>> 怪物数量:131";
      const text3 = "\n>> 预计耗时:12~14min";
      // const text4 = "\n>> 收益:200+矿";
      const text5 = "\n>> 狗粮平均:119个";
      // const text6 = "\n>> 上限需要:三趟";
      // const text7 = "\n>> 上限:400定义精英怪";
      const text_ = "\n------不清晰请保存原图查看------//";
      const route_link = "\n>> https://www.miyoushe.com/ys/article/35332798";
      let msg = [
          //@用户
          // segment.at(e.user_id),
        //文本消息
         text,
         text1,
        //  text2,
         text3,
        //  text4,
         text5,
        //  text6,
        //  text7,
         text_,
          //路线图
          segment.image(`file:///${s_path}/glbx.jpg`),
          // segment.image(`       `),
          //插入链接[挖坑]
          // route_link,
              ];
      e.reply(msg);
      //返回true 阻挡消息不再往下
      return true;
      }
}