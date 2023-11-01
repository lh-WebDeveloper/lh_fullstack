import Vue from 'vue'
import VueRouter from 'vue-router'
import Goods from '@/views/goods/Goods.vue'
// import Seller from '@/views/seller/Seller.vue'
// import Comment from '@/views/comment/Comment.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect: '/goods'
  },
  {
    path: '/goods/',
    name: 'goods',
    component: Goods
  },
  {
    path: '/comment',
    name: 'comment',
    component: () => import('@/views/comment/Comment')  //路由按需加载
  },
  {
    path: '/seller',
    name: 'seller',
    component: () => import('@/views/seller/Seller')  //路由按需加载
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
