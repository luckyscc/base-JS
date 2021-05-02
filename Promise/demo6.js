const fetch = require('node-fetch')

function getData() {
  return fetch('http://study.jsplusplus.com/xiaomi/getXiaomiDatas?phone=true')
    .then((res) => {
      return res.json()
    })
    .then((res) => {
      return res
    })
    .catch((err) => {
      return res
    })
}

// async的意思是当前这个异步函数与同一作用域下的程序是异步关系
async function logData () {
  const data = await getData()
  console.log(data)
}

logData()

// await 操作符
// 等待一个promise对象的结果
// 功能是暂停async对象产出结果的操作手段
// 假如Promise处理的结果是rejected，会抛出异常
// async函数是通过一个隐式的promise返回pending状态
