<template>
  <div>
    <div class="header">
      <span class="black" @click="blak">返回</span>
      <input type="text" />
      <span class="btn">地图</span>
    </div>

    <div class="tit">
      <p>区域↓</p>
      <p>售价↓</p>
      <p>房型↓</p>
      <p>更多↓</p>
    </div>
    <div class="bor">
      <p>安选在售·预约看房</p>
      <p>佣金折扣</p>
      <p>3D看房</p>
    </div>
    <div>
      <ul class="div1">
        <li v-for="item in search">
          <div class="left">
            <img :src="item.img" alt />
          </div>
          <div class="right">
            <p class="p">{{item.con}}</p>
            <p class="p1">{{item.name}}</p>
            <p class="p1">{{item.s1}}</p>
            <p class="p1">{{item.s2}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      search: "",
      arr: [
        {
          con: "全南两居（东区住户低密度）",
          id: 1,
          name: "永定门 中海紫御公馆",
          s1: "近地铁 品质小区 低密度",
          s2: "1000万 | 2室2厅 | 92m",
          img: require("../assets/img2.png")
        },
        {
          id: 2,
          con: "新上房源 法式豪宅 低密度",
          name: "亦庄 紫禁一号院",
          s1: "安选 真实在线 环境优美",
          s2: "1900万 | 5室2厅 | 302m",
          img: require("../assets/img3.png")
        },
        {
          id: 3,
          con: "店长力荐有钥匙 低价",
          name: "西三旗 枫丹丽舍",
          s1: "安选 企业担保 南北通透 近地铁",
          s2: "900万 | 3室2厅 | 142.5m",
          img: require("../assets/img4.png")
        },
        {
          id: 4,
          con: "华萃西山 南北通透低密度",
          name: "永定 丽景长安",
          s1: "南北通透 近地铁 低密度",
          s2: "370万 | 3室2厅 | 82m",
          img: require("../assets/img2.png")
        }
      ]
    };
  },

  methods: {
    blak() {
      this.$router.push({ path: "cont" });
    }
  },
  mounted() {
    console.log(this.$route.query.item);
    this.$route.query.item;
    this.search = this.arr.filter(item => {
      return item.name.includes(this.$route.query.item);
    });
  }
};
</script>
<style scoped>
* {
  list-style: none;
  margin: 0;padding: 0;
}
.hea {
  width: 100%;
  height: 0.5rem;
}
.header {
  display: flex;
  width: 100%;
  height: 1.7rem;
  flex-wrap: wrap;
}
.black {
  width: 20%;
  text-align: center;
  font-size: 0.3rem;
  line-height: 0.5rem;
}
input {
  border: 1px solid #999;
  width: 55%;
  height: 0.7rem;
  background-color: #f1f2f7;
  display: block;
}
.btn {
  width: 20%;
  text-align: center;
  color: green;
  font-size: 20px;
  display: block;
}
.tit {
  display: flex;
  justify-content: space-around;
}
.tit > p {
  width: 60px;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
}
.bor {
  display: flex;
  justify-content: space-around;
  font-size: 0.28rem;
}
.bor > p:first-child {
  width: 38%;
}
.bor > p {
  width: 28%;
  height: 0.5rem;
  text-align: center;
  background-color: #f1efef;
}
.div1>li{
  display: flex;
  margin-top: 40px;
}
.left{
  width: 40%;
}
.left>img{
  width: 100%;
}
.right{
  width: 50%;
  font-size: 14px;
}
.right>.p1{
margin-top: 20px;
}
.right>.p{
font-weight: 900;
}
</style>