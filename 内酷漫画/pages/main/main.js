Page({
  data:{
     current:0,
     onecolor:"#999",
     twocolor:"#fff",
     threecolor:"#fff",
     fourcolor:"#fff",
     hidden: false,
     initial:[],
     isShow:true,
     islowshow:true
  },
  onLoad:function(options){
      var that = this;
    wx.request({
      url: 'http://localhost:8081/mock/initial.json',
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res) {
        // console.log(res.data)
        setTimeout(function () {
          that.setData({
            initial:res.data,
            hidden: true,
          });
          // console.log(that.data.initial);
        }, 1500);
      },
      fail: function (error) {
        console.log(error);
      }
    });
  },
  onReady:function(){
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
  shoucollecyion:function(){
    this.setData({
      current:0,
     onecolor:"#999",
     twocolor:"#fff",
     threecolor:"#fff",
     fourcolor:"#fff"
    });
  },
  hostcollection:function(){
    this.setData({
     current:1,
     onecolor:"#fff",
     twocolor:"#999",
     threecolor:"#fff",
     fourcolor:"#fff"
    });
  },
  guocollection:function(){
    this.setData({
     current:2,
     onecolor:"#fff",
     twocolor:"#fff",
     threecolor:"#999",
     fourcolor:"#fff"
    });
  },
  updatecollection:function(){
     this.setData({
     current:3,
     onecolor:"#fff",
     twocolor:"#fff",
     threecolor:"#fff",
     fourcolor:"#999"
    });
  },
  currentchange:function(event){
    // console.log(event.detail.current);
    if(event.detail.current==0){
       this.setData({
       onecolor:"#999",
       twocolor:"#fff",
       threecolor:"#fff",
       fourcolor:"#fff"
    });
    }else if(event.detail.current==1){
    this.setData({
       onecolor:"#fff",
       twocolor:"#999",
       threecolor:"#fff",
       fourcolor:"#fff"
    });
    }else if(event.detail.current==2){
    this.setData({
       onecolor:"#fff",
       twocolor:"#fff",
       threecolor:"#999",
       fourcolor:"#fff"
    });
    }else if(event.detail.current==3){
    this.setData({
       onecolor:"#fff",
       twocolor:"#fff",
       threecolor:"#fff",
       fourcolor:"#999"
    });
    }
    // console.log(event.detail.current);
  },
  scrolltop:function(){
  var that = this;
    this.setData({
       isShow: false
    });
    wx.request({
      url: 'http://localhost:8081/mock/resh.json',
      success: function (res) {
        setTimeout(function () {
          that.setData({
            initial: res.data.concat(that.data.initial),
            isShow: true
          });
        }, 1500);
      }
    });
  },
  scrolllower:function(){
      var that = this;
    this.setData({
       islowshow: false
    });
    wx.request({
      url: 'http://localhost:8081/mock/more.json',
      success: function (res) {
        setTimeout(function () {
          that.setData({
            initial: that.data.initial.concat(res.data),
           islowshow:true
          });
        }, 1500);
      }
    });
  }
})