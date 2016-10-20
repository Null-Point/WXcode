Page({
  data:{
    // text:"这是一个页面"
    initial:[]
  },
  onLoad:function(options){
     var that = this;
    wx.request({
      url: 'http://localhost:8081/mock/classfen.json',
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res) {
        setTimeout(function () {
          that.setData({
            initial:res.data
          });
        }, 1500);
      },
      fail: function (error) {
        console.log(error);
      }
    });
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})
