<template>
  <div class="my">
    <div class="myinfo">
      <img :src="avatar" alt="">
      <div>
        <p>{{ userInfo.nickName }}</p>
        <p v-if="userInfo.nickName">微信用户</p>
        <p v-else>点击登录</p>
      </div>
    </div>
    <div class="iconlist">
      <div @click="goTo(item.url)" v-for="(item, index) in listData" :key="index">
        <span class="iconfont" :class="item.icon"></span>
        <span>{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { login, toLogin } from '../../utils'
export default {
  data() {
    return {
      listData: [
        {
          title: "我的订单",
          icon: "icon-unie64a",
          url: ""
        },
        {
          title: "优惠券",
          icon: "icon-youhuiquan",
          url: ""
        },
        {
          title: "我的足迹",
          icon: "icon-zuji",
          url: ""
        },
        {
          title: "我的收藏",
          icon: "icon-shoucang",
          url: "/pages/collectlist/main"
        },
        {
          title: "地址管理",
          icon: "icon-dizhiguanli",
          url: "/pages/addressSelect/main"
        },
        {
          title: "联系客服",
          icon: "icon-lianxikefu",
          url: ""
        },
        {
          title: "帮助中心",
          icon: "icon-bangzhuzhongxin",
          url: ""
        },
        {
          title: "意见反馈",
          icon: "icon-yijianfankui",
          url: "/pages/feedback/main"
        }
      ],
      avatar: 'http://yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png',
      allcheck: false,
      userInfo: {},
      Listids: []
    }
  },
  mounted() {
    if (login()) {
      this.userInfo = login()
      console.log(this.userInfo, '-------info')
      console.log(this.userInfo.nickName, '-------nickName')
      this.avatar = this.userInfo.avatarUrl
    }
  },
  methods: {
    goTo (url) {
      console.log(url, '----------url')
      wx.navigateTo({
        url: url
      });
    }
  }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>