/**
 * Created by liukun on 2021/1/19.
 */

import Vue from 'vue'
import App from './app'
import './assets/style.css'
import figlet from 'figlet'
import standard from 'figlet/importable-fonts/Standard.js'

figlet.parseFont('Standard', standard)

figlet.text('SVG    VUE JS', {
  font: 'Standard',
}, function(err, data) {
  console.log(data)
})

new Vue({
  el: '#app',
  render: h => h(App)
})
