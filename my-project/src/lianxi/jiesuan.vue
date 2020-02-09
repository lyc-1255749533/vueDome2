<template>
    <div>
        <h1>购物清单</h1>
        <div class="boy">
            <ul>
                <li v-for="(item,index) in drr">
                    <div>
                        <input type="checkbox" @click="chec(index)" v-model="item.check" >
                    </div>
                    <div>
                        <img :src=item.img alt=""></div>
                    <div>
                        <p>{{item.p1}}</p>
                        <p>￥{{item.p2}}</p>
                        <p>{{item.p3}}</p>
                    </div>
                    <div>
                        <button @click="add(index)">+</button>
                        <p>{{item.inp}}</p>
                        <button @click="jian(index)">-</button>
                    </div>
                </li>
            </ul>
        </div>
        <div>
        <span><input type="checkbox" @click="checkAll" v-model="Allchecked">全选</span>
        <span>￥{{this.$store.getters.getZ}}</span>
        <span>去结算{{this.$store.getters.getHe}}</span></div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            drr:[],
            Allchecked:false,
            
        }
    },
    mounted(){
      console.log(this.$store.state.list.arr)
      this.drr=this.$store.state.list.arr
      console.log(this.$store.getters.getZ)
      this.drr=this.drr.slice(0)  
    },
    
    methods:{
        add(index){
            this.$store.commit('add',index)
             this.drr=this.drr.slice(0)
        },
        jian(index){
            this.$store.commit('jian',index)
             this.drr=this.drr.slice(0)
        },
        chec(index){
             this.$store.commit('chec',index)
           this.drr=this.drr.slice(0)
        },
        checkAll(){
            this.$store.commit('checkAll',this.Allchecked)
            this.Allchecked=!this.Allchecked;
        }

    }
}
</script>
<style scoped>
h1{
    font-size: 0.3rem;
    text-align: center;
    width: 100%;
}
.boy>ul>li{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    height: 2rem;
    margin-top: 0.2rem;
}
.boy>ul>li>div:nth-of-type(1){
    width:10%;
    height: 100%;
    display: block;
}
.boy>ul>li>div:nth-of-type(2){
    width: 20%;
    height: 2rem;
    display: block;
}
.boy>ul>li>div:nth-of-type(2)>img{
    width: 100%;
    height: 100%;
    display: block;
}
.boy>ul>li>div:nth-of-type(3){
    width: 60%;
    height: 2rem;
    display: block;
    font-size: 0.3rem;
    line-height: 0.6rem;
}
.boy>ul>li>div:nth-of-type(4){
    width: 10%;
    height: 2rem;
    display: block;
}
.boy>ul>li>div:nth-of-type(4)>button{
    display: block;
}
.boy>ul>li>div:nth-of-type(4)>p{
    font-size:0.3rem; 
    display: block;
}
span{
    font-size: 0.5rem;
}
</style>