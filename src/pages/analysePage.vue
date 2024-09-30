<script setup>
import HomeAsideBar from "../components/HomeAsideBar.vue";
</script>

<template>
  <div class="analyse-container">
    <HomeAsideBar></HomeAsideBar>
    <div class="analyse-main">
      <h1>数据分析</h1>
      <div class="analyse">
        <div class="sales">
          <div class="status">
            <div class="info">
              <h3>Total Sales</h3>
              <h1>$65,204</h1>
            </div>
            <div class="progresss">
              <svg>
                <circle cx="38" cy="38" r="36"></circle>
              </svg>
              <div class="percentage">
                <p>+81%</p>
              </div>
            </div>
          </div>
        </div>
        <div class="visits">
          <div class="status">
            <div class="info">
              <h3>Site Visit</h3>
              <h1>24,981</h1>
            </div>
            <div class="progresss">
              <svg>
                <circle cx="38" cy="38" r="36"></circle>
              </svg>
              <div class="percentage">
                <p>-48%</p>
              </div>
            </div>
          </div>
        </div>
        <div class="searches">
          <div class="status">
            <div class="info">
              <h3>Searches</h3>
              <h1>14,147</h1>
            </div>
            <div class="progresss">
              <svg>
                <circle cx="38" cy="38" r="36"></circle>
              </svg>
              <div class="percentage">
                <p>+21%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="new-users">
        <h2>新注册用户</h2>
        <div class="user-list">
          <div class="user">
            <img src="../assets/images/profile-2.jpg" />
            <h2>Jack</h2>
            <p>54 Min Ago</p>
          </div>
          <div class="user">
            <img src="../assets/images/profile-3.jpg" />
            <h2>Amir</h2>
            <p>3 Hours Ago</p>
          </div>
          <div class="user">
            <img src="../assets/images/profile-4.jpg" />
            <h2>Ember</h2>
            <p>6 Hours Ago</p>
          </div>
          <div class="user">
            <img src="../assets/images/plus.png" />
            <h2>More</h2>
            <p>New User</p>
          </div>
        </div>
      </div>

      <div class="recent-orders">
        <h2>最近订单</h2>
        <table>
          <thead>
            <tr>
              <th>订单名</th>
              <th>订单编号</th>
              <th>金额</th>
              <th>状态</th>
              <th></th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        <a href="#">展示所有</a>
      </div>
    </div>

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
          <h2>AsmrProg</h2>
          <p>Fullstack Web Developer</p>
        </div>
      </div>

      <div class="reminders">
        <div class="header">
          <h2>Reminders</h2>
          <span class="material-icons-sharp"> notifications_none </span>
        </div>

        <div class="notification">
          <div class="icon">
            <span class="material-icons-sharp"> volume_up </span>
          </div>
          <div class="content">
            <div class="info">
              <h3>Workshop</h3>
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
              <h3>Workshop</h3>
              <small class="text_muted"> 08:00 AM - 12:00 PM </small>
            </div>
            <span class="material-icons-sharp"> more_vert </span>
          </div>
        </div>

        <div class="notification add-reminder">
          <div>
            <span class="material-icons-sharp"> add </span>
            <h3>Add Reminder</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.analyse-container {
  display: grid;
  width: 96%;
  margin: 0 auto;
  gap: 25px;
  grid-template-columns: 192px auto 368px;
}

.analyse-main {
  margin-top: 25px;
}

