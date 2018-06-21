<template>
  <div id="app">
    <header0></header0>
    <div class="main">
      <router-view/>
    </div>
    <top></top>
    <footer0></footer0>
  </div>
</template>

<script>
import header0 from "@/components/common/header0";
import footer0 from "@/components/common/footer0";
import top from "@/components/common/top";
export default {
    name: "App",
    components: {
        header0,
        footer0,
        top
    }
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
