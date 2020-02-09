<template>
  <div>
    <div class="header">
      <p class="p1">密码登录</p>
    </div>
    <div class="con">
      <input type="text" v-model="user" placeholder="账号" />
      <input :type="passl" v-model="pass" placeholder="密码" />
      <button @click="change">切换</button>
      <input type="text" placeholder="验证码" />
    </div>
    <div class="div1">
      <p v-if="errorMsg">温馨提示:{{errorMsg}}</p>
      <p>注册过的永和可凭账号密码登录</p>
    </div>
    <button class="btn" @click="dat">登录</button>
  </div>
</template>

<script>
import my from "./my";
export default {
  components: {
    my
  },
  data() {
    return {
      passl: "password",
      user: "",
      pass: "",
      errorMsg: "",
      errorPswMsg: "",
    };
  },
  methods: {
    change() {
      if (this.passl == "password") {
        this.passl = "text";
      } else {
        this.passl = "password";
      }
    },
    dat() {
      //正则验证
      var reg = /^1[3456789]\d{9}$/;
      if (reg.test(this.user)) {
        this.errorMsg = "";
      } else {
        this.errorMsg = "手机号不符合规则";
      }
      var regpsw = /^\d{6,10}$/;
      if (regpsw.test(this.pass)) {
        this.errorPswMsg = "";
      } else {
        this.errorPswMsg = "密码不符合规则";
      }
      if (this.errorMsg == "" && this.errorPswMsg == "") {
        this.$store.commit("user/login",[this.user,this.pass]);
        this.$router.push({ path: "/my" });
      }
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.header {
  width: 100%;
  height: 0.71rem;
  display: flex;
  background: #3893e4;
}
.p1 {
  width: 100%;
  font-size: 0.5rem;
  text-align: center;
  color: white;
}
.con {
  width: 100%;
  margin-top: 0.1rem;
}
.con > input {
  display: block;
  border: none;
  border-bottom: 1px solid #ccc;
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 0.3rem;
}
.btn {
  background: #53d76a;
  display: block;
  border: none;
  width: 100%;
  height: 0.74rem;
  color: white;
}
.div1 > p {
  color: red;
  font-size: 0.2rem;
}
.con > button {
  border: none;
  position: absolute;
  right: 0;
  top: 1.9rem;
}
</style>