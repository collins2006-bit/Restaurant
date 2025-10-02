import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import Contactus from '@/components/Contactus.vue'
import Menu from '@/components/Menu.vue'
import Login from '@/components/Login.vue'
import Orders from '@/components/Orders.vue'
import Reservation from '@/components/Reservation.vue'
import Signup from '@/components/Signup.vue'
import Userprofile from '@/components/Userprofile.vue'
import Menuitem from '@/components/Menuitem.vue'
import Admin from '@/components/Admin.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name:'Home',
      path:'/',
      component:Home
    },

    {
       name:'Contactus',
      path:'/Contactus',
      component:Contactus
    },

    {
       name:'Login',
      path:'/Login',
      component:Login
    },

    {
       name:'Menu',
      path:'/Menu',
      component:Menu
    },

    {
       name:'Menuitem',
      path:'/Menuitem',
      component:Menuitem
    },

    {
      name:'Orders',
      path:'/Orders',
      component:Orders

    },

   {
     name:'Reservation',
      path:'/Reservation',
      component:Reservation
   },

   {
     name:'Signup',
      path:'/Signup',
      component:Signup
   },

   {
     name:'Userprofile',
      path:'/Userprofile',
      component:Userprofile
   },

   {
     name:'admin',
      path:'/admin',
      component:Admin
   },
  ],
})

export default router
