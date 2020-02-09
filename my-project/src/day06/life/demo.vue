<template>
    <div>
        <h1 ref='inp'>生命周期</h1>
        {{n}}
        <keep-alive>
            <component :is="componentId"></component>
        </keep-alive>
        <button @click="change">隐藏子组件</button>
    </div>
</template>

<script>
import A from './demoA'
export default {
    data(){
        return{
            n:0
            
        }
    },
    beforeCreate() { 
        //创建之前 组件data数据没有初始化  不能获得dom
        // console.log('创建之前:数据获取'+this.n,'获取dom:'+this.$refs.inp)
    },
    created() {
         //创建完成  可以获取组件 data数据   不能获得dom
        console.log('创建完成:数据获取'+this.n,'获取dom:'+this.$refs.inp)
        setInterval(()=>{
            this.n++
        },1000)
    },
    mounted() {  
        //组件挂载完成 获得data数据， dom创建完成
        // console.log('挂载完成:数据获取'+this.n,'获取dom:'+this.$refs.inp)
    },
    beforeUpdate() {  
        //组件数据更新之前
        // console.log('数据将要更新')
    },
    updated() {
        //组件数据更新完成
        // console.log('数据更新完成')
    },
}
</script>

 <style scoped>
 
 </style>