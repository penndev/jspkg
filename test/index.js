import { byteFormat, timeFormat, secFormat, bpsFormat } from "../utils/index.js"


console.log(`timeFormat("Y-m-d H:i:s", Math.floor(Date.now()/1000))`, timeFormat("Y-m-d H:i:s", Math.floor(Date.now()/1000)))

console.log(`byteFormat(10000000000000000)`, byteFormat(10000000000000000)) 

console.log(`secFormat(3600*24*30*60)`, secFormat(3600*24*30*60))

console.log(`bpsFormat(3600*24*30*60)`, bpsFormat(1000*24*30*60))
