<template>
    <div class="box">
        <div class="lf">
            <ul>
                <li v-for="item in arr" v-if="item.type.indexOf(2)==-1" @click="selectTab(item.type)">
                    {{item.type}}
                </li>
            </ul>
        </div>
        <div class="rg">
            <ul v-if="arr.length>0">
                <li v-for="item in arr" v-if="item.type.indexOf(type)!=-1">
                    <p>{{item.name}}</p>
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
            arr:[],
            newArr:[],
            type:''
        }
    },
    mounted() {
        axios.get('../../static/baidu.json').then((res)=>{
            if(res.data.msg=='success'){
                this.arr = res.data.data;
                this.type = res.data.data[0].type;
            }
        })
    },
    methods: {
        selectTab(val){
            console.log(val)
            this.type = val;
        }
    },
}
</script>

<style scoped>
*{
    list-style: none;
}
.box{
    width: 100%;
}
.lf{
    float: left;
}
.rg{
    margin-left: 200px;
}
</style>