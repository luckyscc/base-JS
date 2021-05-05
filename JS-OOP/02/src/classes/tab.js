class Tab {
  constructor(mode) {
    this.mode = mode ==='fade' || mode === 'slide' ? mode : 'fade'
    this.oPage = $('.J_page')
    this.oTab = $('.J_tab')
    this.opageWrap = this.oPage.children('.page-wrap')
    this.oPageItems = this.oPage.find('.item')
    this.init()
  }

  init () {
    this.setMode()
    this.bindEvent()
  }

  setMode () {
    this.opageWrap.addClass(this.mode)
  }

  bindEvent () {
    this.oTab.on('click', '.item', $.proxy(this.tabClick, this))
  }

  tabClick (e) {
    var e = e || window.event
    var tar = e.target || e.srcElement
    var curIdx = $(tar).index()
    if (tar.className === 'item') {
      $(tar).addClass('current').siblings('.item').removeClass('current')
      this._pageChange(curIdx)
    }
  }

  _pageChange (index) {
    switch(this.mode) {
      case 'fade':
        this._fadePage(index)
        break
      case 'slide':
        this._slidePage(index)
        break
      default:
        this._fadePage(index)
        break  
    }
  }

  _fadePage (index) {
    this.oPageItems.eq(index).fadeIn(100).siblings('.item').fadeOut(100)
  }

  _slidePage (index) {
    this.opageWrap.animate({
      left: -index * 500 + 'px'
    })
  }
}

export { Tab }