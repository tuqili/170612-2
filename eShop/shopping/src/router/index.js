import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/home/home.vue'
import clothes from '../components/clothes/clothes.vue'
import food from '../components/food/food.vue'
import medical from '../components/medical/medical.vue'
import toys from '../components/toys/toys.vue'
import daily from '../components/daily/daily.vue'
import Cosmetology from '../components/Cosmetology/Cosmetology.vue'
import register from '../components/register/register.vue'
import classify from '../components/classify/classify.vue'
import shopCar from '../components/shopCar/shopCar.vue'

Vue.use(VueRouter);

export default new VueRouter({
  linkActiveClass: 'active',
  routes:[
    {
      path: '/home',
      component: home
    },
    {
      path: '/clothes',
      component: clothes
    },
    {
      path: '/food',
      component: food
    },
    {
      path: '/medical',
      component: medical
    },
    {
      path: '/toys',
      component: toys
    },
    {
      path: '/daily',
      component: daily
    },
    {
      path: '/Cosmetology',
      component: Cosmetology
    },
    {
      path: '/register',
      component: register
    },
    {
      path: '/classify',
      component: classify
    },
    {
      path: '/shopCar',
      component: shopCar
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
});
