<template>
  <div>
    <el-main>
      <el-table :data="arr">
        <el-table-column prop="name" label="店铺名" width="140"></el-table-column>
        <el-table-column prop="address" label="店铺地址" width="120"></el-table-column>
        <el-table-column prop="description" label="店铺介绍"></el-table-column>
        <el-table-column prop="tips" label="操作">
          <el-button round size="mini">编辑</el-button>
          <el-button round size="mini">添加食品</el-button>
          <el-button type="danger" round size="mini">删除</el-button>
        </el-table-column>
      </el-table>

      <el-pagination
        background
        layout="prev, pager, next,total"
        :total="1000"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pagesize"
      ></el-pagination>
    </el-main>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      arr: [],
      total: 100,
      pagesize: 1,
      currentPage: 1
    };
  },
  mounted() {
    this.myAxios(0);
  },
  methods: {
    myAxios(offset) {
      axios
        .get(
          "https://elm.cangdu.org/shopping/restaurants?latitude=39.90469&longitude=116.407173&offset=" +
            offset +
            "&limit=10"
        )
        .then(res => {
          this.arr = res.data;
          console.log(this.arr);
        });
    },

    handleSizeChange: function(size) {
      this.pagesize = size;

      console.log(this.pagesize); //每页下拉显示数据
      // this.pagesize= (this.pagesize-1)*10;
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage;
      console.log(this.currentPage); //点击第几页 1页 offet 0 2 10 3 20
      this.currentPage = (this.currentPage - 1) * 20;
      this.myAxios(this.currentPage);
    }
  }
};
</script>
<style scoped>
</style>