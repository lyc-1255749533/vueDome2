<template>
    <div>
        <h1>vuex</h1>
        <!-- <p>{{this.$store.state.shopcar.n}}</p> -->
        <!-- <button @click="ass">-</button> -->
        <button @click="submit">按钮</button>
        <hr>
        <!-- <VuexDome2></VuexDome2> -->
    </div>
</template>

<script>
import VuexDome2 from './vuexDemo2';
export default {
    components:{
        VuexDome2
    },
    methods: {
        submit(){
            this.$store.commit('shopcar/login',321)
        }
    },
    //过滤器
    // filters:{  
    //     tof:function(value){   //参数就是要过滤的内容
    //         if(!value) return '';
    //         return value.toFixed(2)
    //     }
    // }
}
</script>

<style scoped>

</style>