<template>
  <div id="app">
    <!-- 单页应用的头部导航 -->
    <nav class="nav">
      <ul>
        <li>
          <router-link to="/">首页</router-link>
        </li>
        <li>
          <router-link to="/about">关于</router-link>
        </li>
        <li>
          <router-link to="/jiangxi">江西</router-link>
        </li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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
