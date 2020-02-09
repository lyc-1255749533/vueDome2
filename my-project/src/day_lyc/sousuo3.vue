<template>
    <div class="box">
        <div class="header">
            <img src="../assets/bama01_sm.jpg" alt="">
            <input type="text">
        </div>
        <div class="con">
            <div class="con1">
                <ul>
                    <li v-for="(itme,index) in str":key="index" @click="add(itme.ar,index)" :class="[itme.bg?'active':'']">{{itme.name}}</li>
                </ul>
            </div>
            <div class="con2">
                <ul>
                    <li v-for="(itme,index) in arr" :key="index">
                        <img :src="itme.icon" alt="">
                        <p>{{itme.name}}</p>
                    </li>
                </ul>
            </div>
        </div>
        
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        
        data(){
            return{
                img:[
                    {"name":"首页","img":require('../assets/1-1.gif'),"bg":false},
                    {"name":"分类","img":require('../assets/1-2.gif'),"bg":false},
                    {"name":"购物车","img":require('../assets/1-3.gif'),"bg":false},
                    {"name":"个人","img":require('../assets/1-4.gif'),"bg":false}
                ],
                str:[
                    {"name":"所有分类","bg":false,"ar":""},
                    {"name":"居家生活","bg":false,"ar":"jujia"},
                    {"name":"配饰装饰","bg":false,"ar":"peishi"},
                    {"name":"新品服装","bg":false,"ar":"fuzhuang"},
                    {"name":"日用电器","bg":false,"ar":"dianqi"},
                ],
                ar:[],
                arr:[]
            }
        },
        mounted(){
            axios.get('https://api.it120.cc/small4/shop/goods/category/all').then((res)=>{
                // console.log(res.data)
                this.ar=res.data.data
                this.arr=this.ar
                console.log(this.ar);
            })
        },
        methods:{
            add(ar,index){
                // console.log(index)
                // console.log(ar)
                let str=this.ar.filter((itme)=>{
                    return itme.type.includes(ar)
                })
                this.arr=str
                // console.log(ar)
                // console.log(str)
                this.str.map((itme,i)=>{
                    // console.log(itme)

                    if (i!=index) {
                        itme.bg=false
                    }else{
                        itme.bg=true
                    }
                })
            },
            dj(index){
                this.img.map((itme,i)=>{
                    if (i!=index) {
                        itme.bg=false
                    }else{
                        itme.bg=true
                    }
                })

            }
        }
    }
</script>

<style scoped>
.box{
  height: 100%;
  display: flex;
  flex-direction: column;
}


*{
  padding: 0;
  margin: 0;
  list-style: none;
}
.active{
    color: red;
    border-left: 2px solid red;
}
.acti{
    color: red;
}



.header{
    padding: 5px 10px;
    height: 30px;
    border: 1px solid;
}
.header img{
  vertical-align:middle;
  width: 25px;
  height: 25px;
}
.header input{
  vertical-align:middle;
}


.con{
  flex: 1;
  /* height: 85vh;overflow: scroll; */
  display: flex;
}


.con1{
    width: 15%;
    height: 100%;
    border: 1px solid gainsboro;
    font-size: 15px;
box-sizing: border-box;
}
.con2{
    flex: 1;
    height: 85vh;overflow: scroll;
}
.con2 ul{
    display: flex;
    flex-wrap: wrap;
}
.con2 ul li{
    width: 25%;
    display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      font-size: 12px;
}
.con2 ul li img{
    width: 85px;
    margin-top: 10px;
}
.con1 ul{
    margin-top: 15px;
}
.con1 ul li{
    text-align: center;
    padding: 13px 0;
    border: 2px solid none;
}
.foo{
    height: 50px;
    border: 1px solid;
}
.foo ul{
   display: flex;
}
.foo ul li{
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    font-size: 5px;
}
.foo ul li img{
   width: 25%;
   margin-top: 5px;
}
</style>