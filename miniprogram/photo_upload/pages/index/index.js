//index.js
//获取应用实例
Page({
  data: {
    imgs: []
  },
  uploadImg() {
    wx.chooseImage({
      count: '9', //最多可以选择的图片张数,
      success: res => {
        console.log(res.tempFilePaths);
        
        let imgs = this.data.imgs
        for (let i = 0; i < res.tempFilePaths.length; i++) {
          imgs.push(res.tempFilePaths[i]);
        }

        this.setData({
          imgs
        })
      }, //返回图片的本地文件路径列表 tempFilePaths
    });
  },
  uploadFile() {
    wx.uploadFile({
      url: 'url', //开发者服务器 url
      filePath: 'filePath', //要上传文件资源的路径
      name: 'name', //文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容
      success: res => {},
      fail: () => {},
      complete: () => {}
    });
  }
})