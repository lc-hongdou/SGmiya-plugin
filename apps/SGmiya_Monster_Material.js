import { segment } from "oicq";
import fs from 'fs';
const _path = process.cwd();//项目路径
const s_path = `${_path}/plugins/SGmiya-plugin/resources/SGmiya/`


export class SGrode extends plugin {
  constructor() {
    super({
      name: 'SG',
      dsc: '怪物材料路线',
      event: 'message',
      priority: 5000,
      rule: [
        {
          /** 命令正则匹配 */
          reg: "^#?(空壳路线|空壳讨伐|kklx)$",
          /** 执行方法 */
          fnc: "kklx"
        },
        {
          /** 命令正则匹配 */
          reg: "^#?(龙兽路线|龙兽讨伐|lslx)$",
          /** 执行方法 */
          fnc: "lslx"
        },
        {
          /** 命令正则匹配 */
          reg: "^#?(元能四连路线|元能四连|ynsllx|a2)$",
          /** 执行方法 */
          fnc: "ynsllx"
        },
        {
          /** 命令正则匹配 */
          reg: "^#?(元能快速讨伐|元能讨伐|ynkstf|-2)$",
          /** 执行方法 */
          fnc: "ynkstf"
        },
        {
          /** 命令正则匹配 */
          reg: "^#?(愚人众精英怪配平路线|配平路线|pplx)$",
          /** 执行方法 */
          fnc: "pplx"
        },
        {
          /** 命令正则匹配 */
          reg: "^#?(镜女路线|镜女讨伐|jnlx)$",
          /** 执行方法 */
          fnc: "jnlx"
        },
        {
          /** 命令正则匹配 */
          reg: "^#?(圣骸兽路线|圣骸兽讨伐|shslx)$",
          /** 执行方法 */
          fnc: "shslx"
        },
        {
          /** 命令正则匹配 */
          reg: "^#?(流血狗路线|流血狗讨伐|lxglx)$",
          /** 执行方法 */
          fnc: "lxglx"
        },
      ]
    })
  }


