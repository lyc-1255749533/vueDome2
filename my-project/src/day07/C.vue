<template>
    <div>
        <h1>c组件</h1>
        <button @click="go">返回上一级</button>
        <router-link to="C1">go C1</router-link>
        <router-link to="C2">go C2</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    methods: {
        go(){
            //控制路由前进后退
            this.$router.go(-1);
        }
    },
}
</script>

<style scoped>

</style>