<!-- Vue Single File Component, Created by liukun on 2021/1/19. -->
<template>
  <vue-svg-item :name="name" :path="path" :width="width" :height="height"></vue-svg-item>
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
    width: String,
    height: String
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
        }
      },
      render: function (createElement) {
        const xml = require(`!xml-loader?explicitChildren=true&preserveChildrenOrder=true!../../src/svg/${this.path}${this.name}.svg`)

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
</script>
