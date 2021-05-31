import Vue from 'vue'
import VueRouter from 'vue-router'
import VueCookies from 'vue-cookies'

Vue.use(VueRouter)
Vue.use(VueCookies)

// const ifUserAuthenticated = (to, from, next) => {
//   if (Vue.$cookies.isKey("login")) {
//     next()
//     return
//   }
//   next({name: "Login"})
// }

const routes = [
  {
    path: '/admin',
    component: () => import('../views/admin/home.vue'),
    children: [
      {path: '/admin/', name: 'AdminHome', component: () => import('../views/admin/pages/home')},
      {path: '/admin/gallery', name: 'Gallery', component: () => import('../views/admin/pages/gallery')},
      {path: '/admin/settings', name: 'Settings', component: () => import('../views/admin/pages/settings')},
    ]
  },

  {path: '/', name: 'LandingPage', component: () => import('../views/index')},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router