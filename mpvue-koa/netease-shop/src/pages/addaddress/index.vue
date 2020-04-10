<template>
  <div class="addaddress">
    <div class="item">
      <input type="text" placeholder="姓名" v-model="userName">
    </div>
    <div class="item">
      <input type="text" placeholder="手机号码" v-model="telNumber">
    </div>
    <div class="item">
      <picker mode="region" @change="bindRegionChange" :value="region" :custom-item="customItem">
        <input type="text" placeholder="身份、城市、区县" v-model="address">
      </picker>
    </div>
    <div class="item">
      <input type="text" placeholder="详细地址、如楼道、楼盘号等" v-model="detailAddress">
    </div>

    <div class="item itemend">
      <checkbox-group @change="checkboxChange">
        <label class="checkbox">
          <checkbox class="box" value="true" :checked="checked" color="#b4282d"></checkbox>
          设置为默认地址
        </label>
      </checkbox-group>
      <div @click="wxAddress">一键导入微信</div>
    </div>

    <div class="bottom" @click="saveAddress">保存</div>
  </div>
</template>

<script>
import { get, post, getStorageOpenid } from '../../utils'
export default {
  data() {
    return {
      userName: '',
      telNumber: '',
      region: [],
      customItem: '全部', // picker 顶部默认
      address: '',
      detailAddress: '',
      openId: '',
      res: '', // 上一个页面过来的数据
      id: '', // 上一个页面传过来的 id
      checked: false
    }
  },
  mounted() {
    this.openId = getStorageOpenid()
    if (this.$root.$mp.query.res) {
      // 一键导入微信过来的
      this.res = JSON.parse(decodeURIComponent(this.$root.$mp.query.res))
      console.log(this.res, '-----')
      this.userName = this.res.userName
      this.telNumber = this.res.telNumber
      this.address = `${this.res.provinceName} ${this.res.cityName} ${this.res.countyName}`
      this.detailAddress = this.res.detailInfo
    }
    if (this.$root.$mp.query.id) {
      // 从编辑按钮过来的
      this.id = this.$root.$mp.query.id
      this.getDetail()
    }
  },
  methods: {
    checkboxChange(e) {
      console.log(e)
      this.checked = e.mp.detail.value[0]
    },
    wxAddress() {
      let _this = this
      wx.chooseAddress({
        success: function(res) {
          console.log(res.userName)
          _this.userName = res.userName,
          _this.telNumber = res.telNumber,
          _this.address = `${res.provinceName} ${res.cityName} ${res.countyName}`,
          _this.detailAddress = res.detailInfo
        }
      })
    },
    async saveAddress() {
      const data = await post('/address/saveAction', {
        userName: this.userName,
        telNumber: this.telNumber,
        address: this.address,
        detailAddress: this.detailAddress,
        checked: this.checked,
        openId: this.openId,
        addressId: this.id
      })
      console.log(data)
      if (data.data) {
        wx.showToast({
          title: '添加成功',
          icon: 'success',
          duration: 2000,
          mask: true,
          success: res => {
           setTimeout(() => {
             wx.navigateBack({
               delta: 1
             })
           }, 2000)
          }
        })
      }
    },
    bindRegionChange(e) {
      console.log(e)
      let value = e.mp.detail.value
      this.address = `${value[0]} ${value[1]} ${value[2]}`
    },
    async getDetail() { // 根据 id 请求地址信息
      const data = await get('/address/detailAction', {
        id: this.id
      })
      console.log(data, 'address-----')
      let detail = data.data
      this.userName = detail.name
      this.telNumber = detail.mobile
      this.address = detail.address
      this.detailAddress = detail.address_detail
      this.checked = detail.is_default === 1 ? true : false
    }
  }
}
</script>

<style lang="less" scopd>
@import './style.less';
</style>