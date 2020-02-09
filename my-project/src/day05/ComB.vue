<template>
    <div>
        <h3>hello {{title}}</h3>
        <button @click="sendData">向A组件通信</button>
    </div>
</template>
<script>
import C from './ComC'
export default {
    // props:["title"],
    props:{
        title:{
            type:[String,Number],//只能传递字符串，其他不接受
            default:20
        }
    },
    methods: {
        sendData(){
            //this.$emit('定义的是将名称',值)
            this.$emit('send',20);
        }
    },
}
</script>
<style scoped>

</style>