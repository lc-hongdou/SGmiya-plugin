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
          reg: "^#?(飘浮灵路线|飘浮灵讨伐|pfllx)$",
          /** 执行方法 */
          fnc: "pfllx"
        },
        {
          /** 命令正则匹配 */
          reg: "^#?(盗宝团路线|盗宝团讨伐|dbtlx)$",
          /** 执行方法 */
          fnc: "dbtlx"
        },
        {
          /** 命令正则匹配 */
          reg: "^#?(刀镡路线|野伏众讨伐|刀车|dxlx|dc)$",
          /** 执行方法 */
          fnc: "dxlx"
        },
        {
          /** 命令正则匹配 */
          reg: "^#?(骗骗花路线|骗骗花讨伐|花车|pphlx|hc)$",
          /** 执行方法 */
          fnc: "pphlx"
        },
        {
          /** 命令正则匹配 */
          reg: "^#?(活化蕈兽路线|活化蕈兽讨伐|雷火蕈兽|lhxslx)$",
          /** 执行方法 */
          fnc: "lhxslx"
        },
        {
          /** 命令正则匹配 */
          reg: "^#?(普通蕈兽路线|普通蕈兽讨伐|普通蕈兽|ptxslx)$",
          /** 执行方法 */
          fnc: "ptxslx"
        },
        {
          /** 命令正则匹配 */
          reg: "^#?(史莱姆路线|史莱姆讨伐|slmlx)$",
          /** 执行方法 */
          fnc: "slmlx"
        },
        {
          /** 命令正则匹配 */
          reg: "^#?(镀金旅团路线|镀金旅团讨伐|djltlx)$",
          /** 执行方法 */
          fnc: "djltlx"
        },
        {
          /** 命令正则匹配 */
          reg: "^#?(镀金大驮兽路线|大驮兽讨伐|dtslx)$",
          /** 执行方法 */
          fnc: "dtslx"
        },
        {
          /** 命令正则匹配 */
          reg: "^#?(愚人众路线|愚人众讨伐|yrzlx)$",
          /** 执行方法 */
          fnc: "yrzlx"
        },
        {
          /** 命令正则匹配 */
          reg: "^#?(丘丘驮兽路线|丘丘驮兽讨伐|qqtslx)$",
          /** 执行方法 */
          fnc: "qqtslx"
        },
        {
          /** 命令正则匹配 */
          reg: "^#?(丘丘萨满路线|丘丘萨满讨伐|qqsmlx)$",
          /** 执行方法 */
          fnc: "qqsmlx"
        },
        
      ]
    })
  }
  async pfllx(e) {
    //文本
    const text = "//---------↓SG-miya↓---------";
    //路线基本参数
    const text1 = "\n>> 路线名称:飘浮灵路线|本路线为理论最优解";
    const text2 = "\n>> 怪物数量:145";
    const text3 = "\n>> 预计耗时:20~30min";
    // const text4 = "\n>> 收益:200+矿";
    const text_ = "\n------不清晰请保存原图查看------//";
    const route_link = "\n>> https://www.miyoushe.com/ys/article/28767537";
    let msg = [
        //@用户
        // segment.at(e.user_id),
      //文本消息
       text,
       text1,
       text2,
       text3,
      //  text4,
       text_,
        //路线图
        segment.image(`https://s2.loli.net/2023/04/15/YSLA5gl1PVWwcXT.webp`),
        //插入链接[挖坑]
        // route_link,
            ];
    e.reply(msg);
    //返回true 阻挡消息不再往下
    return true;
    }
  async dbtlx(e) {
    //文本
    const text = "//---------↓SG-miya↓---------";
    //路线基本参数
    const text1 = "\n>> 路线名称:盗宝团高效路线";
    const text2 = "\n>> 怪物数量:163";
    const text3 = "\n>> 预计耗时:15min";
    // const text4 = "\n>> 收益:200+矿";
    const text_ = "\n------不清晰请保存原图查看------//";
    const route_link = "\n>> https://www.miyoushe.com/ys/article/31345335";
    let msg = [
        //@用户
        // segment.at(e.user_id),
      //文本消息
        text,
        text1,
        text2,
        text3,
      //  text4,
        text_,
        //路线图
        segment.image(`https://s2.loli.net/2023/04/15/YXwDTCErZKWafNQ.webp`),
        //插入链接[挖坑]
        // route_link,
            ];
    e.reply(msg);
    //返回true 阻挡消息不再往下
    return true;
    }
  async dxlx(e) {
    //文本
    const text = "//---------↓SG-miya↓---------";
    //路线基本参数
    const text1 = "\n>> 路线名称:刀镡效率优先型路线";
    const text2 = "\n>> 怪物数量:165";
    const text3 = "\n>> 预计耗时:15~25min";
    // const text4 = "\n>> 收益:200+矿";
    const text_ = "\n------不清晰请保存原图查看------//";
    const route_link = "\n>> https://www.miyoushe.com/ys/article/25159158";
    let msg = [
        //@用户
        // segment.at(e.user_id),
      //文本消息
        text,
        text1,
        text2,
        text3,
      //  text4,
        text_,
        //路线图
        segment.image(`https://s2.loli.net/2023/04/15/YXwDTCErZKWafNQ.webp`),
        //插入链接[挖坑]
        // route_link,
            ];
    e.reply(msg);
    //返回true 阻挡消息不再往下
    return true;
    }
  async pphlx(e) {
    //文本
    const text = "//---------↓SG-miya↓---------";
    //路线基本参数
    const text1 = "\n>> 路线名称:3.1原神-骗骗花-高效路线";
    const text2 = "\n>> 怪物数量:66";
    const text3 = "\n>> 预计耗时:17min";
    const text4 = "\n>> 收益:72原素花蜜（白绿换算成蓝材料）";
    const text_ = "\n------不清晰请保存原图查看------//";
    const route_link = "\n>> https://www.miyoushe.com/ys/article/28504169";
    let msg = [
        //@用户
        // segment.at(e.user_id),
      //文本消息
        text,
        text1,
        text2,
        text3,
        text4,
        text_,
        //路线图
        segment.image(`https://s2.loli.net/2023/04/15/tTgkOGcizDaPV8d.webp`),
        //插入链接[挖坑]
        // route_link,
            ];
    e.reply(msg);
    //返回true 阻挡消息不再往下
    return true;
    }
  async lhxslx(e) {
    //文本
    const text = "//---------↓SG-miya↓---------";
    //路线基本参数
    const text1 = "\n>> 路线名称:活化蕈兽材料效率路线";
    const text2 = "\n>> 怪物数量:89";
    // const text3 = "\n>> 预计耗时:15~25min";
    // const text4 = "\n>> 收益:200+矿";
    const text_ = "\n------不清晰请保存原图查看------//";
    const route_link = "\n>> https://www.miyoushe.com/ys/article/32217399";
    let msg = [
        //@用户
        // segment.at(e.user_id),
      //文本消息
        text,
        text1,
        text2,
        // text3,
      //  text4,
        text_,
        //路线图
        segment.image(`https://s2.loli.net/2023/04/15/QeSCNkd2XRpxvmo.webp`),
        //插入链接[挖坑]
        // route_link,
            ];
    e.reply(msg);
    //返回true 阻挡消息不再往下
    return true;
    }
  async ptxslx(e) {
    //文本
    const text = "//---------↓SG-miya↓---------";
    //路线基本参数
    const text1 = "\n>> 路线名称:原神-普通蕈兽-高效路线";
    const text2 = "\n>> 怪物数量:157";
    const text3 = "\n>> 预计耗时:15min";
    const text4 = "\n>> 推荐阵容：双风+冰/水C";
    const text5 = "\n>> 禁止所有雷火系角色（蕈兽染火雷后会枯焦活化，击杀后会占用精英怪上限）";
    const text_ = "\n------不清晰请保存原图查看------//";
    const route_link = "\n>> https://www.miyoushe.com/ys/article/34789193";
    let msg = [
        //@用户
        // segment.at(e.user_id),
      //文本消息
        text,
        text1,
        text2,
        text3,
        text4,
        text5,
        text_,
        //路线图
        segment.image(`https://s2.loli.net/2023/04/15/4ehFJpIDourQ1Gf.webp`),
        //插入链接[挖坑]
        // route_link,
            ];
    e.reply(msg);
    //返回true 阻挡消息不再往下
    return true;
    }
  async slmlx(e) {
    //文本
    const text = "//---------↓SG-miya↓---------";
    //路线基本参数
    const text1 = "\n>> 路线名称:原神-史莱姆-高效路线";
    const text2 = "\n>> 怪物数量:89";
    const text3 = "\n>> 预计耗时:20min";
    const text4 = "\n>> 收益:43史莱姆原浆(160史莱姆凝液43史莱姆清11史莱姆原浆)";
    const text_ = "\n------不清晰请保存原图查看------//";
    const route_link = "\n>> https://www.miyoushe.com/ys/article/30510165";
    let msg = [
        //@用户
        // segment.at(e.user_id),
      //文本消息
        text,
        text1,
        text2,
        text3,
        text4,
        text_,
        //路线图
        segment.image(`https://s2.loli.net/2023/04/15/EuoGZbfjmL9P5wr.webp`),
        //插入链接[挖坑]
        // route_link,
            ];
    e.reply(msg);
    //返回true 阻挡消息不再往下
    return true;
    }
  async djltlx(e) {
    //文本
    const text = "//---------↓SG-miya↓---------";
    //路线基本参数
    const text1 = "\n>> 路线名称:V3.1镀金旅团-效率路线";
    const text2 = "\n>> 怪物数量:158";
    // const text3 = "\n>> 预计耗时:15~25min";
    const text4 = "\n>> 收益:70织金红绸缎";
    const text_ = "\n------不清晰请保存原图查看------//";
    const route_link = "\n>> https://www.miyoushe.com/ys/article/28018505";
    let msg = [
        //@用户
        // segment.at(e.user_id),
      //文本消息
        text,
        text1,
        text2,
        // text3,
      //  text4,
        text_,
        //路线图
        segment.image(`https://s2.loli.net/2023/04/15/UHk8JmCQtP1ZB4T.webp`),
        //插入链接[挖坑]
        // route_link,
            ];
    e.reply(msg);
    //返回true 阻挡消息不再往下
    return true;
    }  
  async dtslx(e) {
    //文本
    const text = "//---------↓SG-miya↓---------";
    //路线基本参数
    const text1 = "\n>> 路线名称:镀金大驮兽速刷路线";
    const text2 = "\n>> 怪物数量:43";
    const text3 = "\n>> 预计耗时:13~15min";
    const text4 = "\n>> 收益:194兽肉 520镀金白材料";
    const text_ = "\n------不清晰请保存原图查看------//";
    const route_link = "\n>> https://www.miyoushe.com/ys/article/35476784";
    let msg = [
        //@用户
        // segment.at(e.user_id),
      //文本消息
        text,
        text1,
        text2,
        text3,
        text4,
        text_,
        //路线图
        segment.image(`file:///${s_path}/dtslx.jpg`),
        //插入链接[挖坑]
        // route_link,
            ];
    e.reply(msg);
    //返回true 阻挡消息不再往下
    return true;
    }  
  async yrzlx(e) {
    //文本
    const text = "//---------↓SG-miya↓---------";
    //路线基本参数
    const text1 = "\n>> 路线名称:愚人众讨伐路线";
    const text2 = "\n>> 怪物数量:52";
    // const text3 = "\n>> 预计耗时:15~25min";
    // const text4 = "\n>> 收益:70织金红绸缎";
    const text_ = "\n------不清晰请保存原图查看------//";
    const route_link = "\n>> https://www.miyoushe.com/ys/article/23622684";
    let msg = [
        //@用户
        // segment.at(e.user_id),
      //文本消息
        text,
        text1,
        text2,
        // text3,
      //  text4,
        text_,
        //路线图
        segment.image(`https://s2.loli.net/2023/04/15/POUSj4fZqQstb75.webp`),
        //插入链接[挖坑]
        // route_link,
            ];
        e.reply(msg);
        //返回true 阻挡消息不再往下
        return true;
        }  
  async qqtslx(e) {
    //文本
    const text = "//---------↓SG-miya↓---------";
    //路线基本参数
    const text1 = "\n>> 路线名称:丘丘驮兽-F2高效路线";
    const text2 = "\n>> 怪物数量:18只丘丘驮兽";
    const text3 = "\n>> 预计耗时:3min";
    const text4 = "\n>> 收益:54兽肉 109面具";
    const text_ = "\n------不清晰请保存原图查看------//";
    const route_link = "\n>> https://www.miyoushe.com/ys/article/35808582";
    let msg = [
        //@用户
        // segment.at(e.user_id),
      //文本消息
        text,
        text1,
        text2,
        text3,
         text4,
        text_,
        //路线图
        segment.image(`https://s2.loli.net/2023/04/15/weMUt6RE9O4giVK.webp`),
        //插入链接[挖坑]
        // route_link,
            ];
    e.reply(msg);
    //返回true 阻挡消息不再往下
    return true;
    }  
  async qqsmlx(e) {
    //文本
    const text = "//---------↓SG-miya↓---------";
    //路线基本参数
    const text1 = "\n>> 路线名称:丘丘萨满-高效讨伐路线";
    // const text2 = "\n>> 怪物数量:158";
    const text3 = "\n>> 预计耗时:13min";
    const text4 = "\n>> 收益:7蓝30绿100白";
    const text_ = "\n------不清晰请保存原图查看------//";
    const route_link = "\n>> https://s2.loli.net/2023/04/15/yVBeOkJFiM12aSX.webp";
    let msg = [
        //@用户
        // segment.at(e.user_id),
      //文本消息
        text,
        text1,
        // text2,
        text3,
        text4,
        text_,
        //路线图
        segment.image(`https://s2.loli.net/2023/04/15/UHk8JmCQtP1ZB4T.webp`),
        //插入链接[挖坑]
        // route_link,
            ];
    e.reply(msg);
    //返回true 阻挡消息不再往下
    return true;
    }  
}