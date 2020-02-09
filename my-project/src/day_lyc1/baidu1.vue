<template>
    <div>
        <div class="lyc-one">
            <input type="text" v-model="inp" @keydown="key1($event)" @focus="focus">
            <button @blur="blur">搜索</button>
        </div>
        
        


    </div>
</template>

<script>
import bus from './bus'
    export default {
        data(){
            return{
                str:'2',
                inp:'佳木斯',
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
         
            key1(e){
                bus.$emit('a1',e.keyCode)
            },
            focus(){
                bus.$emit('a2')
            },
            blur(){
                bus.$emit('a3')
            },
        },
         mounted(){
        //组件挂在完成 就开始 注册一个$on 绑定的事件 等待(监听)兄弟传值
            bus.$on('b1',(val)=>{
               this.inp=val
            }),
            bus.$on('b2',(val)=>{
               this.inp=this.arr[val].name
               
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
.lyc-one{
    padding: 30px 0;
    margin-left: 500px;
}
.lyc-one>input{
    margin: 0 auto;
}
.show{
    display: none;
}
ul{
    padding: 30px 50px;
}
li{
    border: 1px solid gainsboro;
    padding: 5px 0;
}
.bg{
    background: red;
}
.white{
    color: white;
    float: right;
    margin-right: 20px;
}
</style>