//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    toastData: {
      icon: "success",
      info1: "领取成功",
      info2: "5~10分钟到账",
      top: "50%"
    }
  },
  onReady() {
    this.toast = this.selectComponent("#toast");
  },
  show() {
    this.toast.showToast()
    this.toast.hideToast()
  }
})
