<template>
    <div>
        <h1>borB组件</h1>
        <p>borA传递过来的值:{{val}}</p>
    </div>
</template>

<script>
import bus from './events/bus';
export default {
    data(){
        return{
            val:''
        }
    },
    mounted() {
        //组件挂载完成就开始注册一个$on绑定的事件，等待(监听)兄弟传的值
        bus.$on('bora',(val)=>{
            console.log(val);
            this.val = val;
        })
    },
}
</script>

<style>

</style>