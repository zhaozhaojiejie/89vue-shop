import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import './style/index.less'// 引入默认样式

Vue.config.productionTip = false
Vue.use(ElementUI)// 全局注册element-ui

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
