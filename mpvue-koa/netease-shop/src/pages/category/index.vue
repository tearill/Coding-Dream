<template>
  <div class="category">
    <div class="search" @click="toSearch">
      <div class="ser">
        <span class="icon"></span>
        <span>商品搜索，共239款好物</span>
      </div>
    </div>
    <div class="content">
      <scroll-view class="left" scroll-y="true">
        <div class="iconText" v-for="(item, index) in listData" 
        :key="index" 
        :class="[index === currentIndex ? 'active' : '']"
        @click="selectItem(item.id, index)">
          {{ item.name }}
        </div>
      </scroll-view>
      <scroll-view class="right" scroll-y="true">
        <div class="banner">
          <img :src="detailData.banner_url" alt="">
        </div>
        <div class="title">
          <span>-</span>
          <span>{{ detailData.name }}</span>
          <span>-</span>
        </div>
        <!-- 商品 -->
        <div class="bottom">
          <div class="item" @click="toCategory(item.id)" v-for="(item, index) in detailData.subList" :key="index">
            <img :src="item.wap_banner_url" alt="">
            <span>{{ item.name }}</span>
          </div>
        </div>
      </scroll-view>
    </div>
  </div>
</template>

<script>
import { get } from '../../utils'
export default {
  data() {
    return {
      listData: [], // 分类导航
      currentIndex: 0, // 当前导航
      id: '1005000',
      detailData: {}
    }
  },
  mounted() {
    this.getListData()
    this.selectItem(this.id, this.currentIndex)
  },
  methods: {
    toSearch() {
      wx.navigateTo({ url: '/pages/search/main' })
    },
    async getListData() {
      const data = await get('/category/indexAction')
      console.log(data)
      this.listData = data.categoryList
    },
    async selectItem(id, index) {
      this.currentIndex = index 
      // 获取导航对应的商品
      const data = await get('/category/currentAction', {
        id: id
      })
      console.log(data, '-------current')
      this.detailData = data.data.currentOne
    },
    toCategory(id) {
      console.log(id, '++++++++++++id')
      wx.navigateTo({ url: '/pages/categoryList/main?id=' + id });
    }
  }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>