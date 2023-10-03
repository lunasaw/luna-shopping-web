import request from "./request";

// 封装一个函数，用于发送请求
export function doGet(url, params) {
  return request.get(url, { params });
}
