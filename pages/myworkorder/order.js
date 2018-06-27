// pages/myworkorder/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selected: true,
    selected1: false,
    plcaozuo:false,
    toView: 'red',
    scrollTop: 100,
    notdata:[
      {
        danhao:'180524',
        ticheng: '100',
        state:'完成',
        xdtime: '2018-06-05',
        xqtime: '2018-06-05  12:00'
      },
      {
        danhao: '180524',
        ticheng: '100',
        state: '完成',
        xdtime: '2018-06-05',
        xqtime: '2018-06-05  12:00'
      },
      {
        danhao: '180524',
        ticheng: '100',
        state: '完成',
        xdtime: '2018-06-05',
        xqtime: '2018-06-05  12:00'
      },
      {
        danhao: '180524',
        ticheng: '100',
        state: '完成',
        xdtime: '2018-06-05',
        xqtime: '2018-06-05  12:00'
      },
      {
        danhao: '180524',
        ticheng: '100',
        state: '完成',
        xdtime: '2018-06-05',
        xqtime: '2018-06-05  12:00'
      }
    ],
    enddata:[
      {
        danhao: '1805245',
        ticheng: '100',
        xdtime: '2018-06-05',
        wctime: '2018-06-05 12:00',
        xqtime: '2018-06-05  12:00'
      },
      {
        danhao: '1805245',
        ticheng: '100',
        xdtime: '2018-06-05',
        wctime: '2018-06-05 12:00',
        xqtime: '2018-06-05  12:00'
      },
      {
        danhao: '1805245',
        ticheng: '100',
        xdtime: '2018-06-05',
        wctime: '2018-06-05 12:00',
        xqtime: '2018-06-05  12:00'
      },
      {
        danhao: '1805245',
        ticheng: '100',
        xdtime: '2018-06-05',
        wctime: '2018-06-05 12:00',
        xqtime: '2018-06-05  12:00'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  selected: function (e) {
    this.setData({
      selected1: false,
      selected: true
    })
  },
  selected1: function (e) {
    this.setData({
      selected: false,
      selected1: true
    })
  },
  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  scroll: function (e) {
    console.log(e)
  },
  tap: function (e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },
  // 批量操作
  plcaozuo: function (e) {
    this.setData({
      plcaozuo:true
    })
  },
  // 取消
  primary: function (e) {
    this.setData({
      plcaozuo: false
    })
  }
})