Page({
  data:{
     current:0,
     onecolor:"#999",
     twocolor:"#fff"
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
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
  },
  shoucollecyion:function(){
    this.setData({
      current:0,
      onecolor:"#999",
      twocolor:"#fff"
    });
  },
  hostcollection:function(){
    this.setData({
    current:1,
    onecolor:"#fff",
    twocolor:"#999"
    });
  },
  currentchange:function(event){
    if(event.detail.current==0){
       this.setData({
      onecolor:"#999",
      twocolor:"#fff"
    });
    }else{
    this.setData({
    onecolor:"#fff",
    twocolor:"#999"
    });
    }
    // console.log(event.detail.current);
  }
})