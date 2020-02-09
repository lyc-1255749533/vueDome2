<template>
  <div>
    <span>二手房</span>
    <input type="text" v-model="inp" class="but" />
    <span @click="goTo">取消</span>
    <ul v-if="list.length>0">
      <li v-for="item in list" @click="go(item)">
          {{item}}
        </li>
    </ul>
    <p class="p">热门搜索</p>
    <div class="ti">
        <p class="t1">低密度</p>
        <p class="t2">丰台</p>
        <p class="t3">房山区其他</p>
    </div>
    <div class="bo">
        <p class="b1">北京人气小区榜单</p>
        <p class="b2">北京捡漏房源榜</p>
    </div>
    <p class="p1"><span>历史记录</span><img src="../assets/img1.png" class="but" @click="del"/></p>
    <ul>
      <li v-for="item in historyArr">
          {{item}}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  //   created() {
  //     console.log(this.$route.query.txt);
  //     this.list = JSON.parse(localStorage.getItem("list")) || [];
  //   },
  data() {
    return {
      inp: "",
      arr:[
                { "con":"全南两居（东区住户低密度）",
                    "id":1,
                  "name":"永定门 中海紫御公馆",
                  "s1":"近地铁 品质小区 低密度",
                  "s2":"1000万 | 2室2厅 | 92m",
                  "img":require("../assets/img2.png")
                },
                { "id":2,
                  "con":"新上房源 法式豪宅 低密度",
                  "name":"亦庄 紫禁一号院",
                  "s1":"安选 真实在线 环境优美",
                  "s2":"1900万 | 5室2厅 | 302m",
                  "img":require("../assets/img3.png")
                },
                { "id":3,
                  "con":"店长力荐有钥匙 低价",
                  "name":"西三旗 枫丹丽舍",
                  "s1":"安选 企业担保 南北通透 近地铁",
                  "s2":"900万 | 3室2厅 | 142.5m",
                  "img":require("../assets/img4.png")
                },
                { "id":4,
                  "con":"华萃西山 南北通透低密度",
                  "name":"永定 丽景长安",
                  "s1":"南北通透 近地铁 低密度",
                  "s2":"370万 | 3室2厅 | 82m",
                  "img":require("../assets/img2.png")
                }
            ],
      list: [],
      historyArr:[]
    };
  },
  mounted() {
      if(localStorage.getItem('history')){
          //接收本地存储的值
          this.historyArr = JSON.parse(localStorage.getItem('history'));
      }
      var Ass = [];
      var Arr = this.historyArr
        for(var i=0;i<Arr.length;i++){
            if(Ass.indexOf(Arr[i])==-1){
              if(Arr.length>3){
                  Arr.shift(0)
              }
               Ass.push(Arr[i])
            }
        }
        this.historyArr = Ass;
        

  },
  //添加事件
  methods: {
    goTo(){
      this.$router.push({path:'todo'})
    },
      go(item){
          //本地存储
          var arr = [];
          this.historyArr.push(item);
          localStorage.setItem('history',JSON.stringify(this.historyArr));
          //跳转路由
          this.$router.push({path:'todo',query:{item}})
          console.log(item)
      },
    //点击全部删除
    del() {
      alert("确定全部删除吗");
      this.historyArr.splice(0);
      localStorage.setItem("history", JSON.stringify(this.historyArr));
    }
  },
  watch: {
    inp() {
      if (this.inp) {
        var List = this.arr.filter(item => {
          return item.name.includes(this.inp);
        });
        var arr = [];
        for(var i=0;i<List.length;i++){
            if(arr.indexOf(List[i].name)==-1){
                arr.push(List[i].name)
            }
        }
        this.list = arr;
      }
    }
  }
};
</script>
<style>
* {
  list-style: none;
}
.but {
  margin-left: 30px;
}
.ti {
  display: flex;
  justify-content: space-around;
}
.t1 {
  width: 130px;
  height: 30px;
  line-height: 30px;
  background-color: #f1efef;
}
.t2 {
  width: 130px;
  height: 30px;
  line-height: 30px;
  background-color: #f1efef;
}
.t3 {
  width: 200px;
  height: 30px;
  line-height: 30px;
  background-color: #f1efef;
}
.bo {
  display: flex;
}
.b1 {
  width: 150px;
  height: 30px;
  line-height: 30px;
  background-color: rgb(150, 231, 245);
  margin-left: 40px;
}
.b2 {
  width: 150px;
  height: 30px;
  line-height: 30px;
  background-color: rgb(150, 231, 245);
  margin-left: 20px;
}
.p1 {
  display: flex;
  justify-content: space-around;
}
</style>