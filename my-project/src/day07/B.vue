<template>
    <div>
        <h1>B组件</h1>
        <router-link to="/C">跳转C</router-link>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log(this.$route.params.id)
        // console.log(this.$route.query.id)
    },
    beforeRouteEnter (to, from, next) {
        console.log(from)
        next(true)
    }
}
</script>

<style scoped>

</style>