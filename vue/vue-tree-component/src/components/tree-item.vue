<template>
  <li>
    <span @click="toggle" style="cursor:pointer;">
      <em v-if="hasChild" class="icon">{{ open?'-':'+' }}</em>
      <em v-if="!hasChild" class="icon file-text"></em>
      {{ data.name }}
    </span>
    <ul v-if="hasChild" v-show="open">
      <!-- 递归调用自己 -->
      <tree-item v-for="(item, index) in data.children" 
      :data="item"
      :key="index"></tree-item>
    </ul>
  </li>
</template>

<script>
// import TreeItem from './tree-item.vue'
export default {
  name: 'TreeItem',
  props: {
    data: {
      type: [Object, Array],
      required: true
    }
  },
  data() {
    return {
      open: false
    }
  },
  computed: {
    hasChild() {
      return this.data.children && this.data.children.length
    }
  },
  components: {
    // TreeItem
  },
  methods: {
    toggle() {
      if (this.hasChild) {
        this.open = !this.open
      }
    }
  }
}
</script>

<style scoped>
li {
  list-style-type: none;
}
</style>