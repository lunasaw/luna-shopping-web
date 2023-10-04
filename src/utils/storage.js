const INFO_KEY = "luna_shopping_info";

// 获取个人信息
export const getInfo = () => {
  const result = localStorage.getItem(INFO_KEY);
  return result
    ? JSON.parse(result)
    : {
        token: "",
        userId: "",
      };
};

// 设置个人信息
export const setInfo = (info) => {
  localStorage.setItem(INFO_KEY, JSON.stringify(info));
};

// 移除个人信息
export const removeInfo = () => {
  localStorage.removeItem(INFO_KEY);
};
