<template>
    <div>
        <h1>商品列表</h1>
        <div class="nav">
            <ul>
                <li>推荐</li>
                <li>母婴</li>
                <li>鞋包饰品</li>
                <li>食品</li>
                <li>数码家居</li>
            </ul>
        </div>
        <div class="con">
            <dl>
                <dd>综合排序</dd>
                <dd>销量优先</dd>
                <dd><button class="btn1" @click="sort()">价格</button></dd>
            </dl>
        </div>
        <div class="boy">
            <ul>
                <li v-for="item in arr">
                    <div><img :src=item.img alt=""></div>
                    <div>
                    <p>{{item.p1}}</p>
                    <p>￥{{item.p2}}</p>
                    <p>{{item.p3}}</p>
                    </div>
                    <div>
                        <button class="btn" @click="enter(item)">+</button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            arr:[]
        }
    },
    
   mounted(){
       axios.get('/static/list.json').then(res=>{
           this.arr=res.data;
           console.log(this.arr)
       })
   },
   methods:{
       enter(item){
           console.log(item)
           item.inp=1;
           this.$store.commit('go',item)
           this.$router.push({path:"/js"})
       }
   }
}
</script>
<style scoped>
h1{
    font-size: 0.3rem;
    text-align: center;
    width: 100%;
}
.nav>ul{
    width: 100%;
    height: 1rem;
    background: #5d4288;
    display: flex;
    list-style: none;
    font-size: 0.2rem;
    color: white;
}
.nav>ul>li{
    width: 20%;
    height: 100%;
    display: block;
    text-align: center;
    line-height: 1rem;
}
.nav>ul>li:hover{
    background: #9750ff;
}
.boy>ul{
    width: 100%;
    list-style: none;
}
.boy>ul>li{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    height: 2rem;
    margin-top: 0.2rem;
}
.boy>ul>li>div:nth-of-type(1){
    width: 25%;
    height: 2rem;
    display: block;
}
.boy>ul>li>div:nth-of-type(1)>img{
    width: 100%;
    height: 100%;
    display: block;
}
.boy>ul>li>div:nth-of-type(2){
    width: 60%;
    height: 2rem;
    display: block;
    font-size: 0.3rem;
    line-height: 0.6rem;
}
.boy>ul>li>div:nth-of-type(3){
    width: 15%;
    height: 2rem;
    display: block;
}
.btn{
    width: 0.8rem;
    height: 0.5rem;
    background: #5d4288;
    border: none;
    color: white;
    border-radius:50px; 
    outline: none;
}
.con{
    display: flex;
    width: 100%;
    height: 100%;
}
.con>dl{
    display: flex;
    width: 100%;
    height: 0.5rem;
}
.con>dl>dd{
    flex: 1;
    display: inline-block;
    font-size: 0.3rem;
    text-align: center;
    line-height: 0.5rem;
}
.btn1{
    border: none;
    background: white;
    width: 1rem;
}
</style>