import Vue from 'vue'
import Main from './dialog.vue'
let DialogConstructor = Vue.extend(Main)
let instance
const Dialog = function (options) {
  options = options || {}
  options = {
    state: options.state,
    title: options.title,
    message: options.message
  }
  instance = new DialogConstructor({
    data: options
  })
  instance.vm = instance.$mount()
  let isNode = document.querySelector('.dialog')
  if (!isNode) {
    document.body.appendChild(instance.vm.$el)
  } else {
    document.body.removeChild(isNode)
  }
}
Vue.prototype.$dialog = Dialog
export default Dialog
