import { createWebHashHistory, createRouter } from "vue-router";

// 创建路由规则
const routes = [
  {
    path: "/",
    name: "analyse",
    // redirect: "/ananlyse",
    component: () => import("../pages/analysePage.vue"),
  },
];

// 创建路由对象
const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

// 导出路由对象
export default router;
