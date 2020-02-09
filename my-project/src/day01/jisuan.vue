<template>
  <div>
    <tr>
        <td><input type="checkbox" @click="checkAll" v-model="inp">全选</td>
      <td>序号</td>
      <td>名称</td>
      <td>数量</td>
      <td>价格</td>
      <td>小计</td>
      <td>操作</td>
    </tr>
    <tr v-for="(item,key) in list" :key="key">
      <td>
        <input type="checkbox" @click="chec(index)" v-model="item.check"/>
      </td>
      <td>{{key+1}}</td>
      <td>{{item.name}}</td>
      <td>
        <button @click="jia(key)">+</button>
        {{item.number}}
        <button @click="jian(key)">-</button>
      </td>
      <td>{{item.jiage}}</td>
      <td>{{item.number*item.jiage}}</td>
      <td>
        <button @click="del(key)">删除</button>
      </td>
    </tr>
    <p>总价格为:{{sum}}</p>
  </div>
</template>


<script>
export default {
  data() {
    return {
      list: [
        {
          name: "苹果",
          number: 1,
          jiage: 5
        },
        {
          name: "凤梨",
          number: 1,
          jiage: 6
        },
        {
          name: "西瓜",
          number: 1,
          jiage: 7
        }
      ],
      sum: 0,
      inp:''
    };
  },
  methods: {
    del(key) {
      this.list.splice(key, 1);
    },
    jia(k) {
      this.list[k].number++;
    },
    jian(i) {
      this.list[i].number--;
      if (this.list[i].number < 1) {
        this.list[i].number = 1;
      }
    },
    checkAll(check){
        if(check == false){
            this.list.forEach(item => {
                item.check = true
            });
        }else{
             this.list.forEach(item =>{
                 item.check = false
             })
        }
    }
  },
  watch: {
    list: {
      handler(val) {
        this.sum = 0;
        for (var i in val) {
          this.sum += val[i].number * val[i].jiage;
        }
      },
      deep: true
    }
  }
};
</script>


<style scoped>
* {
  font-size: 15px;
}
td {
  width: 50px;
  text-align: center;
}
</style>