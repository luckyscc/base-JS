import tpl from './index.tpl'

export default class ResultComponent {
  constructor () {
    this.name = 'ResultCompontent'
  }

  tpl () {
    const oDiv = document.createElement('div')
    oDiv.innerHTML = tpl()
    return oDiv
  }
}