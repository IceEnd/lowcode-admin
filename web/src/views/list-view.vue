<!-- 活动列表视图 -->
<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="item in breadCrumbData" :key="item.text">
        {{ item.text }}
      </el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 活动列表 -->
    <act-list />
  </div>
</template>

<script lang="ts" setup>
import ActList from '@src/components/act-list.vue';

const breadCrumbData = [
  {
    text: '首页',
  },
  {
    text: `活动列表`,
  },
];
</script>

<style scoped>
.el-breadcrumb {
  margin-bottom: 20px;
}
</style>