.analyse-main .analyse {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

.analyse-main .analyse > div {
  background-color: var(--color-white);
  padding: var(--card-padding);
  border-radius: var(--card-border-radius);
  margin-top: 16px;
  box-shadow: var(--box-shadow);
  cursor: pointer;
  transition: all 0.3s ease;
}

.analyse-main .analyse > div:hover {
  box-shadow: none;
}

.analyse-main .analyse > div .status {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.analyse-main .analyse h3 {
  margin-left: 8px;
  font-size: 16px;
}

.analyse-main .analyse .progresss {
  position: relative;
  width: 92px;
  height: 92px;
  border-radius: 50%;
}

.analyse-main .analyse svg {
  width: 110px;
  height: 110px;
}

.analyse-main .analyse svg circle {
  fill: none;
  stroke-width: 10;
  stroke-linecap: round;
  transform: translate(5px, 5px);
}

.analyse-main .analyse .sales svg circle {
  stroke: var(--color-success);
  stroke-dashoffset: -30;
  stroke-dasharray: 200;
}

.analyse-main .analyse .visits svg circle {
  stroke: var(--color-danger);
  stroke-dashoffset: -30;
  stroke-dasharray: 200;
}

.analyse-main .analyse .searches svg circle {
  stroke: var(--color-primary);
  stroke-dashoffset: -30;
  stroke-dasharray: 200;
}

.analyse-main .analyse .progresss .percentage {
  position: absolute;
  top: -3px;
  left: -1px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}

.analyse-main .new-users {
  margin-top: 20px;
}

.analyse-main .new-users .user-list {
  background-color: var(--color-white);
  padding: var(--card-padding);
  border-radius: var(--card-border-radius);
  margin-top: 16px;
  box-shadow: var(--box-shadow);
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 22px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.analyse-main .new-users .user-list:hover {
  box-shadow: none;
}

.analyse-main .new-users .user-list .user {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.analyse-main .new-users .user-list .user img {
  width: 80px;
  height: 80px;
  margin-bottom: 6px;
  border-radius: 50%;
}

.analyse-main .recent-orders {
  margin-top: 20px;
}

.analyse-main .recent-orders h2 {
  margin-bottom: 12px;
}

.analyse-main .recent-orders table {
  background-color: var(--color-white);
  width: 100%;
  padding: var(--card-padding);
  text-align: center;
  box-shadow: var(--box-shadow);
  border-radius: var(--card-border-radius);
  transition: all 0.3s ease;
}

.analyse-main .recent-orders table:hover {
  box-shadow: none;
}

.analyse-main table tbody td {
  height: 45px;
  border-bottom: 1px solid var(--color-light);
  color: var(--color-dark-variant);
}

.analyse-main table tbody tr:last-child td {
  border: none;
}

.analyse-main .recent-orders a {
  text-align: center;
  display: block;
  margin: 16px auto;
  color: var(--color-primary);
}

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
  border-radius: 50%;
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

/* 通过媒体查询进行不同屏幕尺寸的适配 */
@media screen and (max-width: 1200px) {
  .analyse-container {
    width: 95%;
    grid-template-columns: 112px auto 368px;
  }

  .analyse-main .analyse {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .analyse-main .new-users .user-list .user {
    flex-basis: 40%;
  }

  .analyse-main .recent-orders {
    width: 94%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin: 32px 0 0 12px;
  }

  .analyse-main .recent-orders table {
    width: 83vw;
  }

  .analyse-main table thead tr th:last-child,
  .analyse-main table thead tr th:first-child {
    display: none;
  }

  .analyse-main table tbody tr td:last-child,
  .analyse-main table tbody tr td:first-child {
    display: none;
  }
}

@media screen and (max-width: 768px) {
  .container {
    width: 100%;
    grid-template-columns: 1fr;
    padding: 0 var(--padding-1);
  }

  @keyframes showMenu {
    to {
      left: 0;
    }
  }
  .analyse-main {
    margin-top: 128px;
    padding: 0 16px;
  }

  .analyse-main .new-users .user-list .user {
    flex-basis: 35%;
  }

  .analyse-main .recent-orders {
    position: relative;
    margin: 3rem 0 0 0;
    width: 100%;
  }

  .analyse-main .recent-orders table {
    width: 100%;
    margin: 0;
  }

  .right-section {
    width: 94%;
    margin: 0 auto 64px;
  }

  .right-section .nav {
    position: fixed;
    top: 0;
    left: 0;
    align-items: center;
    background-color: var(--color-white);
    padding: 0 var(--padding-1);
    height: 74px;
    width: 100%;
    z-index: 2;
    box-shadow: 0 16px 16px var(--color-light);
    margin: 0;
  }

  .right-section .profile .info {
    display: none;
  }

  .right-section .nav button {
    display: inline-block;
    background-color: transparent;
    cursor: pointer;
    color: var(--color-dark);
    position: absolute;
    left: 16px;
  }

  .right-section .nav button span {
    font-size: 32px;
  }
}
</style>
