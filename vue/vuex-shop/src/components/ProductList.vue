<template>
  <!-- <div>Products</div> -->
  <ul>
    <li
      v-for="product in products"
      :key="product.id">
      {{ product.title }} - {{ product.price }}
      <br />
      <button 
        @click="addProductToCart(product)">
        Add to cart
      </button>
    </li>
  </ul>
  <!-- <div>
    {{ this.$store.state.products.all }}
  </div> -->
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  created() { // 比 mounted 更早
    this.$store.dispatch('products/getAllProducts') // 通过命名空间找到特定模块下的东西
  },
  computed: mapState({
    products: (state) => state.products.all
  }),
  methods: mapActions('cart', [
    'addProductToCart'
  ])
}
</script>

<style scoped>

</style>