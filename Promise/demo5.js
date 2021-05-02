const fs = require('fs')

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

Promise.race([
  readFile('./data/user.json', true),
  readFile('./data/userCourse.json'),
  readFile('./data/course.json')
])
.then((res) => {
  console.log(res)
})
.catch((err) => {
  console.log(err)
})

// 谁先完成就返回那个promise的结果，无论成功失败