<template>
  <div class="hello">
    <div class="header">
      <img src="../assets/img_04.png" alt="" class="img_left">
      <input type="text" placeholder="热搜：跨国假LV案告破" class="txt" v-model="inp" v-on:keyup.enter="search" >
      <img src="../assets/img_06.png" alt="" class="img_right">
      <!-- <img src="../assets/img_09.png" alt="" class="so"> -->
    </div>
    <div class="nav">
      <ul>
        <li :class="[index == status  ? 'border' : '']" v-for="(item,index) in list" :key="index" @click="choice(index)">
                {{item.text}}
                </li>
      </ul>
    </div>
    <div class="lo">
      <p class="T">习近平2019出访收官之作  时间都去哪了</p>
      <div>
        <span class="s1">{{span1}}</span>
      <span>{{span2}}</span>
      <span>{{span3}}</span>
      <span>{{span4}}</span>
      </div>
    </div>
    <div class="lo">
      <p class="T">钩玄提要，习近平推动金砖合作走深走实</p>
      <div>
        <span class="s1">{{span1}}</span>
      <span>{{span2}}</span>
      <span>{{span3}}</span>
      <span>{{span4}}</span>
      </div>
    </div>
    <div>
      <img src="../assets/img_14.png" alt="" class="tp">
      <p class="p">查看更多热点事件</p>
    </div>
    
    <div class="boy">
      <ul>
        <li v-for="(item,index) in ass" :key="index">
          <div class="left">
            <p>{{item.p}}</p>
            <span>{{item.s1}}</span>
            <span>{{item.s2}}</span>
            <span>{{item.s3}}</span>
          </div>
          <div class="right">
              <img v-bind:src="item.img" alt="">
          </div>
        </li>
      </ul>
    </div>
    <div class="footer">
      <ul>
        <li>
          <img src="../assets/img_27.png" alt="">
        </li>
         <li>
          <img src="../assets/img_24.png" alt="">
        </li>
         <li>
          <img src="../assets/img_22.png" alt="">
        </li>
         <li>
          <img src="../assets/img_27.png" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      status: 0,
            list: [
                    { text: "要闻" },
                    { text: "视频" },
                    { text: "推荐" },
                    { text: "娱乐" },
                    { text: "北京" },
                    { text: "新时代" }
                    ],
                    span1:"置顶",
                    span2:"人民日报",
                    span3:"231评",
                    span4:"42分钟前",
                    list1:[
                      {"p":"跨国制售假冒品牌箱包服饰案告破  万元奢侈品成本一两百元",
                      "s1":"国际在线",
                      "s2":"167评",
                      "s3":"2小时前",
                      "img":require('../assets/img_18.png')
                      },
                      {"p":"林志玲结婚，言承旭上热搜：得到的都是幸运，失去的才是人生",
                      "s1":"国际在线",
                      "s2":"167评",
                      "s3":"2小时前",
                      "img":require('../assets/img_18.png')},
                      {"p":"王阳结婚，言承旭上热搜：得到的都是幸运，失去的才是人生",
                      "s1":"国际在线",
                      "s2":"167评",
                      "s3":"2小时前",
                      "img":require('../assets/img_18.png')},
                      {"p":"徐一戈结婚，言承旭上热搜：得到的都是幸运，失去的才是人生",
                      "s1":"国际在线",
                      "s2":"167评",
                      "s3":"2小时前",
                      "img":require('../assets/img_18.png')},
                    ],
                    ass:[{"p":"跨国制售假冒品牌箱包服饰案告破  万元奢侈品成本一两百元",
                      "s1":"国际在线",
                      "s2":"167评",
                      "s3":"2小时前",
                      "img":require('../assets/img_18.png')
                      }],
                    inp:'',
                    list2:[
                      {"p":"跨国制售假冒品牌箱包服饰案告破  万元奢侈品成本一两百元",
                      "s1":"国际在线",
                      "s2":"167评",
                      "s3":"2小时前",
                      "img":require('../assets/img_18.png')
                      },
                      {"p":"林志玲结婚，言承旭上热搜：得到的都是幸运，失去的才是人生",
                      "s1":"国际在线",
                      "s2":"167评",
                      "s3":"2小时前",
                      "img":require('../assets/img_18.png')},
                      {"p":"王阳结婚，言承旭上热搜：得到的都是幸运，失去的才是人生",
                      "s1":"国际在线",
                      "s2":"167评",
                      "s3":"2小时前",
                      "img":require('../assets/img_18.png')},
                      {"p":"徐一戈结婚，言承旭上热搜：得到的都是幸运，失去的才是人生",
                      "s1":"国际在线",
                      "s2":"167评",
                      "s3":"2小时前",
                      "img":require('../assets/img_18.png')},
                    ]

    }
  },
  methods:{
     choice(index) {
       console.log(111)
         this.status = index;
      }
  },
  computed: {
    search(){
      console.log(this.inp)
      var arr = this.list1.filter((item,index)=>{
        return item.p.includes(this.inp);
      })
      console.log(arr)
      this.ass = arr;
      this.inp = ""
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

.header{
  width: 100%;
  height: 1rem;;
  display: flex;
  justify-content: space-between;
  position: relative;
}
.txt{
  width: 75%;
  height: 0.6rem;
  border: none;
  background: #f1f7f7;
  box-sizing: border-box;
  padding-left: 0.65rem;
  border-radius:50px; 
  display: block;
  margin-top: 0.08rem;
  outline: none;
}
.img_left{
  width: 0.5rem;
  height: 0.5rem;
  display: block;
  margin-top: 0.03rem;
  margin-left: 0.25rem;
}
.img_right{
  width: 0.55rem;
  height: 0.55rem;
  display: block;
  margin-top: 0.03rem;
  margin-right: 0.25rem;
}
.so{
  width: 18px;
  height: 18px;
  position: absolute;
  top: 15px;
  left: 50px;
}
.nav>ul{
  width: 100%;
  height: 0.6rem;
  display: flex;
  font-size: 0.28rem;
}
.nav>ul>li{
  flex: 1;
  text-align: center;
  line-height: 0.6rem;
}

.lo{
  width: 100%;
  margin-top: 0.2rem;
  height: 1.6rem;
  display: flex;
  flex-direction: column;
  border-bottom:1px solid #eee; 
}
.lo>.T{
  font-size: 0.3rem;
  margin-left: 0.3rem;
  width: 100%;
  height: 40%;
  display: block;
}
.lo>div{
  width: 100%;
  height: 40%;
  display: flex;
}
.lo>div>span{
  font-size: 0.18rem;
  color: #7c7e7f;
  display: block;
  margin-left: 0.3rem;
  
}
.border{
  border-bottom:2px solid blue; 
}
.lo>div>.s1{
  color: blue;
  margin-left: 0.35rem;
}
body{
  background: white;
}
.tp{
  width:96%;
  height:3.73rem;
  border-radius:5px;
  display:block;
  margin: 0 auto;
}
.p{
  text-align: center;
  font-size: 0.25rem;
}
.boy>ul>li{
  width: 100%;
  display: flex;
  margin-top: 0.2rem;
}
.boy>ul>li .left{
  width: 65%;
}
.boy>ul>li .left>p{
  font-size: 0.37rem;
  margin: 0;
}
.boy>ul>li .left>span{
  font-size: 0.2rem;
  float: left;
  color: #7c7e7f;
  margin-left: 0.2rem;
}
.boy>ul>li .right{
  width: 35%;
}
.boy>ul>li .right>img{
  width: 100%;
}
.footer>ul{
  width:100%;
  display:flex;

}
.footer>ul>li{

  width:25%;
}
.footer>ul>li>img{
  width:80%;
  display:block;
  margin:0 auto;
}
</style>
