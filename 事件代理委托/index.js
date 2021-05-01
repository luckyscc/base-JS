const list = document.getElementById('list')
const lis = list.getElementsByTagName('li')
const btn = document.getElementById('btn')
liArray = Array.prototype.slice.call(lis)

// 绑定事件处理函数
function addEvent(elem, type, fn) {
  elem.addEventListener(type, fn)
}

// liArray.forEach(li => {
//   addEvent(li, 'click', () => {
//     alert(li.innerHTML)
//   })
// })

addEvent(list, 'click', (e) => {
  const target = e.target
  if(target.nodeName === 'LI') {
    alert(target.innerHTML)
  }
})

// 点击按钮，增加一项
btn.addEventListener('click', () => {
  const li = document.createElement('li')
 li.innerHTML = '新增项目' 
 list.insertBefore(li, btn)
})