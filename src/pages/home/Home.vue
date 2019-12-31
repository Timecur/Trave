<template>
  <div>
    <!-- <div class="home"> Home </div> -->
    <!-- 类似于一个 a 标签 -->
    <!-- <router-link to="/list">列表页</router-link> -->
    <home-header></home-header>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
export default {
  name: 'Home',
  components: {
    HomeHeader
  }
}
</script>

<style></style>
