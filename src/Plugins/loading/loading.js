import Vue from 'vue'
import Main from './loading.vue'
let LoadingConstructor = Vue.extend(Main)
let instance
const Loading = function (options) {
  options = options || {}
  options = {
    state: options.state
  }
  instance = new LoadingConstructor({
    data: options
  })
  instance.vm = instance.$mount()
  let isNode = document.querySelector('.loading')
  if (!isNode) {
    document.body.appendChild(instance.vm.$el)
  } else {
    document.body.removeChild(isNode)
  }
}
Vue.prototype.$loading = Loading
export default Loading
