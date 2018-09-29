import VueRouter from 'vue-router';
import testcase from './components/testcase/testcase.vue';
import hw from './components/HelloWorld.vue'

const routes = [
        { path: '/testcase', component: testcase },
        { path: '/bar', component: hw }
    ]
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

export default router;
