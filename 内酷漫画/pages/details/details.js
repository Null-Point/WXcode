Page({
  data:{
    // text:"这是一个页面"
    arrmy:[],
    tpages:[],
    toast1Hidden:true
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    wx.request({
      url: 'http://localhost:8081/mock/xiangqing.json',
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res) {
        that.setData({
            arrmy:res.data
          });
      },
      fail: function (error) {
        console.log(error);
      }
    });
  },
  onReady:function(){
    // 页面渲染完成
    var that = this;
    wx.request({
      url: 'http://localhost:8081/mock/page.json',
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res) {
        that.setData({
            tpages:res.data
          });
      },
      fail: function (error) {
        console.log(error);
      }
    });
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  toast1Change:function(){
  this.setData({
  toast1Hidden:true
  });
  },
  shoutext:function(){
      this.setData({
    toast1Hidden:false
  });
  }
})