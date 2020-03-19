<template>
  <div id="app">
    filter-time {{ t | format_date }}
    <div>moment {{ moment() }}</div>
    <br />
    <div>moment.format() {{ moment().format('YYYY-MM-DD HH:mm:ss') }}</div>
    <br />
    <div>过去多少时间 {{ moment(t).diff(moment(t), 'minutes') }}分钟前</div>
    <br />
    <!-- 优惠券 -->
    <!-- 多少时间之后 -->
    <div>{{ moment('2020-02-29').add(2, 'day').format('YYYY-MM-DD') }}</div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'App',
  // 局部过滤器 - 格式化相关
  // filters: {
  //   format_date(value) {
  //     const date = new Date(value);
  //     return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
  //   }
  // },
  data() {
    return {
      t: 1593391046712, // 时间戳
      moment
    }
  }
}
</script>>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
