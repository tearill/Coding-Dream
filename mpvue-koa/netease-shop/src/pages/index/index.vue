<template>
  <div class="index">
    <!-- 头部的搜索 -->
    <div class="search">
      <div @click="toMappage">{{cityName}}</div>
      <div>
        <input type="text" placeholder="搜索商品" />
        <span class="icon"></span>
      </div>
    </div>
    <div class="swiper">
      <swiper class="swiper-container" indicator-dots="true" auto-play="true" interval="3000" circular="true" duration="500">
        <block v-for="(item, index) in banner" :key="index">
          <swiper-item class="swiper-item">
            <image class="slide-image" :src="item.image_url" />
          </swiper-item>
        </block>
      </swiper>
    </div>
  </div>
</template>

<script>
import amapFile from "../../utils/amap-wx";
import { mapState, mapMutations } from "vuex";
import { get } from "../../utils"
export default {
  data() {
    return {
      banner: []
    };
  },
  computed: {
    ...mapState(["cityName"])
  },
  methods: {
    ...mapMutations(["update"]),
    toMappage() {
      // 通过wx.getSetting 先查询一下用户是否授权 "scoped.record"
      let _this = this;
      wx.getSetting({
        success: res => {
          // 如果没有同意授权，打开设置
          // console.log(res);
          if (!res.authSetting["scope.userLocation"]) {
            wx.openSetting({
              success: res => {
                // 获取授权位置信息
                _this.getCityName();
              }
            });
          } else {
            wx.navigateTo({
              url: "/pages/mappage/main"
            });
            // _this.getCityName()
          }
        },
        fail: err => {
          console.log(err);
        },
        complete: () => {}
      });
    },
    getCityName() {
      let _this = this;
      var myAmapFun = new amapFile.AMapWX({
        key: "c509f492191fdc6f78adcd3894a5ad1c"
      });
      myAmapFun.getRegeo({
        success: function(data) {
          // 成功回调
          console.log(data, "---------");
        },
        fail: function(info) {
          // 失败回调
          console.log(info, "111111111");
          // _this.cityName = '北京'
          _this.update({ cityName: "北京" });
        }
      });
    },
    async getData() {
      const data = await get('/index/index') // http://localhost:5757/lm/index/index
      console.log(data)
    }
  }
};
</script>

<style lang="less" scoped>
@import "./style.less";
</style>