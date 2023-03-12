import fs from 'node:fs'
import Ver from './components/Version.js'
import chalk from 'chalk'
const files = fs.readdirSync('./plugins/SGmiya-plugin/apps').filter(file => file.endsWith('.js'))

let ret = []

logger.info(`\n
\t${chalk.rgb(253, 235, 255)(`   _____    _____    Hellow~    _     欢迎锄地！   `)}\t
\t${chalk.rgb(253, 235, 255)(`  / ____|  / ____|             (_)                `)}\t
\t${chalk.rgb(253, 235, 255)(` | (___   | |  __   _ __ ___    _   _   _    __ _ `)}\t
\t${chalk.rgb(253, 235, 255)(`  |___ |  | | |_ | | '_ ' _ |  | | | | | |  / _' |`)}\t
\t${chalk.rgb(253, 235, 255)(`  ____) | | |__| | | | | | | | | | | |_| | | (_| |`)}\t
\t${chalk.rgb(253, 235, 255)(` |_____/   |_____| |_| |_| |_| |_|  |__, |  |__,_|`)}\t
\t${chalk.rgb(253, 235, 255)(`                                     __/ |        `)}\t
\t${chalk.rgb(253, 235, 255)(`    珊瑚宫插件${Ver.ver}初始化~          |___/         `)}\t`)

files.forEach((file) => {
  ret.push(import(`./apps/${file}`))
})

ret = await Promise.allSettled(ret)

let apps = {}
for (let i in files) {
  let name = files[i].replace('.js', '')

  if (ret[i].status != 'fulfilled') {
    logger.error(`载入插件错误：${logger.red(name)}`)
    logger.error(ret[i].reason)
    continue
  }
  // let value = ret[i].value
  // for (let f in value) {
  //   apps[f] = value[f]
  // }
  apps[name] = ret[i].value[Object.keys(ret[i].value)[0]]
}

export { apps }
