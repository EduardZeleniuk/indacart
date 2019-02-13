import Vue from "vue"
import App from "./App.vue"
import store from "./store"
import VueLocalStorage from 'vue-localstorage'
 
Vue.use(VueLocalStorage)
Vue.config.productionTip = false;

new Vue({
  store,
  VueLocalStorage,
  created () {
    var div = document.createElement('div')
    div.id = 'app'
    document.body.appendChild(div)
  },
  render: h => h(App)
}).$mount("#app")
