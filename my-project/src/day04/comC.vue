<template>
  <div>
    <div class="lyccont">

      <ul v-for="(item,index) in list" v-bind:key="index">
        <li>
          <div>
            <p>{{ item.con }}</p>
            <p>
              <img v-bind:src="item.img" alt />
            </p>
          </div>
          <div class="lycdiv1">
            <span>{{item.s1}} {{item.s2}} {{item.s3}}</span>
            <span>{{item.s4}}</span>
          </div>
        </li>
      </ul>
            <ul v-for="(item,index) in list1" v-bind:key="index">
          <li>
            <div>
               <p>{{ item.con }}</p>
              <p><img v-bind:src="item.img" alt=""></p>
            </div>
           <div class="lycdiv1">
             <span>{{item.s1}} {{item.s2}} {{item.s3}}</span> <span>{{item.s4}}</span>
           </div>
          </li>  
      </ul>
    </div>
  </div>
</template>
<script>
import bus from './events/bus';
export default {
    props:['chan'],
    data(){
        return{
            list:[],
            val:'',
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
      ],
       
       
        }
       
    },
    mounted() {
        //组件挂载完成就开始注册一个$on绑定的事件，等待(监听)兄弟传的值
        bus.$on('get',(val)=>{
          this.val = val
            if(val){
              var vrr = this.list1.filter((item,index)=>{
                return item.con.includes(val);
              })
              this.list = vrr;
            }
            
        })
    },
}
</script>
<style scoped>
* {margin: 0;padding: 0;width: 100%;}
h1,
h2 { font-weight: normal;}
ul { list-style-type: none; padding: 0;}
li { display: inline-block; /* margin: 0 10px; */}
a { color: #42b983;}
.lyccont { width: 100%;}
.lyccont > ul > li {width: 100%;}
.lyccont > ul > li > div {display: flex;width: 100%;}
.lyccont > ul > li > div > p:nth-of-type(1) { width: 70%; font: 0.45rem/150% "";}
.lyccont > ul > li > div > p:nth-of-type(2) {width: 30%;}
.lyccont > ul > li > div > p:nth-of-type(2) img {width: 90%;}
.lyccont > ul > li > div > span {font: 0.3rem/150% ""; color: #ccc;}
.lyccont > ul > li > div > span:nth-of-type(2) { width: 10%;}
</style>