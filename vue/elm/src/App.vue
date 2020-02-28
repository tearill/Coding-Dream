<template>
  <div id="app">
    <!-- <div style="width:16rem;height:2rem;backgroundColor:red;"></div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- <router-view/> -->
    <!-- 首页 -->
    <!-- <head-top headTitle="东华理工大学广兰校区">
      <span class="head_logo" slot="logo">ele.me</span>
    </head-top> -->
    <!-- 地址 -->
    <!-- <head-top headTitle="编辑地址" go-back="true">
      <span class="edit" slot="edit">编辑</span>
    </head-top> -->

    <!-- alert 通用功能 -->
    <alert-tip v-if="showAlert" :alertText="alterText" @closeTip="closeAlert" />
    <button @click="showCancelAlert">提示退出</button>
    <button @click="showLoginAlert">提示登录</button>
  </div>
</template>

<script>
import Header from './components/header/header'
import AlertTip from './components/common/alterTip'
export default {
  components: {
    "head-top": Header,
    "alert-tip": AlertTip
  },
  data() {
    return {
      showAlert: false,
      alterText: ''
    }
  },
  methods: {
    showCancelAlert() {
      this.alterText = '您真的要退出吗？'
      this.showAlert = true
    },
    showLoginAlert() {
      this.alterText = '您真的要登录吗？'
      this.showAlert = true
    },
    closeAlert() {
      this.showAlert = false
    }
  }
}
</script>

<style lang="stylus">
@import './style/common.styl'
@import './style/mixin.styl'

.head_logo
  left .4rem
  font-weight 400
  sc(0.7rem, #fff)
  wh(2.3rem, 0.7rem)

.edit 
  right 0.4rem
  sc(0.7rem, #fff)
  ct()
</style>
