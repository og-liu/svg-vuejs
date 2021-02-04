SVG VUEJS
---

[![npm version](https://img.shields.io/npm/v/svg-vuejs)](https://www.npmjs.com/package/svg-vuejs)
[![npm downloads](https://img.shields.io/npm/dt/svg-vuejs)](https://www.npmjs.com/package/svg-vuejs)
[![github starts](https://img.shields.io/github/stars/og-liu/svg-vuejs)](https://github.com/og-liu/svg-vuejs/stargazers)
![license](https://img.shields.io/github/license/og-liu/svg-vuejs?label=license)

一套为 Vuejs 开发者准备的基于 Vue 2.0 的轻量的多色动态 SVG 组件。

Made with ❤️ by <a href="https://github.com/og-liu">og-liu</a>

## Links
📙 [中文文档](http://svg.ogliu.com)

<img width="100" src="https://s3.ax1x.com/2020/11/18/DmAfEt.gif" alt="ogliu logo">

## Installation

```bash
npm install svg-vuejs
```

```js
// main.js
import Vue from 'vue';
import vueSvg from 'svg-vuejs'
import App from './App.vue';

Vue.use(vueSvg);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

```html
<!-- template -->
<vue-svg name="wechat" path="icon/"></vue-svg>
```

> 需要在项目根目录中的 src 文件夹下创建名为 svg 的文件夹，所有的 svg 文件都应该存放在 /src/svg/ 下，也可以在 svg 文件夹下继续创建文件夹用于区分管理图片。

```
├── build
├── config
├── src
│   │── assets
│   │── components
│   │── router
│   │── svg         手动创建 （必须）
│   │   ├──         可选创建
│   │   └── ...     可选创建
│   │── App.vue
│   └── main.js
│
├── static
├── .babelrc
├── .editorconfig
├── .eslintignore
├── .eslintrc.js
├── .gitignore
├── .postcssrc.js
├── index.html
├── package.json
└── README.md
```

## Liscense

MIT
