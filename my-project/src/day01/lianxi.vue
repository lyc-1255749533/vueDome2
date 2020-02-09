<template>
  <div>
    <div>
      <h4>用户名:</h4>
      <input type="text" placeholder="输入用户名" v-model="inp" />
      <p>您的用户名为：{{inp}}</p>
      <h4>年龄</h4>
      <input type="number" placeholder="输入年龄" v-model="age"/>
    </div>
    <div>
      <span>你喜欢爸爸还是妈妈：</span>
      <label for="father">爸爸</label>
      <input type="radio" v-model="radio1" value="father" />
      <label for="mather">妈妈</label>
      <input type="radio" v-model="radio1" value="mather" />
      <span>已选：{{radio1}}</span>
    </div>
    <div>
      <span>您喜欢的动物有:</span>
      <label for="猴子">猴子</label>
      <input type="checkbox" v-model="arr" value="猴子" />
      <label for="大象">大象</label>
      <input type="checkbox" v-model="arr" value="大象" />
      <label for="小狗">小狗</label>
      <input type="checkbox" v-model="arr" value="小狗" />
      已选:<span> {{arr.join("|")}}</span>
    </div>
    <div>
      <span>您喜欢的什么类型的异性:</span>
      <el-select v-model="value" placeholder="请选择">
        <el-option v-for="item in options" :key="item.value" :value="item.value"></el-option>
      </el-select>
      <span>已选:{{value}}</span>
    </div>
    <div>
      <span>简单介绍一下你自己(20个文字内)</span>
      <el-input
        type="textarea"
        :rows="2"
        placeholder="简单描述一下你的优缺点"
        v-model="textarea"
        maxlength="20"
      ></el-input>
      <span>你还可以输入{{20-textarea.length}}个字</span>
    </div>
    <div class="btn">
      <el-button type="primary" @click="jia()">添加</el-button>
      <el-button type="danger" @click="chongzhi()">重置</el-button>
    </div>
    <div class="tb">
      <p>用户信息表</p>
      <table cellspacing="0" cellpadding="0">
        <tr>
          <td>序号</td>
          <td>名字</td>
          <td>年龄</td>
          <td>操作</td>
        </tr>
        <tr v-for="(item,key) in list" :key="key">
          <td>{{key+1}}</td>
          <td>{{item.name}}</td>
          <td>{{item.age}}</td>
          <td><el-button type="danger" size="mini" @click="del()">删除</el-button></td>
        </tr>
      </table>
      <div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inp: "",
      radio1: "",
      arr: [],
      add: "",
      options: [
        {
          value: "成熟"
        },
        {
          value: "稳重"
        },
        {
          value: "清新"
        }
      ],
      value: "",
      textarea: "",
      list:[],
      age:''
    };
  },
  methods: {
      del(k){
          this.list.splice(k,1);
      },
      jia(){
          if(this.inp==""||this.age==""){
                alert("重新添加")
                return false
            }
            for(var i in this.list){
                if(this.list[i].name==this.name){
                    alert("重复")
                    return false
                }
            }
            var obj={name:this.inp,age:this.age}
            this.list.push(obj)
            this.inp=this.age=""
      },
      chongzhi(){
          this.$router.go(0)
      }
  },
};
</script>

<style scoped>
tr {
  width: 400px;
  height: 40px;
}
tr > td {
  width: 70px;
  height: 40px;
  border: 1px solid violet;
  text-align: center;
  line-height: 40px;
  color: skyblue;
}
.btn{
    margin-top: 20px;
}
.tb{
    margin-top: 20px;
}
</style>