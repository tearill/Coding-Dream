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
      <div class="searchtips" v-if="words">
          <div>
              牙刷
          </div>
          <div class="nogoods">数据库暂无此类商品</div>
      </div>
      <!-- 历史记录 -->
      <div class="history">
          <div class="t">
            <div>历史记录</div>
            <div @click="clearHistory"></div>
          </div>
          <div class="content">
              <div>日式</div>
          </div>
      </div>
      <!-- 热门搜索 -->
      <div class="history hotsearch">
          <div class="t">
            <div>热门搜索</div>
          </div>
          <div class="content">
              <div class="active">日式</div>
              <div>123</div>
              <div>456</div>
              <div>日式789</div>
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
            historyData: []
        }
    },
    mounted() {
        this.openid = wx.getStorageSync('openid') || '';
        this.getHotData()
    },
    methods: {
        clearInput() {
            this.words = '';
        },
        cancel() {},
        clearHistory() {},
        inputFocus() {},
        tipSearch() {},
        async searchWords(e) {
            console.log(e.target.value);
            let value = e.target.value;
            this.words = value || this.words;
            const data = await post('/search/addhistoryaction', { // 传给后端api进行搜索请求的数据
                openId: this.words,
                keyword: value || this.words
            });
            // console.log(data);
            // 获取历史数据
            this.getHotData();
        },
        async getHotData(first) { // 取出历史搜索记录和热门数据
            const data = await get('/search/indexaction?openId=' + this.openid);
            this.historyData = data.historyData;
            this.hotData = data.hotData;
            console.log(data)
        }
    }
};
</script>

<style lang="less" scoped>
@import './style.less';
</style>