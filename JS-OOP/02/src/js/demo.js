function People (name, height, weight) {
  // 成员属性
  this.name = name
  this.height = height
  this.weight = weight
}

// 成员方法
People.prototype.intro = function () {
  console.log('I am ' + this.name + '. ' + this.height + ' tall.And' + this.weight + ' kilos')
}

People.prototype.eat = function () {
  console.log('I am eating')
}

People.prototype.sleep = function () {
  console.log('I am sleeping')
}

People.prototype.drink = function () {
  console.log('I am drinking water')
}

var xiaoming = new People('小明', 175, 70)

xiaoming.intro()
xiaoming.drink()

var b = 10
(function b() {
  b = 20
  console.log(b)
})()