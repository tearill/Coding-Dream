<template>
  <div id="app">
    <select @change="queryTag">
      <option value="">请选择</option>
      <option value="coding">编程</option>
      <option value="music">音乐</option>
      <option value="blogs">博客</option>
    </select>
    <div v-for="(user, index) in users" :key="index">
      <!-- {{ user.id }} ||  -->
      {{ user.name }}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
// 本地通过 map 借(映射)数据
export default {
  name: 'App',
  data() {
    return {
      // 用户列表
      // users: []
    }
  },
  mounted() { // 使用生命周期取数据
    // ajax
    // this.$store.dispatch('fetchUsers') // 触发动作
    this.fetchUsers()
    // this.setUsers(users)
  },
  // 中央数据的到来
  computed: {
    ...mapGetters(['users'])
  },
  methods: {
    ...mapActions(['fetchUsers', 'queryTag']),
    // ...mapMutations(['setUsers'])
    // queryTag() { // 根据 tag 把相应的用户找出来
      // 1. @change 拿到 tag 的值
      // 2. users computed mapGetter actions->api 发出新的请求 -> vuex store
      // 3. api/ 后端
      // 4. node router /tag/:tag queryTag()
    // }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
