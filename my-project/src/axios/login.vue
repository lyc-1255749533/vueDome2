<template>
  <div class="lycbox">
    <div>
      <h1 class="lych1">elm登录管理系统</h1>
    </div>
    <div class="lyccon">
      <el-input v-model="lycuser" placeholder="用户名"></el-input>
      <el-input v-model="lycpass" placeholder="密码"></el-input>
      <el-button type="primary" @click="lycdat">登录</el-button>
      <div class="lycdiv1">
        <p v-if="errorMsg">温馨提示:{{errorMsg}}</p>
        <p>注册过的永和可凭账号密码登录</p>
      </div>
    </div>
  </div>
</template>

<script>
import axiosdemo from "./axiosdemo";
import axios from "axios";
export default {
  data() {
    return {
      lycuser: "",
      lycpass: "",
      errorMsg: "",
      errorPswMsg: ""
    };
  },
  methods: {
    lycdat() {
      //正则验证
      var reg = /^1[3456789]\d{9}$/;
      if (reg.test(this.lycuser)) {
        this.errorMsg = "";
      } else {
        this.errorMsg = "手机号不符合规则";
      }
      var regpsw = /^\d{6,10}$/;
      if (regpsw.test(this.lycpass)) {
        this.errorPswMsg = "";
      } else {
        this.errorPswMsg = "密码不符合规则";
      }
      if (this.errorMsg == "" && this.errorPswMsg == "") {
        let obj = {
            user_name:this.lycuser,
            password:this.lycpass
        }
            axios.post('https://elm.cangdu.org/admin/login',obj).then(res =>{
            console.log(res)
            if(res.data.success=='登录成功'){
                this.$router.push({path:'/sy'})
            }
        })
      }
    }
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.lycbox {
  background: #324057;
  width: 100%;
  height: 100vh;
}
.lych1 {
  color: white;
  text-align: center;
  line-height: 30vh;
}
.lyccon {
  width: 300px;
  height: 250px;
  border: 1px solid white;
  margin-left: 470px;
  background: white;
  border-radius: 5px;
  padding: 10px;
}

.el-input {
  margin-top: 20px;
  border-radius: 5px;
}
.el-button {
  width: 300px;
  height: 30px;
  margin-top: 15px;
}
.lycdiv1 > p {
  color: red;
  font-size: 0.2rem;
  margin-top: 20px;
}
</style>