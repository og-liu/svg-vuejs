<p align="center">
    <img width="100" src="https://s3.ax1x.com/2020/11/18/DmAfEt.gif" alt="ogliu logo">
</p>
<div align="center">
  <p align="center">轻量的多色动态 SVG 组件<br>
  —— Made with ❤️ by <a href="https://github.com/og-liu">og-liu</a></p>
  <p align="center">
    <img src="https://img.shields.io/github/license/og-liu/svg-vuejs" alt="License">
    <a href="https://github.com/og-liu/svg-vuejs/stargazers">
        <img src="https://img.shields.io/github/stars/og-liu/svg-vuejs" alt="Github starts">
    </a>
    <a href="https://www.npmjs.com/package/svg-vuejs">
      <img src="https://img.shields.io/npm/dt/svg-vuejs" alt="Npm downloads">
    </a>
    <img src="https://img.shields.io/npm/v/svg-vuejs" alt="Npm version">
  </p>
</div>

| 支持包 | 版本 |
| ------ | ---- |
| Vue    | 2.0+ |

# v 3.0.0 版本变更说明
1. 新增 `path` 属性 提供 `SVG` 文件存放路径。

2. 新增 `插画` 支持，`3.0` 版本之前如果使用图层较为复杂的 `SVG` 文件，可能会因为标签没有完全渲染，或者标签渲染顺序不对导致的图片无法显示或图层顺序错乱，所以只能用来做较为简单图案的 `iconfont`, 现已重写，实现了任何 SVG 图片都可以完美展示。

3. 修改引入方式。

4. 移除 scale、spin、flipHorizontal、flipVertical  属性，插件就应该专注插件本身，这种基本的css修饰属性还是自己书写比较合理，所以一并移除。

5. 重构项目使目录结构更加清晰合理。

6. 源代码新增实例演示, clone 本项目到本地，安装完依赖，执行 `npm run dev` 即可

7. 更多功能还在持续研发中, 旧版本如果自动升级导致项目报错, 可以指定版本重新安装插件或按照上述变更迁移开发

## 安装
```bash
npm install svg-vuejs
```

### `main.js` 全局引入组件
```javascript
import vueSvg from 'svg-vuejs'
Vue.use(vueSvg)
```

### svg 文件准备, 在项目根目录 `src` 文件夹下创建 `svg` 文件夹
- 文件完整存放路径: `/src/svg/**.svg`

### 使用组件
```vue
<!-- 将会在 `src` 的 `svg` 文件夹中，寻找到名为 `icon` 的文件夹，渲染文件名为 `wechat.svg` 的图片 -->
<vue-svg name="wechat" path="icon/"></vue-svg>
```

## 属性 (props)
**name** - 文件名, 例如: name="wx", 那么在 `/src/svg/` 目录下, 就应当存在对应的 `wx.svg` 文件

- `type`: Number|String
- `required` : true

**width** - 宽度

- `type`: Number
- `required` : false

**height** - 高度

- `type`: Number
- `required` : false

## Liscense

MIT License
