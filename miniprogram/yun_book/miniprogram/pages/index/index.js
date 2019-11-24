//index.js
Page({
  scanCode() {
    wx.scanCode({
      onlyFromCamera: true,
      scanType: ['barCode'],
      success: res => {
        let isbn = res.result;
        // isbn -> 到云里查一下
        // 委派一朵云去差API
        wx.cloud.callFunction({
          name: "bookinfo",
          data: {
            isbn: isbn
          },
          success: res => {
            console.log(res.result);
          }
        })
      }
    })
  }
})