//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    username: '',
    password: '',
	passwordtrue:false,
    hasUserInfo: false,
	item:{
		name:'1',
		value:'自动登录',
		checked:false,
	},
	isShowPassword: true,
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (options) {
	  // 生命周期函数--监听页面加载
	  
  }, 
  onLoad: function (options) {

  },
  toggleShowPassword: function (e) {
	  var isShowPassword = !this.data.isShowPassword;
	  this.setData({
		  isShowPassword: isShowPassword
	  });
  },
  logIn: function () {
	  	wx.navigateTo({
				url: '../logs/logs'
		})
	//   var that = this;
	//   wx.request({
	// 	  url: 'http://localhost:8000/admin',
	// 	  data: {
	// 		  username: this.data.userName,
	// 		  password: this.data.password,
	// 	  },
	// 	  method: 'GET',
	// 	  success: function (res) {
	// 		  that.setData({
	// 			  id_token: res.data.id_token,
	// 			  response: res
	// 		  })
	// 		  try {
	// 			  wx.setStorageSync('id_token', res.data.id_token)
	// 		  } catch (e) {
	// 		  }
	// 		  wx.navigateTo({
	// 			  url: '../components/welcome/welcome'
	// 		  })
	// 		  console.log(res.data);
	// 	  },
	// 	  fail: function (res) {
	// 		  console.log(res.data);
	// 		  console.log('is failed')
	// 	  }
	//   })
  },
  checkboxChange: function (e) {
	  console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  }
})
