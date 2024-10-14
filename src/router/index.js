import { createWebHashHistory, createRouter } from "vue-router";

// 创建路由规则
const routes = [
  {
    path: "/",
    name: "dashboard",
    redirect: "/dashboard",
    component: () => import("../pages/dashboardPage.vue"),
    children: [
      {
        path: "/dashboard",
        component: () => import("../pages/dashboardPage.vue"),
      },
    ],
  },
  {
    path: "/analyse",
    name: "analyse",
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
