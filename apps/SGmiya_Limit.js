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
      priority: 5000,
      rule: [
        {
          /** 命令正则匹配 */
          reg: "^#?(-6|日常路线|rclx|-600)$",
          /** 执行方法 */
          fnc: "rclx"
        },
        {
          /** 命令正则匹配 */
          reg: "^#?(a6|收益路线|sylx|a600)$",
          /** 执行方法 */
          fnc: "sylx"
        },
        {
          /** 命令正则匹配 */
          reg: "^#?(a2|效率路线|xllx)$",
          /** 执行方法 */
          fnc: "xllx"
        },        
        {
          /** 命令正则匹配 */
          reg: "^#?(小怪路线A|xglxa|xga)$",
          /** 执行方法 */
          fnc: "xglxa"
        },
        {
          /** 命令正则匹配 */
          reg: "^#?(小怪路线B|xglxb|xgb)$",
          /** 执行方法 */
          fnc: "xglxb"
        },       
      ]
    })
  }


    async rclx(e) {
    //文本
    const text = "//---------↓SG-miya↓---------";
    //路线基本参数
    const text1 = "\n>> 路线名称:精英怪-600";
    const text2 = "\n>> 怪物数量:131";
    const text3 = "\n>> 预计耗时:23min";
    const text4 = "\n>> 摩拉收益:4.3w+2.0w\n   （怪物收益+圣遗物狗粮）";
    const text5 = "\n>> 狗粮平均:13个（蓝＋紫）";
    const text6 = "\n>> 上限需要:三趟";
    const text7 = "\n>> 上限:400定义精英怪";
    const text_ = "\n------不清晰请保存原图查看------//";
    const route_link = "\n>> https://www.miyoushe.com/ys/article/34420195";
    let msg = [
        //@用户
        // segment.at(e.user_id),
      //文本消息
       text,
       text1,text2,text3,text4,text5,text6,text7,
       text_,
        //路线图
        segment.image(`file:///${s_path}/rclx.webp`),
        //插入链接[挖坑]
        // route_link,
            ];
    e.reply(msg);
    //返回true 阻挡消息不再往下
    return true;
    }
    async sylx(e) {
    //文本
    const text = "//---------↓SG-miya↓---------";
    //路线基本参数
    const text1 = "\n>> 路线名称:精英怪+600V1（130）";
    const text2 = "\n>> 怪物数量:131";
    const text3 = "\n>> 预计耗时:30min";
    const text4 = "\n>> 摩拉收益:5.7w";
    const text5 = "\n>> 狗粮平均:13个（蓝＋紫）";
    const text6 = "\n>> 上限需要:三趟";
    const text7 = "\n>> 上限:400定义精英怪";
    const text_ = "\n------不清晰请保存原图查看------//";
    const route_link = "\n>> https://www.miyoushe.com/ys/article/34588117";
    let msg = [
        //@用户
        // segment.at(e.user_id),
      //文本消息
       text,
       text1,text2,text3,text4,text5,text6,text7,
       text_,
        //路线图
        segment.image(`file:///${s_path}/sylx.webp`),
        //插入链接[挖坑]
        // route_link,
            ];
    e.reply(msg);
    //返回true 阻挡消息不再往下
    return true;
    }
    async xllx(e) {
      //文本
      const text = "//---------↓SG-miya↓---------";
      //路线基本参数
      const text1 = "\n>> 路线名称:+2（200摩拉怪物增加路线）";
      const text2 = "\n>> 怪物数量:130";
      const text3 = "\n>> 预计耗时:20min（三趟一小时上限）";
      const text4 = "\n>> 摩拉收益:2.9w+2w";
      const text5 = "\n>> 狗粮平均:13个（蓝＋紫）";
      const text6 = "\n>> 上限需要:三趟";
      const text7 = "\n>> 上限:400定义精英怪";
      const text_ = "\n------不清晰请保存原图查看------//";
      const route_link = "\n>> https://www.miyoushe.com/ys/article/34708984";
      let msg = [
          //@用户
          // segment.at(e.user_id),
        //文本消息
         text,
         text1,text2,text3,text4,text5,text6,text7,
         text_,
          //路线图
          segment.image(`file:///${s_path}/xllx.webp`),
          //插入链接[挖坑]
          // route_link,
              ];
      e.reply(msg);
      //返回true 阻挡消息不再往下
      return true;
    }
    async xglxa(e) {
      //文本
      const text = "//---------↓SG-miya↓---------";
      //路线基本参数
      const text1 = "\n>> 路线名称:上限型非精英怪锄地路线A【理论上限效率最高】";
      const text2 = "\n>> 怪物数量:600+小怪";
      const text3 = "\n>> 预计耗时:18~25min";
      const text4 = "\n>> 摩拉收益:3w";
      const text5 = "\n>> 狗粮平均:None";
      const text6 = "\n>> 上限需要:三趟";
      const text7 = "\n>> 上限:2000定义小怪";
      const text_ = "\n------不清晰请保存原图查看------//";
      const route_link = "\n>>                                    ";
      let msg = [
          //@用户
          // segment.at(e.user_id),
        //文本消息
          text,
          text1,text2,text3,text4,text5,text6,text7,
          text_,
          //路线图
          segment.image(`file:///${s_path}/xglxa.jpg`),
          //插入链接[挖坑]
          // route_link,
              ];
      e.reply(msg);
      //返回true 阻挡消息不再往下
      return true;
    }
    async xglxb(e) {
      //文本
      const text = "//---------↓SG-miya↓---------";
      //路线基本参数
      const text1 = "\n>> 路线名称:上限型非精英怪锄地路线B【适合萌新】";
      const text2 = "\n>> 怪物数量:500+小怪";
      const text3 = "\n>> 预计耗时:20~25min";
      const text4 = "\n>> 摩拉收益:2.3w";
      const text5 = "\n>> 狗粮平均:None";
      const text6 = "\n>> 上限需要:四趟";
      const text7 = "\n>> 上限:2000定义小怪";
      const text_ = "\n------不清晰请保存原图查看------//";
      const route_link = "\n>>                                    ";
      let msg = [
          //@用户
          // segment.at(e.user_id),
        //文本消息
          text,
          text1,text2,text3,text4,text5,text6,text7,
          text_,
          //路线图
          segment.image(`file:///${s_path}/xglxb.jpg`),
          //插入链接[挖坑]
          // route_link,
              ];
      e.reply(msg);
      //返回true 阻挡消息不再往下
      return true;
    }
}