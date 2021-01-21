<!-- Vue Single File Component, Created by liukun on 2021/1/19. -->
<template>
  <div id="app">
    <vue-svg name="demo" path="demo/" width="22" heigth="22"></vue-svg>
  </div>
</template>

<script>
import vueSvg from '../components/vueSvg'
export default {
  name: 'iconfont',
  components:{
    vueSvg
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

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
