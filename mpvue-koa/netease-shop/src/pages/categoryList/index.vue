<template>
  <div class="categoryList">
    <scroll-view scroll-x="true" class="head" :scroll-left="scrollLeft">
      <div @click="changeNav(index, item.id)" v-for="(item, index) in navData" :key="index" :class="[currentIndex == index ? 'active' : '']">
        {{ item.name }}
      </div>
    </scroll-view>
    <div class="info">
      <p>{{ currentNav.name }}</p>
      <p>{{ currentNav.front_desc }}</p>
    </div>
    <div class="list" v-if="goodsList.length !== 0">
      <div class="item" v-for="(item, index) in goodsList" :key="index" @click="goodsDetail(item.id)">
        <img :src="item.list_pic_url" alt="">
        <p class="name">{{ item.name }}</p>
        <p class="price">¥ {{ item.retail_price }}</p>
      </div>
    </div>
    <!-- 没数据时 -->
    <div class="none" v-else>数据暂无数据...</div>
  </div>
</template>

<script>
import { get } from '../../utils'
export default {
  data() {
    return {
      scrollLeft: 0,
      navData: [], // 导航栏数据
      categoryId: '', // 导航 id
      currentNav: {}, // 当前导航
      currentIndex: 0, // 当前导航下标
      goodsList: [], // 商品列表
    }
  },
  mounted() {
    // 获取页面跳转的时候携带的 nav 的 id
    this.categoryId = this.$root.$mp.query.id
    this.getAllData()
  },
  methods: {
    async getAllData() { // 获取导航栏
      const data = await get('/catagory/categoryNav', {
        id: this.categoryId
      })
      console.log(data)
      this.navData = data.navData
      this.currentNav = data.currentNav
      for (let i = 0; i < this.navData.length; i++) {
        const id = this.navData[i].id;
        if (id == this.currentNav.id) {
          this.currentIndex = i
        }
      }

      // 获取商品
      const listData = await get('/goods/goodsList', {
        categoryId: this.categoryId
      })
      console.log(listData)
      this.goodsList = listData.data
    },
    async changeNav(index, id) {
      this.currentIndex = index
      const listData = await get('/goods/goodsList', {
        categoryId: id
      })
      console.log(listData, '-------')
      this.goodsList = listData.data
      this.currentNav = listData.currentNav
      // 让导航栏滚动到可见区域
      if (this.currentIndex > 4) {
        this.scrollLeft = this.currentIndex * 60
      } else { // 让导航复位
        this.scrollLeft = 0
      }
    },
    goodsDetail(id) {
      wx.navigateTo({
        url: '/pages/goods/main?id=' + id 
      });
    }
  }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>