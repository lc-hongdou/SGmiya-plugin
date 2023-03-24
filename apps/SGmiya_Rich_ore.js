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
          reg: "^#?(富矿路线|富矿|fklx)$",
          /** 执行方法 */
          fnc: "fklx"
      },
      {
        /** 命令正则匹配 */
        reg: "^#?(白铁矿路线|白铁块路线|btklx)$",
        /** 执行方法 */
        fnc: "btklx"
      },
      {
        /** 命令正则匹配 */
        reg: "^#?(铁矿路线|铁块路线|tklx)$",
        /** 执行方法 */
        fnc: "tklx"
    },
      ]
    })
  }


  async fklx(e) {
    //文本
    const text = "//---------↓SG-miya↓---------";
    //路线基本参数
    const text1 = "\n>> 路线名称:富矿：大世界4矿以上点位，层岩3矿以上点位，FFFFF到手软~\n在保证效率的同时，挖起来有爽感。";
    // const text2 = "\n>> 怪物数量:131";
    const text3 = "\n>> 预计耗时:15~25min";
    const text4 = "\n>> 收益:200+矿";
    const text5 = "\n>> 狗粮平均:13个（蓝＋紫）";
    // const text6 = "\n>> 上限需要:三趟";
    // const text7 = "\n>> 上限:400定义精英怪";
    const text_ = "\n------不清晰请保存原图查看------//";
    const route_link = "\n>> https://www.miyoushe.com/ys/article/35477129";
    let msg = [
        //@用户
        // segment.at(e.user_id),
      //文本消息
       text,
       text1,
      //  text2,
       text3,
       text4,
       text5,
      //  text6,
      //  text7,
       text_,
        //路线图
        // segment.image(`file:///${s_path}/fklx.webp`),
        segment.image(`https://s2.loli.net/2023/03/24/R31vxsphOPArgjK.webp`),
        //插入链接[挖坑]
        // route_link,
            ];
    e.reply(msg);
    //返回true 阻挡消息不再往下
    return true;
    }
    async btklx(e) {
      //文本
      const text = "//---------↓SG-miya↓---------";
      //路线基本参数
      const text1 = "\n>> 路线名称:白铁矿-挖取指南";
      // const text2 = "\n>> 怪物数量:131";
      // const text3 = "\n>> 预计耗时:15~25min";
      // const text4 = "\n>> 收益:200+矿";
      // const text5 = "\n>> 狗粮平均:13个（蓝＋紫）";
      // const text6 = "\n>> 上限需要:三趟";
      // const text7 = "\n>> 上限:400定义精英怪";
      const text_ = "\n------不清晰请保存原图查看------//";
      const route_link = "\n>> https://www.miyoushe.com/ys/article/30758249";
      let msg = [
          //@用户
          // segment.at(e.user_id),
        //文本消息
         text,
         text1,
        //  text2,
        //  text3,
        //  text4,
        //  text5,
        //  text6,
        //  text7,
         text_,
          //路线图
          // segment.image(`file:///${s_path}/btklx.webp`),
          segment.image(`https://s2.loli.net/2023/03/24/XFR58CBN9trvGQj.webp`),
          //插入链接[挖坑]
          // route_link,
              ];
      e.reply(msg);
      //返回true 阻挡消息不再往下
      return true;
      }
      async tklx(e) {
        //文本
        const text = "//---------↓SG-miya↓---------";
        //路线基本参数
        const text1 = "\n>> 路线名称:原神-铁矿-高效路线";
        // const text2 = "\n>> 怪物数量:131";
        const text3 = "\n>> 预计耗时:5min 80块";
        const text4 = "\n>> 收益:130+矿";
        // const text5 = "\n>> 狗粮平均:13个（蓝＋紫）";
        // const text6 = "\n>> 上限需要:三趟";
        // const text7 = "\n>> 上限:400定义精英怪";
        const text_ = "\n------不清晰请保存原图查看------//";
        const route_link = "\n>> https://www.miyoushe.com/ys/article/30479391";
        let msg = [
            //@用户
            // segment.at(e.user_id),
          //文本消息
           text,
           text1,
          //  text2,
           text3,
           text4,
          //  text5,
          //  text6,
          //  text7,
           text_,
            //路线图
            // segment.image(`file:///${s_path}/tklx.webp`),
            segment.image(`https://s2.loli.net/2023/03/24/4aQfphY1X9LCRyb.webp`),
            //插入链接[挖坑]
            // route_link,
                ];
        e.reply(msg);
        //返回true 阻挡消息不再往下
        return true;
        }
  }