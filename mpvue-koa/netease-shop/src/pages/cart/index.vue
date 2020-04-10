<template>
  <div class="cart">
    <div class="top">
      <div>30天无忧退货</div>
      <div>48小时快速退款</div>
      <div>满88元免邮费</div>
    </div>
    <div class="cartlist">
      <div class="item" v-for="(item, index) in listData" :key="index">
        <div class="con">
          <div class="left">
            <!-- 选择按钮 -->
            <div class="icon" @click="changeColor(index, item.goods_id)" :class="[listIds[index] ? 'active' : '']"></div>
            <div class="img">
              <img :src="item.list_pic_url" alt="">
            </div>
            <div class="info">
              <p>{{ item.goods_name }}</p>
              <p>¥{{ item.retail_price }}</p>
            </div>
          </div>
          <div class="right">
            <div class="num">x {{ item.number }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="fixed">
      <div class="left" @click="allCheck" :class="{'active': allcheck}">
        全选({{ isCheckedNumber }})
      </div>
      <div class="right">
        <div>¥{{ allPrice }}</div>
        <div @click="orderDown">下单</div>
      </div>
    </div>
  </div>
</template>

<script>
import { get, post, getStorageOpenid } from '../../utils'
export default {
  data() {
    return {
      openId: '',
      listData: [],
      listIds: [],
      allcheck: false,
    }
  },
  mounted() {
    this.openId = getStorageOpenid()
    this.getListData()
  },
  computed: {
    isCheckedNumber() {
      let number = 0
      for (let i = 0; i < this.listIds.length; i++) {
        if (this.listIds[i]) {
          number++
        }
      }
      if (number == this.listData.length && number !== 0) { // 全部被勾选
        this.allcheck = true
      } else {
        this.allcheck = false
      }
      return number
    },
    allPrice() {
      let price = 0
      for (let i = 0; i < this.listIds.length; i++) {
        if (this.listIds[i]) {
          price += this.listData[i].retail_price * this.listData[i].number
        }
      }
      return price
    }
  },
  methods: {
    async getListData() {
      const data = await get('/cart/cartList', {
        openId: this.openId
      })
      console.log(data)
      this.listData = data.data
    },
    changeColor(index, id) {
      if (this.listIds[index]) {
        this.$set(this.listIds, index, false)
      } else {
        this.$set(this.listIds, index, id)
      }
    },
    allCheck() {
      // 先清空选择
      this.listIds = []
      if (this.allcheck) {
        this.allcheck = false
      } else {
        this.allcheck = true
        // 全部选择
        for (let i = 0; i < this.listData.length; i++) {
          const element = this.listData[i]
          this.listIds.push(element.goods_id)
        }
      }
    },
    async orderDown() {
      if (this.isCheckedNumber === 0) {
        wx.showToast({
          title: '请选择商品', 
          icon: 'none', 
          duration: 1500, 
          mask: true, 
          success: res => {}
        });
        return false;
      }
      // 去除数组中空的 false
      let newGoodsId = []
      for (let i = 0; i < this.listIds.length; i++) {
        const element = this.listIds[i]
        if (element) {
          newGoodsId.push(element) // 所有要下单的商品
        }
      }
      let goodsId = newGoodsId.join(',')
      const data = await post('/order/submitAction', { // 下单
        openId: this.openId,
        goodsId: goodsId,
        allPrice: this.allPrice
      })
      console.log(data)
      if (data) {
        wx.navigateTo({
          url: '/pages/order/main'
        });
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>