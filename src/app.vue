<!-- Vue Single File Component, Created by liukun on 2021/1/19. -->
<template>
  <div id="app">
    <github-corner></github-corner>
  </div>
</template>

<script>
import githubCorner from './components/githubCorner'

export default {
  name: 'app',
  components:{
    githubCorner
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
