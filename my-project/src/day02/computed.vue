<template>
    <div>
        <!-- {{ reverseMsg }} -->
        <!-- <input type="text" v-model="inp"> -->
        <!-- {{ inpNew }} -->
        {{reMsg()}}
        <input type="text" v-model="inp">
        <h1>{{inp}}</h1>
    </div>
</template>

<script>
export default {
    data(){
        return{
            inp:'',
            Arr:[
                '草',
                '艹',
                '你大爷的',
                '妈',
                '爸',
                '傻逼',
                'SB',
                'sb',
                '爷爷',
                '孙子',
                '逼'
            ],
            inpNew:''
        }
    },
    methods: {
        reMsg(){
            // return this.inp.toLowerCase();
            for(let i = 0; i<this.Arr.length;i++){
                    this.inp = this.inp.replace(this.Arr[i],"*",repeat(this.Arr[i].length))
                }
        }
    },
   
    // 计算属性  根据一个值得变化，然后计算出新的结果
    computed:{
        search(){
            var arr = this.Arr.filter((item,index)=>{
                return item.includes(this.inp);
            })
            this.Arr = arr;
            this.inp=''
        }
    },
    watch:{//监听inp值得变化
        inp(n,o){//第一个数是新值  第二个数是旧值
        console.log(n,o)
            this.inpNew = this.inp.toLowerCase();
        }
    }
}
</script>

<style scoped>

</style>