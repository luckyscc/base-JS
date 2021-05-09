### 独立作用域

执行完后 立即销毁

```js
申明式
function test () {
  console.log(1)
}()  // 报错

test()

表达式
var a = function () {
  console.log(1)
}() // ok

!function () {
  console.log(1)
}() // ok

+function () {
  console.log(1)
}() // ok

-function () {
  console.log(1)
}() // ok

ES5模块
;(function () {
  console.log(1)
})(); // ok
```
