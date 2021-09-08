<!-- Vue Single File Component, Created by liukun on 2021/1/19. -->
<template>
  <div id="app">
    <!-- 图标示例 -->
    <vueSvg name="phone"></vueSvg>

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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}
</style>

<style></style>
