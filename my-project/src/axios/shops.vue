<template>
  <div>
    <el-main>
      <el-table :data="arr.slice((currentPage-1)*pagesize,currentPage*pagesize)">
        <el-table-column prop="name" label="食品名称" width="140"></el-table-column>
        <el-table-column prop="description" label="食品介绍" width="120"></el-table-column>
        <el-table-column prop="rating" label="评分"></el-table-column>
        <el-table-column prop="tips" label="操作">
          <el-button round size="mini">编辑</el-button>
          <el-button type="danger" round size="mini">删除</el-button>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next,total"
        :total="arr.length"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 20, 40]"
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
      total: 0,
      pagesize: 10,
      currentPage: 1
    };
  },
  mounted() {
    axios
      .get(
        "https://elm.cangdu.org/shopping/v2/foods?offset=0&limit=1000&restaurant_id=undefined"
      )
      .then(res => {
        this.arr = res.data;
        console.log(this.arr);
      });
  },
  methods: {
    handleSizeChange: function(size) {
      this.pagesize = size;
      console.log(this.pagesize); //每页下拉显示数据
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage;
      console.log(this.currentPage); //点击第几页
      axios
        .get(
          "https://elm.cangdu.org/shopping/v2/foods?offset='+this.currentPage+'&limit=1000&restaurant_id=undefined"
        )
        .then(res => {
          this.arr = res.data;
          console.log(this.arr);
        });
    }
  }
};
</script>
<style scoped>
</style>