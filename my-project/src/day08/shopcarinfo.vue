<template>
    <div>
        <h1>{{newArr.name}}</h1>
        <h1>{{newArr.price}}</h1>
        <h1>{{newArr.info}}</h1>
        <h1 v-cloak>{{newArr.address}}</h1>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            id:'',
            arr:[],
            newArr:{}
        }
    },
    mounted() {
        this.id = this.$route.params.id;
        axios.get('../../static/data.json').then((res)=>{
            this.arr = res.data;
            //根据获得的id 找到那条数据
            this.newArr = this.arr.filter((item)=>{
                return item.id == this.id;
            })
            this.newArr = this.newArr[0]
        })
    },
}
</script>

<style scoped>

</style>