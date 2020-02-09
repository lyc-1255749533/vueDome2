<template>
  <div>
    <div class="box">
      {{arr[arrIndex]}}
    </div>
    <div class="btn">
        <button @click="start">开始</button>
        <button @click="stop">停止</button>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            arr:[
                "徐一戈","王阳","崔鑫","崔宇惠","贾礼炜","刘云超","张凯","姚明辉","唐心航",
                "王志强","赵河江","刘硕","刘涛","张钧","范海涛","尹恒瑞","韩少楠","杨晓波",
                "胡懿","周宇飞","孙晓亮","崔红星","杨鼎","李世庚","黄川淼","辛洋","张鑫",
                "魏红月","于佳明","张鑫宇","张宇鹏","林杰","朱千禧","石帅军","冯伟","张彪",
                "宁晓洁","陈红雪","高博","张俊伟","玉米天尊","玉米大帝"
            ],
            arrIndex:-1,
            time:null
        }
    },
    methods: {
        start(){
            // console.log(111)
            this.time = setInterval(()=>{
                let random = parseInt(Math.random()*this.arr.length)
                this.arrIndex = random;
            },100)
        },
        stop(){
            clearInterval(this.time);
        }
    },
};
</script>

<style scoped>
.box {
  width: 200px;
  height: 200px;
  background: skyblue;
  margin: 50px auto;
  text-align: center;
  line-height: 200px;
}
.btn{
    text-align: center;
}
</style>