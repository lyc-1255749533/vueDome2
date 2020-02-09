<template>
    <div>
        <h1>borA组件</h1>
        <button @click="send">向borB组件传值</button>
    </div>
</template>

<script>
import bus from './events/bus';
export default {
    methods: {
        send(){
            bus.$emit('bora','我是borA组件传递过来的值!!!')
        }
    },
}
</script>

<style>

</style>