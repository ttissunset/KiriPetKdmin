<script setup>
import { onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { inject, ref } from "vue";
const router = useRouter();
const route = useRoute();

const activeRoute = ref(route.path); // 默认设置为当前路由

// 跳转路由页面
const navigateTo = (route) => {
  activeRoute.value = route;
  router.push(route);
};

// 判断路由是否正确，并添加active类
const isActive = (route) => activeRoute.value === route;

// 在组件挂载时设置默认激活路由
onMounted(() => {
  activeRoute.value = route.path; // 确保根据当前路由设置 activeRoute
});
</script>

<template>
  <div class="aside-bar">
    <div class="toggle-bar">
      <div class="logo">
        <img src="../assets/images/logo.png" />
        <h2>Kiri<span style="color: var(--deongaree)">Admin</span></h2>
      </div>
      <div class="close" id="close-btn">
        <span class="material-icons-sharp">close</span>
      </div>
    </div>
    <div class="sidebar">
      <a
        :class="{ active: isActive('/dashboard') }"
        @click="navigateTo('/dashboard')"
      >
        <span class="material-icons-sharp">dashboard</span>
        <div>仪表盘</div>
      </a>
      <a :class="{ active: isActive('/user') }" @click="navigateTo('/user')">
        <span class="material-icons-sharp">person_outline</span>
        <div>用户</div>
      </a>
      <a
        :class="{ active: isActive('/analyse') }"
        @click="navigateTo('/analyse')"
      >
        <span class="material-icons-sharp">insights</span>
        <div>分析</div>
      </a>
      <a
        :class="{ active: isActive('/message') }"
        @click="navigateTo('/message')"
      >
        <span class="material-icons-sharp">mail_outline</span>
        <div>消息</div>
        <span class="message-count">27</span>
      </a>
      <a
        :class="{ active: isActive('/setting') }"
        @click="navigateTo('/setting')"
      >
        <span class="material-icons-sharp">settings</span>
        <div>设置</div>
      </a>
      <a
        :class="{ active: isActive('/change') }"
        @click="navigateTo('/change')"
      >
        <span class="material-icons-sharp">add</span>
        <div>切换用户</div>
      </a>
      <a href="#">
        <span class="material-icons-sharp">logout</span>
        <div>退出登录</div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.aside-bar {
  height: 100vh;
}

.aside-bar .toggle-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;
}

.aside-bar .toggle-bar .logo {
  display: flex;
  gap: 8px;
}

.aside-bar .toggle-bar .logo img {
  width: 30px;
  height: 30px;
}

.aside-bar .toggle-bar .close {
  padding-right: 14px;
  display: none;
}

.aside-bar .sidebar {
  display: flex;
  flex-direction: column;
  background-color: var(--color-white);
  box-shadow: var(--box-shadow);
  border-radius: 15px;
  height: 88vh;
  position: relative;
  top: 24px;
  transition: all 0.3s ease;
}

.aside-bar .sidebar:hover {
  box-shadow: none;
}

.aside-bar .sidebar a {
  cursor: pointer;
  display: flex;
  align-items: center;
  color: var(--color-info-dark);
  font-size: 18px;
  font-weight: 600;
  height: 60px;
  gap: 16px;
  position: relative;
  margin-left: 30px;
  transition: all 0.3s ease;
}

.aside-bar .sidebar a span {
  font-size: 25px;
  transition: all 0.3s ease;
}

.aside-bar .sidebar a:last-child {
  position: absolute;
  bottom: 32px;
  width: 100%;
}

.aside-bar .sidebar a.active {
  width: 100%;
  color: var(--color-primary);
  background-color: var(--color-light);
  margin-left: 0;
}

.aside-bar .sidebar a.active::before {
  content: "";
  width: 5px;
  height: 18px;
  background-color: var(--color-primary);
}

.aside-bar .sidebar a.active span {
  color: var(--color-primary);
  margin-left: calc(1rem - 3px);
}

.aside-bar .sidebar a:hover {
  color: var(--color-primary);
}

.aside-bar .sidebar a:hover span {
  margin-left: 8px;
}

.aside-bar .sidebar .message-count {
  background-color: var(--color-danger);
  padding: 2px 6px;
  color: var(--color-white);
  font-size: 11px;
  border-radius: var(--border-radius-1);
}
</style>
