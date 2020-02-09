<template>
  <div>
    <comB @get="keyat"></comB>
    <div class="lycnav_one">
      <ul>
        <li
          v-bind:class="[index==status?'border':'']"
          v-for="(item,index) in list"
          v-bind:key="index"
          v-on:click="choice(index)"
        >{{item.text}}</li>
      </ul>
    </div>
    <div class="lycnav_top">
      <ul>
        <li>
          <p>{{name1}}</p>
          <p>
            <span class="lycspan1">置顶</span>
            <span>人民日报 231评 42分钟前</span>
          </p>
        </li>
        <li>
          <p>{{ name }}</p>
          <p>
            <span class="lycspan1">置顶</span>
            <span>新华社新闻 181评 42分钟前</span>
          </p>
        </li>
      </ul>
    </div>
    <div class="lyctet">
      <img src="../assets/img_09.png" alt />
      <p>查看更多热点事件</p>
    </div>
    <comC :chan="inpArr"></comC>
    <div class="lycfoot">
      <ul>
        <li>
          <img src="../assets/img_19.png" alt />
          <p>新闻</p>
        </li>
        <li>
          <img src="../assets/img_21.png" alt />
          <p>视频</p>
        </li>
        <li>
          <img src="../assets/img_26.png" alt />
          <p>热推</p>
        </li>
        <li>
          <img src="../assets/img_23.png" alt />
          <p>我</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import comB from './comB'
import comC from './comC'
export default {
    name:"HelloWorld",
      components:{
        comB,
        comC
    },
    data(){
        return{
             status:0,
             inp:"",
            inpArr:[],
            list:[
                {text: "要闻"},
                {text: "视频"},
                {text: "推荐"},
                {text: "娱乐"},
                {text: "北京"},
                {text: "新时"},
                {text: "+"}
            ],
            name:'钩玄提要，习近平推动金砖合作走深走实',
            name1:'习近平2019出访收官之作 时间都去哪了',
            
             list1:[
          {"con":"跨国制售冒牌箱包服装案告破 万元奢侈品成本一两百元",
            "s1":"国际新闻",
            "s2":"557评 ",
            "s3":"1小时前",
            "s4":"x",
            "img":require("../assets/img_13.png")
          },
          {"con":"林志玲大婚，言承旭热搜：得到的都是幸运，失去的才是人生",
            "s1":"国际新闻",
            "s2":"557评 ",
            "s3":"1小时前",
            "s4":"x",
            "img":require("../assets/img_16.png")
          },
           {"con":"徐一戈大婚，言承旭热搜：得到的都是幸运，失去的才是人生。",
            "s1":"国内新闻",
            "s2":"57评 ",
            "s3":"4小时前",
            "s4":"x",
            "img":require("../assets/img_13.png")
          },
      ]
        }
        
    },
     methods: {
        choice(index){
        console.log(233)
        this.status=index;
        },
        keyat(data){
            // console.log(data)

             let arr =this.list1.filter((item,index)=>{
            return item.con.includes(data)
        })
        this.inpArr =arr;
        }
  },
   computed:{
        search(data){
            // this.list=a
            // console.log(chan)
        //搜索
       
        // this.inp=""
        }
  }
  
}
</script>
<style scoped>
* { margin: 0; padding: 0; width: 100%;}
h1,h2 {font-weight: normal;}
ul { list-style-type: none; padding: 0;}
li { display: inline-block; /* margin: 0 10px; */}
a {color: #42b983;}
.lycnav_one { width: 100%; border-bottom: 1px solid #ccc;}
.lycnav_one > ul { width: 100%;height: 0.5rem;display: flex; font-size: 0.25rem;}
.lycnav_one > ul > li { width: 14%; text-align: center;}
.lycnav_top {  width: 100%;}
.lycnav_top > ul {width: 100%; height: 3.5rem; box-sizing: border-box;}
.lycnav_top > ul > li { width: 100%; border-bottom: 1px solid #ccc;}
.lycnav_top > ul > li > p { font-size: 0.38rem;  margin-top: 0.3rem;}
.lycnav_top > ul > li > p:nth-of-type(2) {font-size: 0.3rem;}
.lycnav_top > ul > li > p > .span1 { color: blue; margin-right: 0.5rem;}
.lycborder { border-bottom: 2px solid blue;}
.lyctet {width: 100%;box-sizing: border-box;border-bottom: 1px solid #ccc;}
.lyctet > img { width: 90%; margin-left: 0.5rem;}
.lyctet > p { text-align: center;  font-size: 0.3rem;}
.lycfoot { width: 100%;}
.lycfoot > ul { width: 100%; height: 2rem; display: flex; box-sizing: border-box;}
.lycfoot > ul > li {width: 25%;font: 0.3rem/150% ""; margin-left: 0.5rem;  margin-top: 0.3rem;}
.lycfoot > ul > li > img {  width: 50%;}
</style>