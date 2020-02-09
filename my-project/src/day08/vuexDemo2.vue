<template>
    <div>
        <h1>vuex2</h1>
        <p>{{this.$store.getters.upperCase}}</p>
        <button @click="add">+</button>
        <p>{{this.$store.state.shopcar.login}}</p>
        <p>{{this.$store.state.shopcar.uname}}</p>
        <button @click="login">登录</button>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data() {
        return {
            msg:''
        }
    },
    mounted() {
        
    },
    methods: {
        add(){
            // this.$store.state.n++;
            this.$store.commit('add',3)   //通过vuex中的mutations里面的方法来操作
        },
        login(){
            //调用 actions  里面的方法
            this.$store.dispatch('loginSync',['uname','123456'])
        }
    },
    // filters:{   //参数就是要过滤的内容
    //     tof:function(value){
    //         if(!value) return '';
    //         return value.toFixed(2)
    //     }
    // }
}
</script>

<style scoped>

</style>