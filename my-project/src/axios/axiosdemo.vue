<template>
<div>
<el-container style="height: 90vh; border: 1px solid #eee">
<el-aside width="300px" style="background-color:rgb(50,65,87)">
<el-menu :default-openeds="['1', '1']" style="background-color:rgb(50,65,87);">
<template slot="title"><i class="el-icon-message"></i></template>
<el-menu-item index="1-1"><i class="el-icon-tickets"></i><span><router-link to="./sy">首页</router-link></span></el-menu-item>
</el-submenu>
<el-submenu index="1" >
<template slot="title"><i class="el-icon-message"></i><span>数据管理</span></template>
<el-menu-item-group>
<el-menu-item index="1-1"><span><router-link to="./yh">用户列表</router-link></span></el-menu-item>
<el-menu-item index="1-2"><span><router-link to="./sj">商家列表</router-link></span></el-menu-item>
<el-menu-item index="1-3"><span><router-link to="./sp">食品列表</router-link></span></el-menu-item>
<el-menu-item index="1-4"><span>订单列表</span></el-menu-item>
<el-menu-item index="1-5"><span>管理员列表</span></el-menu-item>
</el-menu-item-group>
</el-submenu>
</el-submenu>
<el-submenu index="2">
<template slot="title"><i class="el-icon-document"></i><span>添加数据</span></template>
<el-menu-item-group>
<el-menu-item index="2-1"><span>添加商铺</span></el-menu-item>
<el-menu-item index="2-2"><span>添加商品</span></el-menu-item>
</el-menu-item-group>
</el-submenu>
<el-submenu index="3">
<template slot="title"><i class="el-icon-star-on"></i><span>图标</span></template>
<el-menu-item-group>
<el-menu-item index="3-1"><span>用户分布</span></el-menu-item> 
</el-menu-item-group>
</el-submenu>
<el-submenu index="4">
<template slot="title"><i class="el-icon-edit"></i><span>编辑</span></template>
<el-menu-item-group>
<el-menu-item index="4-1"><span>文本编辑</span></el-menu-item> 
</el-menu-item-group>
</el-submenu>
<el-submenu index="5">
<template slot="title"><i class="el-icon-setting"></i><span>设置</span></template>
<el-menu-item-group>
<el-menu-item index="5-1"><span>管理员设置</span></el-menu-item> 
</el-menu-item-group>
</el-submenu>
<el-submenu index="6">
<template slot="title"><i class="el-icon-warning"></i><span>说明</span></template>
<el-menu-item-group>
<el-menu-item index="6-1"><span>说明</span></el-menu-item> 
</el-menu-item-group>
</el-submenu>
</el-menu>
</el-aside>
<el-container>
<el-header style="text-align: right; font-size: 12px;padding-top:20px">
<el-breadcrumb separator="/">
<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
<el-breadcrumb-item>活动管理</el-breadcrumb-item>
<el-breadcrumb-item>活动列表</el-breadcrumb-item>
</el-breadcrumb>
</el-header>
<el-main>
<router-view></router-view>
</el-main>
</el-container>
</el-container>
</div>
</template>
<script>
import axios from 'axios'
export default {
data() {
return {
// tableData: Array(20).fill(item),
arr:[],

}
},
// mounted(){
// axios.get('https://elm.cangdu.org/shopping/v2/menu/2307').then(res=>{
// this.arr=res.data.foods
// console.log(this.arr)
// })

// },

}
</script>
<style scoped>
.el-header {
background-color: #EFF2F7;
color: #333;
line-height: 100px;
}
.el-aside {
color: #324157;
}
.el-menu-item-group{
background: #1F2D3D;
}
span{
color: white;
}
</style>