<template>
    <div>
        <div id="app">
            <header>
                    <section>
                            <label for="title">ToDoList</label>
                            <input type="text" v-model="title" @keyup.enter="add()" placeholder="添加ToDO">
                    </section>
                </header>

        <h4>未完成<span>{{zong}}</span></h4>
        <ul>
            <li class="li1" v-for="(item,key) in arr" v-show="!item.flag" >
                <input type="checkbox" v-model="item.flag" :id="key" @change="change">
                <label :for="key">✔</label>
                <span v-show="!item.isshow" @click="show(key)">{{item.title}}</span>
                <input @blur="save(key)" @keyup.esc="save(key)" @keyup.enter="save(key)" type="text" v-model="item.title" v-show="item.isshow">
                <button class="btn" @click="del()">-</button>
            </li>
        </ul>

        <h4>已完成<span>{{this.arr.length-zong}}</span></h4>
            <ul>
                <li class="li2" v-for="(item,key) in arr" v-show="item.flag" >
                    <input type="checkbox" v-model="item.flag" :id="key" @change="change">
                    <label :for="key">✔</label>
                    <span v-show="!item.isshow" @click="show(key)">{{item.title}}</span>
                    <input @blur="save(key)" @keyup.esc="save(key)" @keyup.enter="save(key)" type="text" v-model="item.title" v-show="item.isshow">
                    <button class="btn" @click="del()">-</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default{
    data() {
        return {
            title:'',
            arr:JSON.parse(localStorage.getItem('todo'))||[]
        }
    },
    methods: {
        add(){
            if(this.title == ''){
                alert('不能添加空信息')
                return false;
            }
            var obj = {title:this.title,flag:false,isshow:false}
            this.arr.push(obj)
            localStorage.setItem('todo',JSON.stringify(this.arr))
            
            this.title=''
        },
        change(){
            localStorage.setItem('todo',JSON.stringify(this.arr))
        },
        del(k){
            this.arr.splice(k,1)
            localStorage.setItem('todo',JSON.stringify(this.arr))
        },
        show(key){
            for(var i in this.arr){
                this.arr[i].isshow = false;
            }
            this.arr[key].isshow = true;
        },
        save(key){
            this.arr[key].isshow = false;
            localStorage.setItem('todo',JSON.stringify(this.arr))
        }
    },

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
    .btn{
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