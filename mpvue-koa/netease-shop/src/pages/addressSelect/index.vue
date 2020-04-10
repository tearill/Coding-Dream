<template>
  <div class="address">
    <scroll-view scroll-y="true" class="addcont" style="height: 100%">
      <div class="item" v-if="listData.length !== 0">
        <div class="list" v-for="(item, index) in listData" :key="index">
          <div class="addresslist">
            <div>
              <span>{{ item.name }}</span>
              <div class="default" v-if="item.is_default">默认</div>
            </div>
            <div class="info" @click="selAddress(item.id)">
              <p>{{ item.mobile }}</p>
              <p>{{ item.address + item.address_detail }}</p>
            </div>
            <div @click="toDetail(item.id)"></div>
          </div>
        </div>
      </div>
      <!-- 没选择地址的情况下 -->
      <div class="center" v-else>
        <p>收货地址在哪里?</p>
      </div>
    </scroll-view>

    <div class="bottom">
      <div @click="wxaddress(1)">+新建地址</div>
      <div @click="wxaddress">一键导入微信地址</div>
    </div>
  </div>
</template>

<script>
import { get, getStorageOpenid } from '../../utils'
export default {
  data() {
    return {
      listData: [],
      openId: ''
    }
  },
  mounted() {
    this.openId = getStorageOpenid()
    this.getAddressList()
  }, 
  methods: {
    toDetail(id) {
      wx.navigateTo({ 
        url: '/pages/addaddress/main?id=' + id 
      });
    },
    wxaddress(index) {
      if (index === 1) {
        // 新建地址
        wx.navigateTo({ 
          url: '/pages/addaddress/main' 
        });
      } else {
        wx.chooseAddress({
          success: function(res) {
            // console.log(res.userName);
            // console.log(res.postalCode);
            // console.log(res.provinceName);
            // console.log(res.cityName);
            // console.log(res.countyName);
            // console.log(res.detailInfo);
            // console.log(res.nationalCode);
            // console.log(res.telNumber);
            // 一键导入微信
            let result = encodeURIComponent(JSON.stringify((res)))
            console.log(result)
            wx.navigateTo({
              url: '/pages/addaddress/main?res=' + result 
            });
          }
        });
      }
    },
    async getAddressList() {
      let _this = this
      const data = await get('/address/getListAction', {
        openId: _this.openId
      })
      console.log(data)
      _this.listData = data.data
    },
    selAddress(id) {
      wx.setStorageSync('addressId', id)
      wx.navigateBack({
        delta: 1 
      });
    }
  }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>