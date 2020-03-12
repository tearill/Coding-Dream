<template>
  <div id="app">
    <div v-for="(user, index) in users" :key="index">
      {{ user.id }} || {{ user.name }}
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
    ...mapActions(['fetchUsers']),
    // ...mapMutations(['setUsers'])
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
