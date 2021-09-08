<!-- Vue Single File Component, Created by liukun on 2021/1/19. -->
<template>
  <vue-svg-item
    class="svg-icon"
    :name="name"
    :path="path"
    :multipleColor="multipleColor"
    :width="width"
    :height="height">
  </vue-svg-item>
</template>

<script type="text/ecmascript-6">

export default {
  name: "vueSvg",
  props: {
    name: {
      type: String,
      required: true
    },
    path: String,
    multipleColor: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 20
    },
    height: {
      type: Number,
      default: 20
    }
  },
  components: {
    vueSvgItem: {
      props: {
        path: {
          type: String,
          default: ''
        },
        name: {
          type: String,
          required: true
        },
        multipleColor: {
          type: Boolean,
          default: false
        }
      },
      render: function (createElement) {
        let xml = null
        const msg = `svg-vuejs: 未找到 ${this.path}${this.name}.svg`

        if (this.path.length) {
          try {
            xml = require(`!xml-loader?explicitChildren=true&preserveChildrenOrder=true!../../src/svg/${this.path}${this.name}.svg`)
          } catch (e) {
            const start = this.path.substr(0,1) === '/'
            const end = this.path.substr(this.path.length - 1,1) !== '/'
            const length = this.path.length === 1
            if (start || end || length) {
              console.error(`svg-vuejs: path ${this.path} 参数错误`)
            } else {
              console.error(msg)
            }
          }
        } else {
          try {
            xml = require(`!xml-loader?explicitChildren=true&preserveChildrenOrder=true!../source/iconfont/${this.name}.svg`)
          } catch (e)  {
            try {
              xml = require(`!xml-loader?explicitChildren=true&preserveChildrenOrder=true!../../src/svg/${this.name}.svg`)
            } catch (e) {
              console.error(msg)
            }
          }
        }

        if (xml && xml.svg) {

          if (!this.multipleColor) {
            xml.svg.$$.map(item => {
              if (item['#name'] === 'path') {
                item.$.fill = 'currentColor'
              }
            })
          }

          const createChildren = (data = xml.svg.$$) => {
            let children = []
            let child = []
            for (let i = 0; i < data.length; i++) {
              const item = data[i]
              child = []
              for (let key in item) {
                if (key === '$$') {
                  child.push(createChildren(item[key]))
                }
              }
              children[i] = createElement(item['#name'], {
                attrs: item.$ || '',
                domProps: {
                  innerHTML: item._ || void(0)
                }
              }, [
                ...child
              ])
            }
            return children
          }

          return createElement('svg', {attrs: xml.svg.$ || ''}, [...createChildren()])
        }
      }
    }
  }
}
</script>

<style>
.svg-icon {
  fill: currentColor;
}
</style>
