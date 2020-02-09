<template>
    <div>
        <!-- <div class="box" @click.once="click1">
            123
            <div @click.once="click2">
                456
            </div>
        </div> -->
        <!-- <input v-on:keyup="submit($event)"> -->
        <!-- <div class="box" :style="{marginLeft:left + 'px'}"></div> -->
        <button @click.right="handle">按钮</button>
        <input type="text" v-focus>
    </div>
</template>

<script>
export default {
    mounted() {//组件渲染完成 加载完成 挂载完毕
    //添加键盘事件
        window.addEventListener('keydown',($event)=>{
            //1.识别出按键
            console.log(event.keyCode)
            if(event.keyCode == 37||event.keyCode == 65){
                //div向右移动
                this.left+=10;
            }
            if(event.keyCode == 38||event.keyCode == 87){
                //div向右移动
                this.top+=10;
            }
            if(event.keyCode == 39||event.keyCode == 68){
                //div向右移动
                this.right+=10;
            }
            if(event.keyCode == 40||event.keyCode == 83){
                //div向右移动
                this.bottom+=10;
            }
        })
    },
    data(){
        return{
            left:0,
            right:0,
            top:0,
            bottom:0
        }
    },
    methods: {
        // click1(){
        //     alert('崔鑫')
        // },
        // click2(){
        //     alert('王阳')
        // },
        // submit(e){
        //     console.log(e.keyCode)
        // }
        handle(){
            alert('in')
        }
    }
}
</script>

<style scoped>
.box{
    border: 1px solid red;
    width: 100px;
    height: 100px;
}
</style>