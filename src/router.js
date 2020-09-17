import Vue from 'vue'
import Router from 'vue-router'
import Cars from "./views/Cars"

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'cars',
            component: Cars
        }
    ]
})
