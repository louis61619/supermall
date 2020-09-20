import Vue from 'vue'
import VueRouter from 'vue-router'


const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')
const Detail = () => import('views/detail/Detail')

//1.安裝插件
Vue.use(VueRouter)

//2.創建router
const routes =[
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail/:iid',
    component: Detail
  }

]
const router = new VueRouter({
  routes,
  mode: 'hash'
})

const originalreplace = VueRouter.prototype.replace
   VueRouter.prototype.replace = function replace(location) {
   return originalreplace.call(this, location).catch(err => err)
}

const originalpush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalpush.call(this, location).catch(err => err)
}
export default router