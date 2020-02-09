<template>
    <div>
        <ul>
            <li v-change='20'>新闻</li>
            <li v-change='16'>热门</li>
            <li v-change='25'>历史</li>
        </ul>
    </div>
</template>

<script>
export default {
    directives:{
        change:{
            bind(el,binding){ //指令第一次被绑定
                console.log(el)
                el.onclick=function(){
                     el.style.fontSize=binding.value+'px';
                }
            }
        }
    }
}
</script>

<style scoped>
    ul{
        list-style: none;
    }
    li{
        float: left;
        width: 50px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        font-size: 15px;
        font-weight: 500px;
    
    }
</style>