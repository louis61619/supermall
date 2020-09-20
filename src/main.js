import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toast from 'components/common/toast'
import VueLazyLoad from 'vue-lazyload'

// import FastClick from 'fastclick'

Vue.config.productionTip = false

//事件總線
Vue.prototype.$bus = new Vue()

//使用Toast插件
Vue.use(Toast)

//解決移動端300ms延遲
// FastClick.attach(document.body)

//使用懶加載的插件
Vue.use(VueLazyLoad, {
  loading: require('assets/img/common/placeholder.png')
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')


