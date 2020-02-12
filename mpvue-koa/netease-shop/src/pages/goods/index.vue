<template>
  <div class="goods">
      <!-- banner 图 -->
      <div class="swiper">
          <swiper class="swiper-container" indicator-dots autoplay interval="3000" duration="1000" circular>
              <block>
                  <swiper-item class="swiper-item" v-for="(item, index) in gallery" :key="index">
                      <img class="slide-image" :src="item.img_url" alt="" />
                  </swiper-item>
              </block>
          </swiper>
          <button class="share" hover-class="none" open-type="share" value="">分享商品</button>
      </div>
      <div class="swiper-b">
          <div class="item">30天无忧退货</div>
          <div class="item">48小时快速退款</div>
          <div class="item">满88元免邮费</div>
      </div>
      <div class="goods-info">
          <div class="c">
              <p>{{info.name}}</p>
              <p>{{info.goods_brief}}</p>
              <p>¥{{info.retail_price}}</p>
              <div class="brand" v-if="brand.name">
                  <p>{{brand.name}}</p>
              </div>
          </div>
      </div>
      <div class="section-nav" @click="showType">
          <div>请选择规格数量</div>
          <!-- 箭头 -->
          <div></div>
      </div>

      <!-- 选择规格的弹出层 -->
      
  </div>
</template>

<script>
import { get, post } from '../../utils/index'
export default {
    data() {
        return {
            gallery: [], // banner图
            id: '',
            openId: '',
            info: {},
            brand: {},
            showpop: false
        }
    },
    // 商品分享
    onShareAppMessage() {
      return {
        title: this.info.name,
        path: '/pages/goods/main?id=' + this.info.id,
        imageUrl: this.gallery[0].img_url
      };
    },
    mounted() {
        this.openId = wx.getStorageSync('openId') || '';
        this.goodsDetail()
    },
    methods: {
        async goodsDetail() { // 详情的数据请求
            const data = await get('/goods/detailaction', {
                id: 1009024,
                openId: this.openId
            })
            console.log(data);
            this.info = data.info;
            this.gallery = data.gallery;
        },
        showType() {
            this.showpop = !this.showpop;
        }
    },
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>