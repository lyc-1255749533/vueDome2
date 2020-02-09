<template>
    <div class="lyc-hello">
        <div class="lyc-up">
            <div>
                <keep-alive>
                    <component v-bind:is="currenTabComponent"></component>
                </keep-alive>
            </div>
        </div>
        <div class="lyc-foo">
            <ul>
                <li v-for="(itme,index) in img" :key="index" @click="dj(itme.ly,index)" :class="[itme.bg?'acti':'']">
                    <img :src="itme.img" alt="">
                    <p>{{itme.name}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import A from './sousuo4'
import B from './sousuo3'
import C from './sousuo2'
import D from './sousuo1'
    export default {
        components:{
            A,B,C,D
        },
        data(){
            return{
                currenTabComponent:A,
                img:[
                    {"name":"首页","img":require('../assets/1-1.gif'),"bg":false,"ly":"A"},
                    {"name":"分类","img":require('../assets/1-2.gif'),"bg":false,"ly":"B"},
                    {"name":"购物车","img":require('../assets/1-3.gif'),"bg":false,"ly":"C"},
                    {"name":"个人","img":require('../assets/1-4.gif'),"bg":false,"ly":"D"}
                ],
            }
        },
        methods:{
            dj(el,index){
                // console.log(el)
                this.currenTabComponent=el
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
.lyc-hello{
  height: 100%;
  display: flex;
  flex-direction: column;
}

.lyc-up{
  flex: 1;
  display: flex;
}
.lyc-up>div{
  flex: 1;
  height: 92vh;overflow: scroll;
}
.acti{
    color: red;
}
.lyc-foo{
    height: 50px;
    border: 1px solid;
}
.lyc-foo ul{
   display: flex;
}
.lyc-foo ul li{
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    font-size: 5px;
}
.lyc-foo ul li img{
   width: 25%;
   height: 25px;
   margin-top: 5px;
}
</style>