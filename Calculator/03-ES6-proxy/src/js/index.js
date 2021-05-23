import Calculator from '../modules/Calculator'

;(function (doc) {

  const oCalulator = doc.getElementsByClassName('J_calculator')[0]

  const init = () => {
    new Calculator(oCalulator).init()
  }

  init()

})(document)