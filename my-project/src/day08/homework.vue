<template>
    <div>
        <ul>
            <router-link :to='/shopcarinfo/+item.id' v-for="item in arr" tag="li" >
                <p>{{item.name}}</p>
                <p>{{item.price}}</p>
                <p>{{item.info}}</p>
            </router-link>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            arr:[]
        }
    },
    mounted() {
        axios.get('../../static/data.json').then((res)=>{
            console.log(res)
            this.arr = res.data;
        })
    },
}
</script>

<style scoped>
    *{
        list-style: none;
        margin: 0 auto;
    }
</style>