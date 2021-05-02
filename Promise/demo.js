// promise 构造函数 需要new
// promise 参数 excutor 执行器
// excutor -> resolve reject 函数
// excutor new Promise的时候调用

// excutor是同步执行的
let promise = new Promise((resolve, reject) => {
  //resolve('承诺实现')
  reject('承诺石沉大海')
})

promise.then((res) => {
  console.log(err)
}, (err) => {
  console.log('then', err)
}).catch(err => {
  console.log('catch', err)
})

// pending -> resolve
// pending -> reject
// 反过来不行

// then和catch会穿透一直到reject执行