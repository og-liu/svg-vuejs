<!-- Vue Single File Component, Created by liukun on 2021/1/19. -->
<template>
  <div id="app">
    <section class="cover show" style="background: rgb(255, 255, 255);">
      <div class="cover-main">
        <p>
          <img src="https://cdn.jsdelivr.net/gh/og-liu/image-host/20210113142632.png" data-origin="https://cdn.jsdelivr.net/gh/og-liu/image-host/20210113142632.png" alt="logo">
        </p>
        <h1 id="svg-vuejs-v313">
          <a href="#/?id=svg-vuejs-v313" data-id="svg-vuejs-v313" class="anchor"><span>svg-vuejs <small>v3.1.3</small></span></a>
        </h1>
        <blockquote>
          <p>一套为 Vuejs 开发者准备的基于 Vue 2.0 的 SVG 组件。</p>
        </blockquote>
        <ul>
          <li>轻量、多色、动态的 SVG 组件</li><li>简单、轻便 (压缩后 ~21kB)</li>
          <li><code>npm install svg-vuejs</code></li>
        </ul>
        <p>
          <a href="https://github.com/og-liu/svg-vuejs" target="_blank" rel="noopener">字体图标</a>
          <a href="#/dosc">插画</a>
        </p>
      </div>
    </section>
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
