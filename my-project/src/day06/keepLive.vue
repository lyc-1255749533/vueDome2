<template>
    <div>
        <!-- <h1>keepLive</h1> -->
        <keep-alive include="false">
            <component v-bind:is="currentTabComponent"></component>
        </keep-alive>
        <!-- <component v-bind:is="currentTabComponent"></component> -->
        <button @click="tabCom">切换组件</button>
    </div>
</template>

<script>
import A from './A';
import B from './B';
export default {
    components:{

    },
    data(){
        return{
            currentTabComponent:A
        }
    },
    methods: {
        tabCom(){
            if(this.currentTabComponent==A){
                this.currentTabComponent = B;
            }else{
                this.currentTabComponent = A;
            }
        }
    },
}
</script>

<style scoped>

</style>