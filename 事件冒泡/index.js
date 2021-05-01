function bindEvent(elem, type, fn) {
  elem.addEventListener(type, fn)
}

const p1 = document.getElementById('p1')
const list1 = document.getElementById('list1')
const body = document.body

bindEvent(body, 'click', function() {
  console.log('取消')
})

bindEvent(p5, 'click', function() {
  event.stopPropagation()
  console.log('确定')
})