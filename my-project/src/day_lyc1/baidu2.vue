<template>
    <div>
        <ul :class="[isShow?'show':'']">
            <li v-for="(itme,index) in arr" :key="index" @mousemove="add(index,itme.name)" :class="[index==str?'bg':'']">
                <span>{{itme.name}}</span>
                <span class="white" @click="del(index)">删除</span>
            </li>
        </ul>
    </div>
</template>
<script>
import bus from './bus'
    export default {
        data(){
            return{
                str:2,
                isShow:true,
                arr:[
                    {"name":"黑龙江"},
                    {"name":"佳木斯"},
                    {"name":"英雄联盟"},
                    {"name":"守卫剑阁"},
                    {"name":"天龙八部"},
                    {"name":"射雕英雄传"},
                    {"name":"132"},
                    {"name":"北京大学"},
                    {"name":"清华大学"}
                ]
            }
        },
        methods:{
            add(it,name){
                this.str=it
                bus.$emit('b1',name)
            },
            del(i){
                this.arr.splice(i,1)
            }
        },
        mounted(){
        //组件挂在完成 就开始 注册一个$on 绑定的事件 等待(监听)兄弟传值
            bus.$on('a1',(val)=>{
                if (val==38) {
                    this.str--
                    if (this.str<0) {
                        this.str=8
                    }
                     bus.$emit('b2',this.str)
                    // console.log(this.str)
                }
                if (val==40) {
                    this.str++
                    
                    if (this.str>8) {
                        this.str=0
                    }
                    bus.$emit('b2',this.str)
                }
            }),
            bus.$on('a2',(val)=>{
                this.isShow=false
            }),
            bus.$on('a3',(val)=>{
                this.isShow=true
            })
        }
    }
</script>

<style  scoped>
*{
    padding: 0;
    margin: 0;
    list-style: none;
}
.wy-one{
    padding: 30px 0;
}
.show{
    display: none;
}
ul{
    padding: 30px 50px;
}
li{
    width: 200px;
    height: 50px;
    line-height: 50px;
    border: 1px solid pink;
    padding: 5px 0;
    margin-left: 455px;
    text-align: center;
}
.bg{
    background: skyblue;
}
.white{
    color: white;
    float: right;
    margin-right: 20px;
}
</style>