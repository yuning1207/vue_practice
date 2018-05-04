<template>
  <div id="app">
    <img src="./assets/logo.png"><br>
    <router-link to='/'>首页</router-link>|
    <router-link to='/hi'>hi页面</router-link>|
    <router-link to='/params/125/yuning is a good girl'>params页面</router-link>|
    <router-link to='/goHome'>goHome页面</router-link>|
    <router-link to='/goparams/886/i am yuning'>goParams页面</router-link>|
    <router-link to='/hi1'>hi1页面</router-link>
    <router-link to='/yuning'>yuning页面</router-link>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <router-view name='left' style="float:left;width:50%;height:300px;background-color:#ccc"></router-view>
    <router-view name='right' style="float:left;width:50%;height:300px;background-color:#c2c"></router-view>
    
  </div>
</template>

<script>
export default {
  name: 'App'
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
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity .5s;
  -moz-transition: opacity .5s;
  -o-transition: opacity .5s;
}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
  opacity: 0;
  transition: opacity .5s;
  -moz-transition: opacity .5s;
  -o-transition: opacity .5s;
}
</style>
