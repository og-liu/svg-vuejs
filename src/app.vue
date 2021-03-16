<!-- Vue Single File Component, Created by liukun on 2021/1/19. -->
<template>
  <div id="app">

    <!-- 插画示例 -->
    <div>
      <vueSvg name="banner"></vueSvg>
    </div>

    <!-- 图标示例 -->
    <div>
      <vueSvg style="color: rgb(112, 183, 253); width: 36px;" name="phone"></vueSvg>
    </div>

    <github-corner></github-corner>
  </div>
</template>

<script>
import githubCorner from './components/githubCorner'
import vueSvg from '../example/components/vueSvg'

export default {
  name: 'app',
  components:{
    githubCorner,
    vueSvg
  }
}
</script>

<style>

* {
  list-style: none;
}

#app {
  margin-top: -100px !important;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}
</style>

<style></style>
