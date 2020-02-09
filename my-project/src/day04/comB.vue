<template>
    <div>
        <div class="lycapp">
             <img src="../assets/img_01.png">
        </div>
        <div class='lycnav'>
            <ul>
                <li> <img src="../assets/img_04.png" alt=""></li>
                <li> <input type="text" placeholder="热搜" v-model="inp"  @keydown.13="sear"> </li>
                <li> <img src="../assets/img_06.png" alt=""></li>      
            </ul>
        </div>

    </div>
</template>
<script>
import bus from './events/bus';
export default {
    data(){
        return{
            inp:"",
        }
    },
    methods:{
        sear(){
            bus.$emit('get',this.inp)
        }
    }
}
</script>
<style scoped>
*{ margin: 0;padding: 0;width: 100%;}
ul { list-style-type: none; padding: 0;}
li { display: inline-block; /* margin: 0 10px; */}
a { color: #42b983;}
img{vertical-align: top;}
.lycapp{width: 100%;height: 0.9rem;}
.lycapp>img{width: 100%;}
.lycnav{ width: 100%;}
.lycnav>ul{ width: 100%; height: 1.5rem;display: flex;box-sizing: border-box;}
.lycnav>ul>li{ width: 20%;}
.lycnav>ul>li:nth-of-type(2){ width: 60%;}
.lycnav>ul>li:nth-of-type(2)>input{ width: 80%;height:0.5rem;border-radius:16px;}
.lycnav>li>img{ width: 80%;}

</style>