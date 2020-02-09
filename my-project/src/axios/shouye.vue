<template>
  <div>
    <p class="lycp1">数据统计</p>
    <div class="header">
      <p class="lycp2">当日数据：</p>
      <p style="background:#E5E9F2">
        {{list1}}
        <span>新增用户</span>
      </p>
      <p style="background:#E5E9F2">
        {{list2}}
        <span>新增订单</span>
      </p>
      <p style="background:#E5E9F2">
        {{list}}
        <span>新增管理员</span>
      </p>
    </div>
    <div class="header1">
      <p class="lycp3">总数据：</p>
      <p style="background:#E5E9F2">
        {{list3}}
        <span>注册用户</span>
      </p>
      <p style="background:#E5E9F2">
        {{list4}}
        <span>订单</span>
      </p>
      <p style="background:#E5E9F2">
        {{list5}}
        <span>管理员</span>
      </p>
    </div>
    <div>
      <div id="main" style="width: 800px;height:1000px;"></div>
    </div>
  </div>
</template>
<script src="../../node_modules/_echarts@4.5.0@echarts/dist/echarts.min.js"></script>
<script>
import axios from "axios";
const echarts = require("echarts");
export default {
  data() {
    return {
      list: [],
      list1: [],
      list2: [],
      list3: [],
      list4: [],
      list5: [],
      user: "",
      userlist: [],
      orderlist: [],
      adminlist: [],
      date: ""
    };
  },
  methods: {
    getDateArr() {
      var S = new Date();
      var Year = S.getFullYear();
      var Month = S.getMonth() + 1;
      var day = S.getDate();
      var arr = [];
      for (var i = 0; i < 7; i++) {
       var newDate = Year + "-" + Month + "-" + (day-i)
        arr.push(newDate)
      }
      return arr;
    }
  },
  mounted() {
    let arrDate = this.getDateArr();
    this.axios
      .get("https://elm.cangdu.org/statis/user/" + this.date + "/count")
      .then(res => {
        // console.log(res);
        this.list = res.data.count;
        // console.log(this.list)
      }),
      this.axios
        .get("https://elm.cangdu.org/statis/order/" + this.date + "/count")
        .then(res => {
          // console.log(res);
          this.list1 = res.data.count;
        }),
      this.axios
        .get("https://elm.cangdu.org/statis/admin/" + this.date + "/count")
        .then(res => {
          // console.log(res);
          this.list2 = res.data.count;
        }),
      this.axios.get("https://elm.cangdu.org/v1/users/count").then(res => {
        // console.log(res)
        this.list3 = res.data.count;
      }),
      this.axios.get("https://elm.cangdu.org/bos/orders/count").then(res => {
        //console.log(res)
        this.list4 = res.data.count;
      }),
      this.axios.get("https://elm.cangdu.org/admin/count").then(res => {
        //console.log(res)
        this.list5 = res.data.count;
      });
    let listArr = arrDate;
    //////////////////////////////////////////////////////
    let userlist = ["新注册用户"];
    for (var i = 0; i < listArr.length; i++) {
      // console.log(list[i])
      this.axios
        .get("https://elm.cangdu.org/statis/user/" + listArr[i] + "/count")
        .then(res => {
          // console.log(res.data.count);
          userlist.push(res.data.count);
          // console.log(userlist);
          myChart.setOption(option);
        });
    }
    let orderlist = ["新增订单"];
    for (var i = 0; i < listArr.length; i++) {
      // console.log(list[i])
      this.axios
        .get("https://elm.cangdu.org/statis/order/" + listArr[i] + "/count")
        .then(res => {
          // console.log(res.data.count);
          orderlist.push(res.data.count);
          // console.log(orderlist);
          myChart.setOption(option);
        });
    }
    let adminlist = ["新增管理员"];
    for (var i = 0; i < listArr.length; i++) {
      // console.log(list[i])
      this.axios
        .get("https://elm.cangdu.org/statis/admin/" + listArr[i] + "/count")
        .then(res => {
          // console.log(res.data.count);
          adminlist.push(res.data.count);
          // console.log(adlist);
          myChart.setOption(option);
        });
    }
    this.userlist = userlist;
    this.orderlist = orderlist;
    this.adminlist = adminlist;
    // console.log(this.userlist);
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("main"));

    // 指定图表的配置项和数据
    var option = {
      legend: {},
      tooltip: {},
      dataset: {
        source: [
          [
            "product",
            "2019-12-04",
            "2019-12-05",
            "2019-12-06",
            "2019-12-07",
            "2019-12-08",
            "2019-12-09",
            "2019-12-10"
          ],
          this.adminlist,
          this.userlist,
          this.orderlist
        ]
      },
      series: [
        {
          type: "pie",
          radius: 60,
          center: ["20%", "20%"],
          encode: {
            itemName: "product",
            value: "2019-12-04"
          }
        },
        {
          type: "pie",
          radius: 60,
          center: ["47%", "20%"],
          encode: {
            itemName: "product",
            value: "2019-12-05"
          }
        },
        {
          type: "pie",
          radius: 60,
          center: ["19%", "50%"],
          encode: {
            itemName: "product",
            value: "2019-12-06"
          }
        },
        {
          type: "pie",
          radius: 60,
          center: ["47%", "50%"],
          encode: {
            itemName: "product",
            value: "2019-12-07"
          }
        },
        {
          type: "pie",
          radius: 60,
          center: ["74%", "20%"],
          encode: {
            itemName: "product",
            value: "2019-12-08"
          }
        },
        {
          type: "pie",
          radius: 60,
          center: ["77%", "50%"],
          encode: {
            itemName: "product",
            value: "2019-12-09"
          }
        },
        {
          type: "pie",
          radius: 60,
          center: ["20%", "80%"],
          encode: {
            itemName: "product",
            value: "2019-12-10"
          }
        }
      ]
    };
  }
};
</script>

<style scoped>
.lycp1 {
  text-align: center;
  font-size: 40px;
}
.header > p {
  display: inline-block;
  border: 1px solid white;
  width: 150px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 5px;
}
.header1 > p {
  display: inline-block;
  margin-top: 20px;
  border: 1px solid white;
  width: 150px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 5px;
}
span {
  font-size: 10px;
}
.lycp2 {
  background: #ff9800;
  color: white;
}
.lycp3 {
  background: #20a0ff;
  color: white;
}
</style>