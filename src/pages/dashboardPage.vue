<script setup>
import HomeAsideBar from "../components/HomeAsideBar.vue";
import HomeRightBar from "../components/HomeRightBar.vue";
import orders from "../mock/orders";
import users from "../mock/users";
</script>

<template>
  <div class="dashboard-container">
    <HomeAsideBar></HomeAsideBar>
    <div class="dashboard-main">
      <h1>仪表盘</h1>
      <div class="dashboard">
        <div class="sales">
          <div class="status">
            <div class="info">
              <h4>交易金额</h4>
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
              <h4>最近访问</h4>
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
        <div class="adopts">
          <div class="status">
            <div class="info">
              <h4>新增领养</h4>
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
        <h2>新增用户</h2>
        <div class="user-list">
          <div class="user" v-for="(item, index) in users" :key="index">
            <img :src="item.imageUrl" />
            <div class="user-name">{{ item.name }}</div>
            <div class="user-time">{{ item.time }}</div>
          </div>
        </div>
      </div>

      <div class="recent-orders">
        <h2>新增订单</h2>
        <table>
          <thead>
            <tr>
              <th>订单名</th>
              <th>订单编号</th>
              <th>金额</th>
              <th>状态</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in orders" :key="index">
              <td>{{ item.productName }}</td>
              <td>{{ item.productNumber }}</td>
              <td>{{ item.price }}</td>
              <td
                :class="
                  item.status === 'Declined'
                    ? 'danger'
                    : item.status === 'Pending'
                    ? 'warning'
                    : 'success'
                "
              >
                {{ item.paymentStatus }}
              </td>
              <td class="detail">详情</td>
            </tr>
          </tbody>
        </table>
        <a href="#">展示所有</a>
      </div>
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

.dashboard-main .dashboard {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

.dashboard-main .dashboard > div {
  background-color: var(--color-white);
  padding: var(--card-padding);
  border-radius: var(--card-border-radius);
  margin-top: 16px;
  box-shadow: var(--box-shadow);
  cursor: pointer;
  transition: all 0.3s ease;
}

.dashboard-main .dashboard > div:hover {
  box-shadow: none;
}

.dashboard-main .dashboard > div .status {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.dashboard-main .dashboard h3 {
  margin-left: 8px;
  font-size: 16px;
}

.dashboard-main .dashboard .progresss {
  position: relative;
  width: 92px;
  height: 92px;
  border-radius: 50%;
}

.dashboard-main .dashboard svg {
  width: 110px;
  height: 110px;
}

.dashboard-main .dashboard svg circle {
  fill: none;
  stroke-width: 10;
  stroke-linecap: round;
  transform: translate(5px, 5px);
}

.dashboard-main .dashboard .sales svg circle {
  stroke: var(--color-success);
  stroke-dashoffset: -30;
  stroke-dasharray: 200;
}

.dashboard-main .dashboard .visits svg circle {
  stroke: var(--color-danger);
  stroke-dashoffset: -100;
  stroke-dasharray: 200;
}

.dashboard-main .dashboard .adopts svg circle {
  stroke: var(--color-primary);
  stroke-dashoffset: -30;
  stroke-dasharray: 180;
}

.dashboard-main .dashboard .progresss .percentage {
  position: absolute;
  top: -3px;
  left: -1px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}

.dashboard-main .new-users {
  margin-top: 20px;
}

.dashboard-main .new-users .user-list {
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

.dashboard-main .new-users .user-list:hover {
  box-shadow: none;
}

.dashboard-main .new-users .user-list .user {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.dashboard-main .new-users .user-list .user-name {
  font-size: var(--fs-3);
  color: rgb(37, 36, 36);
  font-weight: 600;
}

.dashboard-main .new-users .user-list .user-time {
  font-size: var(--fs-2);
  color: var(--light-gray);
}

.dashboard-main .new-users .user-list .user img {
  width: 80px;
  height: 80px;
  margin-bottom: 6px;
  border-radius: 50%;
}

.dashboard-main .recent-orders {
  margin-top: 20px;
}

.dashboard-main .recent-orders h2 {
  margin-bottom: 12px;
}

.dashboard-main .recent-orders table {
  background-color: var(--color-white);
  width: 100%;
  padding: var(--card-padding);
  text-align: center;
  box-shadow: var(--box-shadow);
  border-radius: var(--card-border-radius);
  transition: all 0.3s ease;
}

.dashboard-main .recent-orders table:hover {
  box-shadow: none;
}

.dashboard-main table tbody td {
  height: 45px;
  font-size: 13px;
  border-bottom: 1px solid var(--color-light);
  color: var(--color-dark-variant);
}

.dashboard-main table tbody .detail:hover {
  color: var(--color-primary);
  cursor: pointer;
}

.dashboard-main table tbody .danger {
  color: var(--color-danger);
}

.dashboard-main table tbody .success {
  color: var(--color-success);
}

.dashboard-main table tbody .warning {
  color: var(--color-warning);
}

.dashboard-main .recent-orders a {
  text-align: center;
  display: block;
  margin: 16px auto;
  color: var(--color-primary);
}
</style>
