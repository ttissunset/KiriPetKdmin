<script setup>
import HomeAsideBar from "../components/HomeAsideBar.vue";
import HomeRightBar from "../components/HomeRightBar.vue";
</script>

<template>
  <div class="dashboard-container">
    <HomeAsideBar></HomeAsideBar>
    <div class="dashboard-main">
        <h1>仪表盘</h1>
    </div>
    <HomeRightBar></HomeRightBar>
  </div>
</template>

<style scoped>
.dashboard-container {
  display: grid;
  width: 96%;
  margin: 0 auto;
  gap: 25px;
  grid-template-columns: 192px auto 368px;
}

.dashboard-main {
  margin-top: 25px;
}
</style>
