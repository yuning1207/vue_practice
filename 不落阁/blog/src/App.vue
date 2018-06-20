<template>
  <div id="app">
    <header></header>
    <div class="main"><router-view/></div>
  </div>
</template>

<script>
import header from '@/components/common/header'
export default {
  name: 'App',
  components:{
    header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
