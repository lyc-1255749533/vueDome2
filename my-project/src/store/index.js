import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
// import shopcar from './shopCar.js';
// import user from './user.js';
// import vuexdemo3 from './vuexdemo.js';
import list from './list'


import VuePersist from 'vuex-persist'
const vuexLocal = new VuePersist({
    storage:window.localStorage
})


export default new Vuex.Store({
    plugins:[vuexLocal.plugin],
    state:{
        // username:'zhw',
        // psw:'12345',
        // phone:'122232323',
        // email:'122@qq.com'
    },
    getters:{
        // add(state){
        //     console.log('add ...')
        //     return 1
        // }
    },
    modules:{
        // user,
        // shopcar,
        // vuexdemo3,
        list
        
    },
    mutations:{
        // changeMessage(state){
        //     state.username="zhw!!!"
        // },
    }


   
})