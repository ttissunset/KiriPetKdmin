<script setup></script>

<template>
  <div class="right-section">
    <div class="nav">
      <button id="menu-btn">
        <span class="material-icons-sharp"> menu </span>
      </button>

      <div class="profile">
        <div class="info">
          <p>Hey, <b>Kiri</b></p>
          <small class="text-muted">Admin</small>
        </div>
        <div class="profile-photo">
          <img src="../assets/images/profile-1.jpg" />
        </div>
      </div>
    </div>

    <div class="user-profile">
      <div class="logo">
        <img src="../assets/images/logo.png" />
        <h2 style="color: var(--deongaree)">KiriPet</h2>
        <p>致力成为最好宠物百科平台</p>
      </div>
    </div>

    <div class="reminders">
      <div class="header">
        <h2>注意事项</h2>
        <span class="material-icons-sharp"> notifications_none </span>
      </div>

      <div class="notification">
        <div class="icon">
          <span class="material-icons-sharp"> volume_up </span>
        </div>
        <div class="content">
          <div class="info">
            <h3>插上爱憎</h3>
            <small class="text_muted"> 08:00 AM - 12:00 PM </small>
          </div>
          <span class="material-icons-sharp"> more_vert </span>
        </div>
      </div>

      <div class="notification deactive">
        <div class="icon">
          <span class="material-icons-sharp"> edit </span>
        </div>
        <div class="content">
          <div class="info">
            <h3>增删改查</h3>
            <small class="text_muted"> 08:00 AM - 12:00 PM </small>
          </div>
          <span class="material-icons-sharp"> more_vert </span>
        </div>
      </div>

      <div class="notification add-reminder">
        <div>
          <span class="material-icons-sharp"> add </span>
          <h3>新增事项</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.right-section {
  margin-top: 22px;
}

.right-section .nav {
  display: flex;
  justify-content: end;
  gap: 32px;
}

.right-section .nav button {
  display: none;
}

.right-section .nav .profile {
  display: flex;
  gap: 32px;
  text-align: right;
}

.right-section .nav .profile .profile-photo {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  overflow: hidden;
}

.right-section .user-profile {
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 16px;
  background-color: var(--color-white);
  padding: var(--card-padding);
  border-radius: var(--card-border-radius);
  box-shadow: var(--box-shadow);
  cursor: pointer;
  transition: all 0.3s ease;
}

.right-section .user-profile:hover {
  box-shadow: none;
}

.right-section .user-profile img {
  width: 176px;
  height: auto;
  margin-bottom: 12px;
}

.right-section .user-profile h2 {
  margin-bottom: 3px;
}

.right-section .reminders {
  margin-top: 32px;
}

.right-section .reminders .header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.right-section .reminders .header span {
  padding: 10px;
  box-shadow: var(--box-shadow);
  background-color: var(--color-white);
  border-radius: 50%;
}

.right-section .reminders .notification {
  background-color: var(--color-white);
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 11px;
  padding: 22px var(--card-padding);
  border-radius: var(--border-radius-2);
  box-shadow: var(--box-shadow);
  cursor: pointer;
  transition: all 0.3s ease;
}

.right-section .reminders .notification:hover {
  box-shadow: none;
}

.right-section .reminders .notification .content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  width: 100%;
}

.right-section .reminders .notification .icon {
  padding: 10px;
  color: var(--color-white);
  background-color: var(--color-success);
  border-radius: 20%;
  display: flex;
}

.right-section .reminders .notification.deactive .icon {
  background-color: var(--color-danger);
}

.right-section .reminders .add-reminder {
  background-color: var(--color-white);
  border: 2px dashed var(--color-primary);
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.right-section .reminders .add-reminder:hover {
  background-color: var(--color-primary);
  color: white;
}

.right-section .reminders .add-reminder div {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
