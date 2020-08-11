import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0e89f6c0 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _f95e3856 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _31f8419a = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _0e89f6c0,
    children: [{
      path: "",
      component: _f95e3856,
      name: "home"
    }, {
      path: "/login",
      component: _31f8419a,
      name: "login"
    }, {
      path: "/register",
      component: _31f8419a,
      name: "register"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
