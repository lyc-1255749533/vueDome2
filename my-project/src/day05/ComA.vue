<template>
    <div>
        <h3>A组件</h3>
        <ComB v-on:send="getData"></ComB>
    </div>
</template>
<script>
import ComB from './ComB'
import ComC from './ComC'
export default {
    components:{
        ComB
    },
    methods: {
        getData(val){
            console.log(val)
        }
    },
}
</script>
<style scoped>
    h3{background: red;}
</style>