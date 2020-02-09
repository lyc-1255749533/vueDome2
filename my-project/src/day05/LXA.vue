<template>
    <div>
        <!-- <LXB class="div1" v-on:add="addData"></LXB>
        <div class="div1">{{n}}</div>
        <LXC class="div1" v-on:acc="accData"></LXC> -->

        <!-- 兄弟 -->
        <borA></borA>
        <borB></borB>
    </div>
</template>

<script>
import LXB from './LXB'
import LXC from './LXC'
import borA from './borA'
import borB from './borB'
export default {
    data(){
        return{
            n:0
        }
    },
    components:{
        // LXB,
        // LXC
        borA,
        borB
    },
    methods: {
        addData(){
            this.n++;
        },
        accData(){
            this.n--;
        }
    },
}
</script>

<style>
    .div1{
        display: inline-block;
    }
</style>