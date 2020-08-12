import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0e89f6c0 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _f95e3856 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _31f8419a = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _0eafaef3 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _58864019 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _2627aa3a = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _150c1b80 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

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
  linkActiveClass: 'active',
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
    }, {
      path: "/profile/:username",
      component: _0eafaef3,
      name: "profile"
    }, {
      path: "/settings",
      component: _58864019,
      name: "settings"
    }, {
      path: "/editor",
      component: _2627aa3a,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _150c1b80,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
