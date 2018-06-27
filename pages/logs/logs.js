//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
	sttafinfo:{
		money:'1000.00',
		unfinishedgd:'10',
		donegd:'90'
	}
  },
  onLoad: function () {
    
  },
  myworkorder: function(e){
    wx.navigateTo({
      url: '../myworkorder/order'
    })
  }
})
