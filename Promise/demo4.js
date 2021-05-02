const fs = require('fs')

let num = 1

function readFile(path, isSetError) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', function (err, data) {
      if (err || isSetError) {
        reject('承诺石沉大海了')
      }

      const resData = JSON.parse(data)

      resolve(resData)
    })
  })
}

// interable(可迭代对象)类型的数据 -> Array Set Map
Promise.all([
  readFile('./data/user.json'),
  readFile('./data/userCourse.json'),
  readFile('./data/course.json')
])
.then((res) => {
  console.log(res)
})
// 用于多个任务并发运行，他的结果创建承诺之后使用，等待所有任务结果的完成
// 如果传递的不是promise，直接resolve
// 内部没有元素返回[]
// 有一个promise是rejected 实例回调rejected
// 失败的原因是第一个失败的promise结果