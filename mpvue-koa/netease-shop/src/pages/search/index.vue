<template>
  <div class="search">
      <div class="head">
          <div>
              <img src="http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/search2-2fb94833aa.png" alt="">
              <input type="text" confirm-type="search" focus="true" placeholder="商品搜索" v-model="words" @focus="inputFocus" @input="tipSearch" @confirm="searchWords">
              <img @click="clearInput" class="del" src="http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/clearIpt-f71b83e3c2.png" alt="">
          </div>
          <div @click="cancel">取消</div>
      </div>
      <!-- 搜索提示 -->
      <div class="searchtips" v-if="words">
          <div v-if="tipsData.length!=0">
              <div v-for="(item, index) in tipsData" :key="index" @click="searchWords" :data-value="item.name">
                  {{item.name}}
              </div>
          </div>
          <div class="nogoods" v-else>数据库暂无此类商品...</div>
      </div>
      <!-- 历史记录 -->
      <div class="history" v-if="historyData.length!==0">
          <div class="t">
            <div>历史记录</div>
            <div @click="clearHistory"></div>
          </div>
          <div class="content">
              <div v-for="(item, index) in historyData" :key="index" @click="searchWords" :data-value="item.keyword">
                  {{item.keyword}}
              </div>
          </div>
      </div>
      <!-- 热门搜索 -->
      <div class="history hotsearch">
          <div class="t">
            <div>热门搜索</div>
          </div>
          <div class="content">
              <div v-for="(item, index) in hotData" :key="index" :class="{active: item.is_hot === 1}" @click="searchWords" :data-value="item.keyword">
                  {{item.keyword}}
              </div>
          </div>
      </div>
      <!-- 商品列表 -->
      <div class="goodsList" v-if="listData.length!==0">
          <div class="sortnav">
              <div @click="changeTab(0)" :class="[0 === nowIndex ? 'active' : '']">综合</div>
              <div class="price" @click="changeTab(1)" :class="[1 === nowIndex ? 'active' : '']">价格</div>
              <div @click="changeTab(2)" :class="[2 === nowIndex ? 'active' : '']">分类</div>
          </div>
          <div class="sortList">
              <div class="item" v-for="(item, index) in listData" :key="index" @click="goodsDetail(item.id)">
                  <img :src="item.list_pic_url" alt="">
                  <p class="name">{{item.name}}</p>
                  <p class="price">¥{{item.retail_price}}</p>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { get, post } from "../../utils"
export default {
    data () {
        return {
            words: '',
            openid: '',
            hotData: [],
            historyData: [],
            tipsData: [],
            order: '',
            listData: [],
            nowIndex: 0
        }
    },
    mounted() {
        this.openid = wx.getStorageSync('openId') || '';
        this.getHotData();
    },
    methods: {
        clearInput() { // 清空搜索框
            this.words = '';
            this.listData = [];
        },
        cancel() {
            wx.navigateBack({
              delta: 1 // 返回的页面数，如果 delta 大于现有页面数，则返回到首页,
            });
        },
        async clearHistory() { // 清除搜索历史
            const data = await post('/search/clearhistoryAction', {
                openId: this.openid
            })  
            // console.log(data);   
            if (data) { // 删除成功
                this.historyData = []
            }
        },
        inputFocus() { // 输入框获得焦点
            // 商品清空
            this.listData = [];
            // 展示搜索提示信息
            this.tipSearch();
        },
        async tipSearch() { // 获取搜索提示语(自动补全)
            const data = await get('/search/helperaction', {
                keyword: this.words
            })
            // console.log(data)
            this.tipsData = data.keywords
        },
        async searchWords(e) { // (点击热门搜索或者是历史记录中的内容)||(确认搜索)
            // console.log(e.target.value);
            let value = e.currentTarget.dataset.value; // 热门搜索点击的时候的值
            this.words = value || this.words;
            const data = await post('/search/addhistoryaction', { // 传给后端api进行搜索请求的数据
                openId: this.openid,
                keyword: value || this.words
            });
            // console.log(data);
            // 获取历史数据
            this.getHotData();
            this.getListData(); // 真正实现搜索相应的内容
        },
        async getHotData(first) { // 取出历史搜索记录和热门数据
            const data = await get('/search/indexaction?openId=' + this.openid);
            this.historyData = data.historyData;
            this.hotData = data.hotKeywordList;
            // console.log(data);
        },
        async getListData() { // 获取商品列表
            const data = await get('/search/helperaction', {
                keyword: this.words, // input框中的内容
                order: this.order
            })
            this.listData = data.keywords;
            this.tipsData = [];
            console.log(data);
        },
        changeTab(index) { // 切换tab(排序选项)
            this.nowIndex = index;
            if (index === 1) {
                this.order = this.order === 'asc' ? 'desc' : 'asc';
            } else {
                this.order = ''
            }
            this.getListData();
        },
        goodsDetail(id) { // 跳转商品详情
            wx.navigateTo({ 
                url: '/pages/goods/main?id=' + id 
            });
        }
    }
};
</script>

<style lang="less" scoped>
@import './style.less';
</style>