;(function (doc, initTools) {

  var oCalculator = doc.getElementsByClassName('J_calculator')[0]
  var oResult = oCalculator.getElementsByClassName('result')[0]
  var oInputs = doc.getElementsByTagName('input')
  var oBtnGroup = oCalculator.getElementsByClassName('btn-group')[0]

  var init = function () {
    bindEvent()
  }

  function bindEvent () {
    oBtnGroup.addEventListener('click', onBtnClick, false)
  }

  function onBtnClick (ev) {
    var tar = initTools.getTarget(ev)
    var tagName = tar.tagName.toLowerCase()
  
    if (tagName === 'button') {
      var method = tar.getAttribute('data-method')
      var fval = initTools.digitalize(oInputs[0].value)
      var sVal = initTools.digitalize(oInputs[1].value)
      
      renderResult(initCompute[method](fval, sVal))
    }
  }

  function renderResult (result) {
    oResult.innerText = result
  }

  init()
  
})(document, initTools)