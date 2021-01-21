/**
 * Created by liukun on 2021/1/19.
 */

import vueSvg from './lib/components/vueSvg'

vueSvg.install = function(Vue){
  Vue.component(vueSvg.name, vueSvg)
}

export default vueSvg
