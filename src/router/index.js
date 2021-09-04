import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: Home,
    meta: {
      group: '默认分组'
    }
  },
  {
    path: '/about',
    name: 'About Me',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      group: '默认分组'
    }
  },
  {
    path: '/flexTest',
    name: 'Flex布局测试',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "flexTest" */ '../views/test/FlexTest.vue'),
    meta: {
      group: '测试'
    }
  },
  {
    path: '/flexTest2',
    name: 'Flex布局测试2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "flexTest" */ '../views/test/FlexTest2.vue')
  },
  {
    path: '/openlayer',
    name: 'openlayer',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "flexTest" */ '../views/ol/TestPage.vue'),
    meta: {
      group: 'openlayer'
    }
  },
  {
    path: '/ol/dragZoom',
    name: 'dragZoom',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "flexTest" */ '../views/ol/DragPan.vue'),
    meta: {
      group: 'openlayer'
    }
  },
  {
    path: '/ol/popup',
    name: 'popup',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "flexTest" */ '../views/ol/Popup.vue'),
    meta: {
      group: 'openlayer'
    }
  }
]

const router = new VueRouter({
  routes
})
export { routes }
export default router
