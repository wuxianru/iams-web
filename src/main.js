import Vue from 'vue'
import VueRouter from 'vue-router';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './routers'

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.config.productionTip = false

new Vue({
    el:"#app",
  render: h => h(App),
    router:router
}).$mount('#app')
