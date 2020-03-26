<template>
  <!-- 菜单 -->
  <div class="tree-menu">
    <ul v-for="item in data" :key="item.name">
      <!-- <li>{{ item.name }}</li> -->
      <!-- 算法思想 递归组件 -->
      <tree-item :data="item">
        <!-- 把数据交给下面的节点组件去做 -->
      </tree-item>
    </ul>
  </div>
</template>

<script>
import TreeItem from './tree-item'
export default {
  name: 'h-tree',
  props: {
    data: {
      type: [Object, Array],
      required: true
    }
  },
  components: {
    TreeItem
  }
}
</script>

<style scoped>

</style>