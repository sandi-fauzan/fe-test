import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/list-product',
    name: 'List Product',
    component: () => import('../views/listProduct.vue')
  },
  {
    path: '/detail-product/:id',
    name: 'Detail Product',
    component: () => import('../views/DetailProduct.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
