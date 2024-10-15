<script setup>
import HomeAsideBar from "../components/HomeAsideBar.vue";
</script>

<template>
  <div class="analyse-container">
    <HomeAsideBar></HomeAsideBar>
    <div class="analyse-main">
      <h1>订单管理</h1>
    </div>
  </div>
</template>

<style scoped>
.analyse-container {
  display: grid;
  width: 96%;
  margin: 0 auto;
  gap: 25px;
  grid-template-columns: 192px auto ;
}

.analyse-main {
  margin: 25px 0;
  border: 1px solid #000;
}
</style>