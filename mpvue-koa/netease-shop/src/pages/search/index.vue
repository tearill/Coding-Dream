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
              <div v-for="(item, index) in tipsData" :key="index">
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
            tipsData: []
        }
    },
    mounted() {
        this.openid = wx.getStorageSync('openId') || '';
        this.getHotData();
    },
    methods: {
        clearInput() {
            this.words = '';
        },
        cancel() {},
        async clearHistory() { // 清除搜索历史
            const data = await post('/search/clearhistoryAction', {
                openId: this.openid
            })  
            // console.log(data);   
            if (data) { // 删除成功
                this.historyData = []
            }
        },
        inputFocus() {},
        async tipSearch() { // 取input框中值做接口请求搜索
            const data = await get('/search/helperaction', {
                keyword: this.words
            })
            // console.log(data)
            this.tipsData = data.keywords
        },
        async searchWords(e) { // 添加搜索记录
            console.log(e.target.value);
            let value = e.currentTarget.dataset.value; // 热门搜索点击的时候的值
            this.words = value || this.words;
            const data = await post('/search/addhistoryaction', { // 传给后端api进行搜索请求的数据
                openId: this.openid,
                keyword: value || this.words
            });
            // console.log(data);
            // 获取历史数据
            this.getHotData();
        },
        async getHotData(first) { // 取出历史搜索记录和热门数据
            const data = await get('/search/indexaction?openId=' + this.openid);
            this.historyData = data.historyData;
            this.hotData = data.hotKeywordList;
            // console.log(data);
        }
    }
};
</script>

<style lang="less" scoped>
@import './style.less';
</style>