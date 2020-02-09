import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// // import keepLive from '../day06/keepLive'
// // import Slot  from '../day06/slot'
// // import SlotCity  from '../day06/slotCity'
// // import C from '../day06/C'
// // import demo from '../day06/life/demo'
// import Todo from "../components/todo"
// import cont from "../components/cont"
import A from '../day07/A';
import B from '../day07/B';
import C from '../day07/C';
import C1 from '../day07/C1';
import C2 from '../day07/C2';
// import Vuex from '../day08/vuexDemo1'
// import HomeWork from '../day08/Homework'
// import ShopCarinfo from '../day08/shopcarinfo'
// import Shop1 from '../kaoshi/shop1'
// import Shop2 from '../kaoshi/shop2'
// import Sousuo from '../day_lyc/sousuo'
// import Baidu from '../day_lyc1/baidu'
// import Gouwu from '../day_lyc/gouwu'
// import Login from '../zuoye/login'
// import My from '../zuoye/my'
// import VuexDemo3 from '../day08/vuexDemo3'
// import Http from '../axios/axiosdemo';
// import Login from '../axios/login';
// import Shangjia from '../axios/shangjia';
// import Yonghu from '../axios/yonghu';
// import Shops from '../axios/shops';
// import Shouye from '../axios/shouye';
// import shoping from '../lianxi/shoping'
// import jiesuan from '../lianxi/jiesuan'
// import lianxi from '../day01/lianxi'
// import jisuan from '../day01/jisuan'
// import dianming from '../day01/dianming'
// import lyb from '../day02/lyb'
// import todolist from '../day03/todolist'
import tudo from '../day03/tudo'
Vue.use(Router)

const router =  new Router({
  mode:'hash',
  routes: [
    {
      path: '/',
      redirect:'/td',
      name: 'HelloWorld',
      component: HelloWorld
    },
    // {
    //   path:'/kp',
    //   name:'lp',
    //   component:keepLive
    // },
    // {
    //   path:'/slot',
    //   name:'slot',
    //   component:Slot
    // },
    // {
    //   path:'/slotCity',
    //   name:'slotCity',
    //   component:SlotCity
    // },
    // {
    //   path:'/C',
    //   name:'C',
    //   component:C
    // },
    // {
    //   path:'/demo',
    //   name:'demo',
    //   component:demo
    // }
    // {
    //   path:'/todo',
    //   name:'todo',
    //   component:Todo
    // },
    // {
    //   path:'/cont',
    //   name:'cont',
    //   component:cont
    // },
    // {
    //   path:'/A',
    //   name:'A',
    //   component:A
    // },
    // {
    //   path:'/B/:key',
    //   name:'B',
    //   component:B
    // },
    // {
    //   path:'/C',
    //   name:'C',
    //   component:C,
    //   children:[
    //     {
    //       path:'/C1',
    //       name:'C1',
    //       component:C1
    //     },
    //     {
    //       path:'/C2',
    //       name:'C2',
    //       component:C2
    //     }
    //   ]
    // }
    // {
    //   path:'/vuex',
    //   name:'vuex',
    //   component:Vuex
    // },
    // {
    //   path:'/hw',
    //   name:'hw',
    //   component:HomeWork
    // },
    // {
    //   path:'/shopcarinfo/:id',
    //   name:'shopcarinfo',
    //   component:ShopCarinfo
    // },
    // {
    //   path:'/shop1',
    //   name:'shop1',
    //   component:Shop1
    // },
    // {
    //   path:'/shop2/',
    //   name:'shop2',
    //   component:Shop2
    // },
    // {
    //   path:'/ss',
    //   name:'ss',
    //   component:Sousuo
    // },
    // {
    //   path:'/bd',
    //   name:'bd',
    //   component:Baidu
    // },
    // {
    //   path:'/gw',
    //   name:'gw',
    //   component:Gouwu
    // },
    // {
    //   path:'/lg',
    //   name:'lg',
    //   component:Login
    // },
    // {
    //   path:'/my',
    //   name:'my',
    //   component:My
    // },
    // {
    //   path:'/vd',
    //   name:'vd',
    //   component:VuexDemo3
    // },
    // {
    //   path:'/axiosdemo',
    //   name:'axiosdemo',
    //   component:Http,
    //   children:[
    //     {
    //       path:'/sj',
    //       name:'sj',
    //       component:Shangjia
    //     },
    //     {
    //       path:'/yh',
    //       name:'yh',
    //       component:Yonghu
    //     },
    //     {
    //       path:'/sp',
    //       name:'sp',
    //       component:Shops
    //     },
    //     {
    //       path:'/sy',
    //       name:'sy',
    //       component:Shouye
    //     },
    //   ]
    // },
    // {
    //   path:'/lg',
    //   name:'lg',
    //   component:Login
    // },
    // {
    //   path:'/sp',
    //   name:'sp',
    //   component:shoping
    // },
    // {
    //   path:'/js',
    //   name:'js',
    //   component:jiesuan
    // },
    // {
    //     path:'/ji',
    //     name:'ji',
    //     component:jisuan
    //   },
      // {
      //   path:'/dm',
      //   name:'dm',
      //   component:dianming
      // },
      // {
      //   path:'/lyb',
      //   name:'lyb',
      //   component:lyb
      // },
      {
        path:'/td',
        name:'td',
        component:tudo
      },
  ],
  
})


// router.beforeEach((to,from,next)=>{
//   //全局守卫
//   next(true);
// })

export default router;