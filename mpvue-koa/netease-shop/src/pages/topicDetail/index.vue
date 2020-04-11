<template>
  <div class="topicDetail">
    <div class="content">
      <div class="detail" v-if="goodsDesc">
        <wxParse :content="goodsDesc"></wxParse>
      </div>
    </div>
    <div class="list">
      <p class="title">专题推荐</p>
      <div class="item" v-for="(item, index) in recommendList" :key="index">
        <img :src="item.scene_pic_url" alt="">
        <p>{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import wxParse from 'mpvue-wxparse'
import { get } from '../../utils'
export default {
  data() {
    return {
      goodsDesc: '',
      id: '',
      recommendList: []
    }
  },
  components: {
    wxParse
  },
  mounted() {
    this.id = this.$root.$mp.query.id
    this.getListData()
  },
  methods: {
    async getListData() {
      console.log(this.id, 'id--------')
      const data = await get('/topic/detailAction', {
        id: this.id
      })
      console.log(data)
      this.goodsDesc = data.data.content
      this.recommendList = data.recommendList
    }
  }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>