  async kklx(e) {
    //文本
    const text = "//---------↓SG-miya↓---------";
    //路线基本参数
    const text1 = "\n>> 路线名称:空壳材料路线|没上限补怪路线";
    // const text2 = "\n>> 怪物数量:131";
    // const text3 = "\n>> 预计耗时:15~25min";
    // const text4 = "\n>> 收益:200+矿";
    // const text5 = "\n>> 狗粮平均:13个（蓝＋紫）";
    // const text6 = "\n>> 上限需要:三趟";
    // const text7 = "\n>> 上限:400定义精英怪";
    const text_ = "\n------不清晰请保存原图查看------//";
    const route_link = "\n>> https://www.miyoushe.com/ys/article/19778701";
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
        // segment.image(`file:///${s_path}/fklx.webp`),
        segment.image(`https://s2.loli.net/2023/03/27/PSh4qlKzr8nuCDd.webp`),
        //插入链接[挖坑]
        // route_link,
            ];
    e.reply(msg);
    //返回true 阻挡消息不再往下
    return true;
    }
  async lslx(e) {
    //文本
    const text = "//---------↓SG-miya↓---------";
    //路线基本参数
    const text1 = "\n>> 路线名称:V3.1龙兽讨伐路线图";
    const text2 = "\n>> 怪物数量:33~35只";
    // const text3 = "\n>> 预计耗时:15~25min";
    // const text4 = "\n>> 收益:200+矿";
    // const text5 = "\n>> 狗粮平均:13个（蓝＋紫）";
    // const text6 = "\n>> 上限需要:三趟";
    // const text7 = "\n>> 上限:400定义精英怪";
    const text8 = "\n>> 推荐阵容:双风+任意锄地角色";
    const text_ = "\n------不清晰请保存原图查看------//";
    const route_link = "\n>> https://www.miyoushe.com/ys/article/29785529";
    let msg = [
        //@用户
        // segment.at(e.user_id),
      //文本消息
       text,
       text1,
       text2,
      //  text3,
      //  text4,
      //  text5,
      //  text6,
      //  text7,
       text8,
       text_,
        //路线图
        // segment.image(`file:///${s_path}/fklx.webp`),
        segment.image(`https://s2.loli.net/2023/03/27/acZ4Cruk6vqV2bY.webp`),
        //插入链接[挖坑]
        // route_link,
            ];
    e.reply(msg);
    //返回true 阻挡消息不再往下
    return true;
    }
  async ynsllx(e) {
    //文本
    const text = "//---------↓SG-miya↓---------";
    //路线基本参数
    const text1 = "\n>> 路线名称:+2元能构装体4连上限";
    const text2 = "\n>> 怪物数量:99~102只";
    const text3 = "\n>> 预计耗时:25~30min";
    // const text4 = "\n>> 收益:200+矿";
    // const text5 = "\n>> 狗粮平均:13个（蓝＋紫）";
    // const text6 = "\n>> 上限需要:三趟";
    // const text7 = "\n>> 上限:400定义精英怪";
    const text8 = "\n>> 推荐阵容:双风+任意锄地角色";
    const text_ = "\n------不清晰请保存原图查看------//";
    const route_link = "\n>> https://www.miyoushe.com/ys/article/34856070";
    let msg = [
        //@用户
        // segment.at(e.user_id),
      //文本消息
        text,
        text1,
        text2,
        text3,
      //  text4,
      //  text5,
      //  text6,
      //  text7,
        text8,
        text_,
        //路线图
        // segment.image(`file:///${s_path}/fklx.webp`),
        segment.image(`https://s2.loli.net/2023/03/27/d5tMprNRTGJ1n6D.webp`),
        //插入链接[挖坑]
        // route_link,
            ];
    e.reply(msg);
    //返回true 阻挡消息不再往下
    return true;
    }
  async ynkstf(e) {
    //文本
    const text = "//---------↓SG-miya↓---------";
    //路线基本参数
    const text1 = "\n>> 路线名称:3.4元能构装体67只-2路快速讨伐路线";
    const text2 = "\n>> 怪物数量:67只";
    const text3 = "\n>> 预计耗时:18~22min";
    // const text4 = "\n>> 收益:200+矿";
    // const text5 = "\n>> 狗粮平均:13个（蓝＋紫）";
    // const text6 = "\n>> 上限需要:三趟";
    // const text7 = "\n>> 上限:400定义精英怪";
    const text8 = "\n>> 推荐阵容:双风+任意锄地角色";
    const text_ = "\n------不清晰请保存原图查看------//";
    const route_link = "\n>> https://www.miyoushe.com/ys/article/34612392";
    let msg = [
        //@用户
        // segment.at(e.user_id),
      //文本消息
        text,
        text1,
        text2,
        text3,
      //  text4,
      //  text5,
      //  text6,
      //  text7,
        text8,
        text_,
        //路线图
        // segment.image(`file:///${s_path}/fklx.webp`),
        segment.image(`https://s2.loli.net/2023/03/27/IEzahxsfoT3bHXi.webp`),
        //插入链接[挖坑]
        // route_link,
            ];
    e.reply(msg);
    //返回true 阻挡消息不再往下
    return true;
    }
  async pplx(e) {
    //文本
    const text = "//---------↓SG-miya↓---------";
    //路线基本参数
    const text1 = "\n>> 路线名称:愚人众精英怪配平路线（雷冰萤+债务处理人+镜女）";
    // const text2 = "\n>> 怪物数量:67只";
    // const text3 = "\n>> 预计耗时:18~22min";
    // const text4 = "\n>> 收益:200+矿";
    // const text5 = "\n>> 狗粮平均:13个（蓝＋紫）";
    // const text6 = "\n>> 上限需要:三趟";
    // const text7 = "\n>> 上限:400定义精英怪";
    const text8 = "\n>> 推荐阵容:双风+任意锄地角色";
    const text_ = "\n------不清晰请保存原图查看------//";
    const route_link = "\n>> https://www.miyoushe.com/ys/article/29996255";
    let msg = [
        //@用户
        // segment.at(e.user_id),
      //文本消息
        text,
        text1,
        // text2,
        // text3,
      //  text4,
      //  text5,
      //  text6,
      //  text7,
        text8,
        text_,
        //路线图
        // segment.image(`file:///${s_path}/fklx.webp`),
        segment.image(`https://s2.loli.net/2023/03/27/ZtprduEVNXO7UBT.webp`),
        //插入链接[挖坑]
        // route_link,
            ];
    e.reply(msg);
    //返回true 阻挡消息不再往下
    return true;
    }
  async jnlx(e) {
    //文本
    const text = "//---------↓SG-miya↓---------";
    //路线基本参数
    const text1 = "\n>> 路线名称:原神-藏镜仕女-讨伐路线";
    const text2 = "\n>> 怪物数量:32~34只";
    // const text3 = "\n>> 预计耗时:18~22min";
    const text4 = "\n>> 收益:15分钟27只";
    // const text5 = "\n>> 狗粮平均:13个（蓝＋紫）";
    // const text6 = "\n>> 上限需要:三趟";
    // const text7 = "\n>> 上限:400定义精英怪";
    const text8 = "\n>> 推荐阵容:双风+任意锄地角色";
    const text_ = "\n------不清晰请保存原图查看------//";
    const route_link = "\n>> https://www.miyoushe.com/ys/article/31519330";
    let msg = [
        //@用户
        // segment.at(e.user_id),
      //文本消息
        text,
        text1,
        text2,
        // text3,
        text4,
      //  text5,
      //  text6,
      //  text7,
        text8,
        text_,
        //路线图
        // segment.image(`file:///${s_path}/fklx.webp`),
        segment.image(`https://s2.loli.net/2023/03/27/ySHolbr38paKCUT.webp`),
        //插入链接[挖坑]
        // route_link,
            ];
    e.reply(msg);
    //返回true 阻挡消息不再往下
    return true;
    }
  async shslx(e) {
    //文本
    const text = "//---------↓SG-miya↓---------";
    //路线基本参数
    const text1 = "\n>> 路线名称:圣骸兽讨伐材料路线";
    // const text2 = "\n>> 怪物数量:32~34只";
    // const text3 = "\n>> 预计耗时:18~22min";
    // const text4 = "\n>> 收益:15分钟27只";
    // const text5 = "\n>> 狗粮平均:13个（蓝＋紫）";
    // const text6 = "\n>> 上限需要:三趟";
    // const text7 = "\n>> 上限:400定义精英怪";
    const text8 = "\n>> 推荐阵容:怪物血量高，推荐精英怪锄地阵容";
    const text_ = "\n------不清晰请保存原图查看------//";
    const route_link = "\n>> https://www.miyoushe.com/ys/article/35149487";
    let msg = [
        //@用户
        // segment.at(e.user_id),
      //文本消息
        text,
        text1,
      //   text2,
        // text3,
      //  text4,
      //  text5,
      //  text6,
      //  text7,
        text8,
        text_,
        //路线图
        // segment.image(`file:///${s_path}/fklx.webp`),
        segment.image(`https://s2.loli.net/2023/03/27/Wh6y8ZQbLesUxuG.webp`),
        //插入链接[挖坑]
        // route_link,
            ];
    e.reply(msg);
    //返回true 阻挡消息不再往下
    return true;
    }
  async lxglx(e) {
    //文本
    const text = "//---------↓SG-miya↓---------";
    //路线基本参数
    const text1 = "\n>> 路线名称:原神-流血狗-高效路线（8分钟200材料）";
    const text2 = "\n>> 怪物数量:平均34左右";
    const text3 = "\n>> 预计耗时:8min";
    // const text4 = "\n>> 收益:15分钟27只";
    // const text5 = "\n>> 狗粮平均:13个（蓝＋紫）";
    // const text6 = "\n>> 上限需要:三趟";
    // const text7 = "\n>> 上限:400定义精英怪";
    const text8 = "\n>> 路线设计避开了-6路线，四连可与-6兼容";
    const text_ = "\n------不清晰请保存原图查看------//";
    const route_link = "\n>> https://www.miyoushe.com/ys/article/31948915";
    let msg = [
        //@用户
        // segment.at(e.user_id),
      //文本消息
        text,
        text1,
        text2,
        text3,
      //  text4,
      //  text5,
      //  text6,
      //  text7,
        text8,
        text_,
        //路线图
        // segment.image(`file:///${s_path}/fklx.webp`),
        segment.image(`https://s2.loli.net/2023/03/27/9y6FWU1tNYKfuHS.webp`),
        //插入链接[挖坑]
        // route_link,
            ];
    e.reply(msg);
    //返回true 阻挡消息不再往下
    return true;
    }
}