<script setup>
import HomeAsideBar from "../components/HomeAsideBar.vue";
</script>

<template>
  <div class="user-container">
    <HomeAsideBar></HomeAsideBar>
    <div class="user-main">
      <h1>用户管理</h1>
      <div class="user-list">
        <h1>11</h1>
      </div>
    </div>
  </div>
</template>

<style scoped>
.user-container {
  display: grid;
  width: 96%;
  margin: 0 auto;
  gap: 25px;
  grid-template-columns: 192px auto;
}

.user-main {
  margin: 25px 0;
  border: 1px solid #000;
}

.user-main .user-list {
  gap: 25px;
}
</style>
