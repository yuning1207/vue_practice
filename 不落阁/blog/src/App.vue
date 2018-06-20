<template>
  <div id="app">
    <header0></header0>
    <div class="main"><router-view/></div>
  </div>
</template>

<script>
import header0 from '@/components/common/header0'
export default {
  name: 'App',
  components:{
    header0
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
