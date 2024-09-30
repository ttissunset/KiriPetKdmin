<script setup></script>

<template>
  <div class="aside-bar">
    <div class="toggle-bar">
      <div class="logo">
        <img src="../assets/images/logo.png" />
        <h2>Kiri<span class="danger">Admin</span></h2>
      </div>
      <div class="close" id="close-btn">
        <span class="material-icons-sharp">close</span>
      </div>
    </div>
    <div class="sidebar">
      <a href="#">
        <span class="material-icons-sharp">dashboard</span>
        <div>主页</div>
      </a>
      <a href="#">
        <span class="material-icons-sharp">person_outline</span>
        <div>用户</div>
      </a>
      <a href="#" class="active">
        <span class="material-icons-sharp">insights</span>
        <div>分析</div>
      </a>
      <a href="#">
        <span class="material-icons-sharp">mail_outline</span>
        <div>消息</div>
        <span class="message-count">27</span>
      </a>
      <a href="#">
        <span class="material-icons-sharp">settings</span>
        <div>设置</div>
      </a>
      <a href="#">
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

@media screen and (max-width: 1200px) {
  .aside-bar .logo h2 {
    display: none;
  }

  .aside-bar .sidebar div {
    display: none;
  }

  .aside-bar .sidebar a {
    width: 88px;
  }

  .aside-bar .sidebar a:last-child {
    position: relative;
    margin-top: 26px;
  }
}

@media screen and (max-width: 768px) {
  .aside-bar {
    position: fixed;
    background-color: var(--color-white);
    width: 240px;
    z-index: 3;
    box-shadow: 1rem 3rem 4rem var(--color-light);
    height: 100vh;
    left: -100%;
    display: none;
    animation: showMenu 0.4s ease forwards;
  }

  @keyframes showMenu {
    to {
      left: 0;
    }
  }

  .aside-bar .logo {
    margin-left: 1rem;
  }

  .aside-bar .logo h2 {
    display: inline;
  }

  .aside-bar .sidebar div {
    display: inline;
  }

  .aside-bar .sidebar a {
    width: 100%;
    height:48px;
  }

  .aside-bar .sidebar a:last-child {
    position: absolute;
    bottom: 80px;
  }

  .aside-bar .toggle .close {
    display: inline-block;
    cursor: pointer;
  }
}
</style>
