<template>
    <div>
        <!-- <h1>nihao</h1>
        <input type="text" v-focus> -->
         <div id="app">
            <header>
                    <section>
                            <label for="title">ToDoList</label>
                            <input type="text" v-model="title" @keyup.enter="add()" placeholder="添加ToDO">
                    </section>
                </header>

        <h4>未完成</h4>
        <ul>
            <li v-for="(item,key) in list":key="key" v-show="!item.flag" class="li1">
                <input type="checkbox" v-model="item.flag" @change="save()" :id="key">
                <label :for="key">✔</label>
                <span v-show="!item.show" @click="change(key)">{{item.title}}</span>
                <input type="text" v-model="item.title" v-show="item.show" @keydown.13="savelist(key)">
                <button @click="del(key)">-</button>
            </li>
        </ul>

        <h4>已完成</h4>
            <ul>
                <li v-for="(item,key) in list":key="key" v-show="item.flag" class="li2">
                    <input type="checkbox" v-model="item.flag" @change="save()" :id="key">
                    <label :for="key">✔</label>
                    <span v-show="!item.show" @click="change(key)">{{item.title}}</span>
                    <input type="text" v-model="item.title" v-show="item.show" @keydown.13="savelist(key)">
                    <button @click="del(key)">-</button>
                </li>
            </ul>
        
        </div>
    </div>
</template>


<script>
// import { func } from 'prop-types';
export default {
    data() {
        return{
            list:JSON.parse(localStorage.getItem("to"))||[],
            title:''
        };
    },
            methods:{
            add(){
                if(this.title==""){
                    alert("不能为空")
                    return false
                }
                var obj={title:this.title,flag:false,show:false}
                this.list.unshift(obj)
                localStorage.setItem("to",JSON.stringify(this.list))
                this.title=""
            },
            save(){
                localStorage.setItem("to",JSON.stringify(this.list))
            },
            change(key){
                for(var i in this.list){
                    this.list[i].show=false
                }
                this.list[key].show=true
            },
            savelist(k){
                this.list[k].show=false;
                localStorage.setItem("to",JSON.stringify(this.list))
            },
            del(key){
                this.list.splice(key,1)
                localStorage.setItem("to",JSON.stringify(this.list))
            }
            
        }
}
</script>


<style scoped>
*{
    font-size: 20px;
}
    header {
    height: 50px;
    background: #333;
    background: rgba(47,47,47,0.98);
    }
    header>section>label{
    margin-left: 350px;
    width: 100px;
    line-height: 50px;
    color: #DDD;
    font-size: 24px;
    cursor: pointer;
    }
    h4{
        color: violet;
    }
    header>section>input{
    width: 320px;
    height: 24px;
    padding-left: 10px;
    position: relative;
    left: 100px;
    top: -3px;
    border-radius: 5px;
    border: none;
    font-size: small;
    }
    ul>li{
    list-style: none;
    width: 460px;
    height: 32px;
    line-height: 32px;
    background:#e5e3e3;
    position: relative;
    margin-bottom: 10px;
    padding: 0 45px;
    border-radius: 3px;
    border-left: 5px solid #629A9C;
    color: skyblue;
    }
    button{
        border: 4px double #FFF;
        background: #ccc;
        margin-top: 5px;
        border-radius: 50%;
        float: right;
        font-weight: 600px;
        color: white;
        text-align: center;
        font-size: 10px;
        position: relative;
        right: -30px;
        width: 25px;
        height: 25px;
    }
    ul>li>label{
        display: inline-block;
        width: 25px;
        height: 25px;
        background: #ccc;
        text-align: center;
        line-height: 25px;
        font-size: 20px;
        color: #ccc;
        border-radius: 5px;
    }
    ul>li>input[type="checkbox"]:checked+label{
        color: rgb(8, 8, 8);
    }
    ul>li>input[type="checkbox"]{
        display: none;
    }
    body{
        background: grey;
    }
    .li1{
        background: pink;
    }
    .li2{
        background: orange;
    }
</style>