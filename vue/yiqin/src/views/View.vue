<template>
  <div>
      View
  </div>
</template>

<script>
export default {
    created () { // 生命周期函数 --- 当组件被加载时
        // console.log('创建了');
        let province = this.$route.path; // 拿到路由路径
        console.log(province);
    }
}
</script>

<style>

</style>