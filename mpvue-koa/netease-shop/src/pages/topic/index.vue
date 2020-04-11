<template>
  <div class="topic">
    <ul class="list">
      <li v-for="(item, index) in topicList" :key="index" @click="topicDetail(item.id)">
        <div class="t-img">
          <img :src="item.scene_pic_url" alt="">
        </div>
        <div class="info">
          <p>{{ item.title }}</p>
          <p>{{ item.subtitle }}</p>
          <p>{{ item.price_info }}元起</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { get } from '../../utils'
export default {
  data() {
    return {
      page: 1,
      topicList: [],
      total: '', // 总页数
    }
  },
  mounted() {
    this.getListData(true)
  },
  onPullDownRefresh() {
    this.page = 1 // 每次下拉重置
    this.getListData()
    wx.stopPullDownRefresh() // 提前关闭
  },
  onReachBottom() {
    console.log('Reach Bottom')
    this.page = this.page + 1
    if (this.page > this.total) { // 是否超出
      return false
    }
    this.getListData();
  },
  methods: {
    async getListData(first) {
      const data = await get('/topic/listAction', {
        page: this.page
      })
      console.log(data)
      if (first) {
        this.topicList = data.data
      } else {
        this.topicList = this.topicList.concat(data.data)
      }
      
      this.total = data.total
    },
    topicDetail(id) {
      wx.navigateTo({
        url: '/pages/topicDetail/main?id=' + id 
      });
    }
  }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>