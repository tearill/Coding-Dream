<template>
  <div class="goods">
      <div class="swiper">
          <swiper class="swiper-container" indicator-dots autoplay interval="3000" duration="1000" circular>
              <block>
                  <swiper-item class="swiper-item" v-for="(item, index) in gallery" :key="index">
                      <img class="slide-image" :src="item.img_url" alt="" />
                  </swiper-item>
              </block>
          </swiper>
      </div>
  </div>
</template>

<script>
import { get, post } from '../../utils/index'
export default {
    data() {
        return {
            gallery: [], // banner图
            id: '',
            openId: ''
        }
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
            this.gallery = data.gallery;
            console.log(data);
        }
    }
}
</script>

<style lang="less" scoped>

</style>