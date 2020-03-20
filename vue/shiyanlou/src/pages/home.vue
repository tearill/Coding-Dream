<template>
  <div id="home_page">
    <navigation_bar>
    </navigation_bar>
    <main_navigation>
    </main_navigation>
  </div>
</template>

<script>
const path = require('path')
const files = require.context('@/components/home_page', true, /\.vue$/)
const modules = {}
files.keys().forEach(key => {
  console.log(key)
  const name = path.basename(key, '.vue')
  console.log(name)
  modules[name] = files(key).default || files(key)
})
import NavigationBar from '@/components/home_page/navigation_bar.vue'
export default {
  components: modules
}
</script>

<style>

</style>