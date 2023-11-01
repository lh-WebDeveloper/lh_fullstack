import Vue from 'vue'
import App from './App.vue'
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts

new Vue({
  render: h => h(App),
}).$mount('#app')
