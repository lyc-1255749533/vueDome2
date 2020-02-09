<template>
    <div>
        <!-- v-if  显示隐藏 -->
        <!-- <h1 v-if="isShow">{{ msg }}</h1> -->
        <!-- v-else 与所对应的v=if 取反 -->
        <!-- <h1 v-else>上面的消息隐藏</h1> -->

        <!-- v-show -->
        <!-- <h2 v-show="isShow">v-show 控制的隐藏</h2>  -->

        <!-- <input type="text" v-show="isShow">
        <button @click="handleclick">点击</button> -->

        <!-- <ul>
           <li v-for="(item,index) in arr" :key="index" v-show="item%2==1" >{{ item }}</li>
        </ul> -->

        <!-- v-once 作用只渲染最初的数据，之后数据改变，视图不会再改变 -->
        <!-- <h1>{{ inp }}</h1>    
        <h1 v-once>加上v-once 之后{{ inp }}</h1>
        <input type="text" v-model="inp"> -->

        <!-- v-html 将符合 html规则的字符串渲染成真正的HTML元素 -->
        <!-- <div v-html="html"></div> -->

        <!-- v-on:事件名称 可以用@代替 -->
        <!-- <button v-on:mouseover="myClick">按钮</button> -->

        <!-- v-bind 给元素绑定变量作为属性时  使用 -->
        <!-- <div v-bind:id="id"></div> -->
        <!-- <button @click="clicka(0)">显示图片一</button>
        <button @click="clicka(1)">显示图片二</button>
        <button @click="clicka(2)">显示图片三</button>
        <img v-bind:src="img" alt="" width="100px" height="100px">  -->

        <!-- :clcik 样式的绑定语法：click="{样式名:布尔值}" 布尔值决定是否添加样式 -->

        <!-- <div :class="{bgRed:red,bgBlue:blue}">123</div> -->
        <!-- <div v-bind:class="[sh?'active':'bgRed']">456789</div>
      <button v-on:click="sh=true">蓝色</button>
      <button v-on:click="sh=false">红色</button> -->
      <!-- <div v-bind:style="{color:activeColor,fontSize:fontSize + 'px'}" @click="changesize">123</div>
      <button @click="jian">-</button> -->
    </div>
</template>

<script>
export default {
    data(){
        return{
            msg:'hello world!',
            isShow:true,
            arr:[1,2,3,4,5],
            inp:'123',
            html:'<h1>h1元素</h1>',
            id:'myId',
            img:'../../static/logo.png',
            myimg:['../../static/logo.png','../../static/img2.png','../../static/img3.png'],
            color:false,
            blue:true,
            red:false,
            sh:false,
            activeClass: 'active',
            errorClass: 'text-danger',
            fontSize:30,
            activeColor:'red'
        }
    },
    methods: {
        handleclick(){
        },
        myClick(){
        },
        clicka(index){
            console.log(111)
            this.img = this.myimg[index]
        },
        changeColor(color){
            if(color=='blue'){
                this.blue = true;
                this.red = false;
            }else{
                this.blue = false;
                this.red = true;
            }
        },
        changesize(){
            this.fontSize+=5;
        },
        jian(){
            this.fontSize-=5;
        }
    }
}
</script>

<style scoped>
/*该样式支队当前组件生效 */
.active{
    background: blue;
}
.text-danger{
    border:1px solid red;
}
.bgRed{
    background: red;
}.bgBlue{
    background: blue;
}
</style>