<template>
    <div>
        <!-- <h1>A组件</h1>
        <router-link to="/B/1">跳转B</router-link>
        <router-link to="/C">跳转C</router-link> -->
        <button @click="go(item)" v-for="item in arr">GO {{item.title}}</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            arr:[{id:1,title:'耐克'},{id:2,title:'阿迪'},{id:3,title:'乔丹'}]
        }
    },
    methods: {
        go(item){
            //params  带参数跳转
            //路由需要设置参数
            // /b/:参数
            this.$router.push({
                path:'/B/'+item.id
            })
            // this.$router.push({name:'B',params:{id:item.id}})
            
            //query 带参数跳转
            //路由不需要设置参数
            ///b?id=3
            // this.$router.push({path:'B',query:{id:item.id}})
        }
    },
}
</script>

<style scoped>

</style>