<template>
  <div>
    <div class="header">
      <p>我的</p>
    </div>
    <hr />
    <div class="con">
      <div class="lt">
        <img src="../../static/img11.png" alt width="100" height="100" />
      </div>
      <div v-if="!this.$store.state.user.username" class="rg">
        <p class="p1" @click="deng">登录/注册</p>
      </div>
      <div class="rg" v-else>
        <p class="p1">{{this.$store.state.user.username}}</p>
        <p class="p2">暂无绑定手机号</p>
      </div>
    </div>
    <div>
      <ul>
        <li class="li1">
          <p>
            <span>0.00</span>元
          </p>
          <p>我的余额</p>
        </li>
        <li class="li2">
          <p>
            <span>3</span>个
          </p>
          <p>我的优惠</p>
        </li>
        <li class="li3">
          <p>
            <span>0</span>分
          </p>
          <p>我的积分</p>
        </li>
      </ul>
    </div>
    <div>
      <ol class="ol1">
        <li>
          我的订单
          <span>></span>
        </li>
        <li>
          商城积分
          <span>></span>
        </li>
        <li>
          饿了么会员卡
          <span>></span>
        </li>
      </ol>
    </div>
    <div>
      <ol class="ol2">
        <li>
          服务中心
          <span>></span>
        </li>
        <li>
          下载饿了么APP
          <span>></span>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        
    };
  },
  computed: {
    user() {
      // return this.$store.state.user;
    }
  },
  methods: {
    deng() {
      this.$router.push({ path: "/lg" });
    }
  },
  // mounted() {
  //    let arr = window.localStorage.getItem('list1')
  //    if(arr){
  //        this.cc = true;
  //        this.newArr = arr;
  //    }
  // }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.header {
  background: #3893e4;
  width: 100%;
  height: 0.71rem;
  display: flex;
  line-height: 0.71rem;
}
.header > p {
  color: white;
  font-size: 0.4rem;
  text-align: center;
  width: 100%;
}
.con {
  background: #3594e4;
  width: 100%;
  height: 2rem;
}
.p1 {
  font-size: 0.3rem;
}
.p2 {
  font-size: 0.2rem;
}
.lt {
  width: 1rem;
  height: 1rem;
}
.rg {
  flex-wrap: wrap;
  margin-left: 2rem;
  margin-top: -0.2rem;
  color: white;
}
ul {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.li1 {
  width: 32.8%;
  border: 1px solid #ccc;
  height: 2rem;
  text-align: center;
}
.li1 > p:nth-of-type(1) {
  font-size: 0.3rem;
  margin-top: 0.5rem;
}
.li1 > p:nth-of-type(1) > span {
  font-size: 0.4rem;
  color: orange;
}
.li1 > p:nth-of-type(2) {
  font-size: 0.3rem;
}
.li2 {
  width: 32.8%;
  border: 1px solid #ccc;
  height: 2rem;
  text-align: center;
}
.li2 > p:nth-of-type(1) {
  font-size: 0.3rem;
  margin-top: 0.5rem;
}
.li2 > p:nth-of-type(1) > span {
  font-size: 0.4rem;
  color: red;
}
.li2 > p:nth-of-type(2) {
  font-size: 0.3rem;
}
.li3 {
  width: 32.8%;
  border: 1px solid #ccc;
  height: 2rem;
  text-align: center;
}
.li3 > p:nth-of-type(1) {
  font-size: 0.3rem;
  margin-top: 0.5rem;
}
.li3 > p:nth-of-type(1) > span {
  font-size: 0.4rem;
  color: green;
}
.li3 > p:nth-of-type(2) {
  font-size: 0.3rem;
}
.ol1 {
  width: 100%;
}
.ol1 > li {
  width: 100%;
  height: 0.7rem;
  font-size: 0.3rem;
  border: 1px solid #ccc;
  line-height: 0.7rem;
}
.ol1 > li > span {
  float: right;
}
.ol2 {
  width: 100%;
  margin-top: 0.3rem;
}
.ol2 > li {
  width: 100%;
  height: 0.7rem;
  font-size: 0.3rem;
  border: 1px solid #ccc;
  line-height: 0.7rem;
}
.ol2 > li > span {
  float: right;
}
</style>