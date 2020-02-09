import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
import store from './store/index';
import axios from 'axios';
import ElementUI from 'element-ui'
// import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// Vue.directive('focus', {
//   // 当被绑定的元素插入到 DOM 中时……
//   inserted: function (el) {
//     // 聚焦元素
//     el.focus()
//   }
// })
// Vue.filter('tof',function(value){
//   return value.toFixed(2)
// })
/* eslint-disable no-new */

Vue.use(ElementUI)

// Vue.use(Element, { size: 'small' })

axios.interceptors.request.use(function (config){
  //请求已经到了服务器
  //config是请求是携带的一些信息 可以打印看看具体的
  // console.log(config)
  //在请求头中添加 coolie   token   loading  图s
  return config
},function(error){
//请求出现了错误  一般可能是客户端网络出现问题
})
//拦截响应
axios.interceptors.response.use(function(res){
//接口返回200这里需要return返回的信息  不然请求的时候是拿不到服务器返回的信息
  // console.log(res)
  return res
},function(error){
//响应非200，或者超过了设定的请求时间而超时
})

Vue.prototype.axios = axios;

new Vue({   //选项对象   vue实例对象
  el: '#app',  //挂载点
  router,
  store:store,
  components: { App },
  template: '<App/>'
})

