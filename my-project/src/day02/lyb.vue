<template>
  <div>
    <div>
      <p>用户名:</p>
      <el-input v-model="input" placeholder="请输入用户名"></el-input>
      <p>留言板:</p>
      <el-input type="textarea" :rows="2" placeholder="请输入你的留言" v-model="textarea"></el-input>
      <el-button type="primary" size="mini" @click="tj">提交</el-button>
    </div>
    <div v-for="(item,key) in arr" :key="key">
      <div class="div1">
        <span>{{item.name}}</span>
        <span>
          <el-button type="success" size="mini" class="btn" @click="del()">删除</el-button>
        </span>
      </div>
      <div class="div2">
        <span>{{item.txt}}</span>
        <span class="span">{{item.date}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      textarea: "",
      arr: [],
      txt: ""
    };
  },
  methods: {
      del(k){
        this.arr.splice(k,1)
    },
    tj() {
      if (this.input == "" || this.textarea == "") {
        alert("不能为空");
        return false;
      }
      for (var i in this.arr) {
        if (this.arr[i].name == this.name) {
          alert("重复");
          return false;
        }
      }
      let date = new Date().toLocaleString();
      var obj = { name: this.input, txt: this.textarea,date:date};
      this.arr.push(obj);
    }
  }
};
</script>

<style scoped>
.div1{
    width: 100%;
    height: 50px;
    border: 1px solid #D9EDF7;
    background: #D9EDF7;
    line-height: 50px;
}
.btn{
    float: right;
    right: 0;
    margin-top: 12px;
}
.div2{
    width: 100%;
    height: 50px;
    border: 1px solid #D9EDF7;
    line-height: 50px;
}
.span{
    float: right;
    right: 0;
}
</style>