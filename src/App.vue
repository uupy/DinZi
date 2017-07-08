<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}

</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  font-family:"Microsoft YaHei",Arial,Helvetica,sans-serif,"SimSun";  
  height: 100%;overflow: hidden;
}
*{margin:0;padding:0;}
img{display: block;}
ul li{list-style: none;}
a{text-decoration: none;}
html,body{height: 100%;width: 100%;overflow: hidden;}
.router-link-active{background: #1b1b1b;}


</style>
