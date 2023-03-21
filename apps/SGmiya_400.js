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
              reg: "^#?-6$",
              /** 执行方法 */
              fnc: "jianl"
          },
          {
            /** 命令正则匹配 */
            reg: "^#?+6$",
            /** 执行方法 */
            fnc: "jial"
        },
          {
            /** 命令正则匹配 */
            reg: "^#?空壳路线$",
            /** 执行方法 */
            fnc: "kk"
          },
          {
            /** 命令正则匹配 */
            reg: "^#?龙兽路线$",
            /** 执行方法 */
            fnc: "ls"
          },
          {
            /** 命令正则匹配 */
            reg: "^#?+2$",
            /** 执行方法 */
            fnc: "jiae"
          },
          {
            /** 命令正则匹配 */
            reg: "^#?-2$",
            /** 执行方法 */
            fnc: "jiane"
          },
          {
            /** 命令正则匹配 */
            reg: "^#?愚人众路线$",
            /** 执行方法 */
            fnc: "yrz"
          },
          {
            /** 命令正则匹配 */
            reg: "^#?镜女路线$",
            /** 执行方法 */
            fnc: "jn"
          },
          {
            /** 命令正则匹配 */
            reg: "^#?圣骸兽路线$",
            /** 执行方法 */
            fnc: "shs"
          },
          {
            /** 命令正则匹配 */
            reg: "^#?流血狗裤线$",
            /** 执行方法 */
            fnc: "lsg"
          },
          {
            /** 命令正则匹配 */
            reg: "^#?蕈兽路线$",
            /** 执行方法 */
            fnc: "xs"
          },
      ]
    })
  }


  async jianl(e) {

    //文本
    const text = "/-------------------------------------------------";
    //路线基本参数
    const text1 = "\n> 路线名称:精英怪-600︱Unbelievable";
    const text2 = "\n> 怪物数量:131";
    const text3 = "\n> 预计耗时:23min";
    const text4 = "\n> 摩拉收益:4.3w+2.0w（怪物收益+圣遗物狗粮）";
    const text5 = "\n> 狗粮平均:13个（蓝＋紫）";
    const text6 = "\n-------------------------------------------------/";
    let msg = [
        // //@用户
        // segment.at(e.user_id),
      //文本消息
       text,
       text1,
       text2,
       text3,
       text4,
       text5,
       text6,

        //图片
        segment.image(`file:///${s_path}/jianl.webp`)
            ];
    e.reply(msg);

    //返回true 阻挡消息不再往下
    return true;
    }   

}