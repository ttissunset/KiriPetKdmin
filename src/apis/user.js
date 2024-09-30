import http from "@/utils/http";

// 登录的接口函数函数
export const loginAPI = (user_name, password) => {
  return http({
    url: "/users/login",
    method: "POST",
    data: {
      user_name,
      password,
    },
  });
};
