import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _7aa1cb96 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

const scrollBehavior = function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/",
      component: _7aa1cb96,
      name: "index"
    }],

    fallback: false
  })
}
