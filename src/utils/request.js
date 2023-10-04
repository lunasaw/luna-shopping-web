/* 封装axios用于发送请求 */
import store from "@/store";
import axios from "axios";
import { Toast } from "vant";

// 创建一个新的axios实例
const request = axios.create({
  baseURL: "http://cba.itlike.com/public/index.php?s=/api/",
  timeout: 5000,
});

request.defaults.headers.post["Content-Type"] = "application/json";

// 添加请求拦截器
request.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    Toast.loading({
      message: "请求中...",
      forbidClick: true,
      loadingType: "spinner",
      duration: 0,
    });
    const token = store.getters.token;
    if (token) {
      config.headers["Access-Token"] = token;
      config.headers.platform = "H5";
    }
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
request.interceptors.response.use(
  function (response) {
    const res = response.data;
    if (res.status !== 200) {
      Toast(res.message);
      return Promise.reject(res.message);
    } else {
      // 清除 loading 中的效果
      Toast.clear();
    }
    // 对响应数据做点什么
    return res;
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export function doGet(url) {
  return get(url, {}, {}, {});
}

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 * @param {Object} body [请求时携带的请求体参数]
 */

function get(url, headers, params, body) {
  return request.get(url, {
    headers: headers,
    params: params,
    data: body,
  });
}

export function doPost(url, body) {
  return post(url, {}, {}, JSON.stringify(body));
}

export function doPostJson(url, headers, params, body) {
  return post(url, headers, params, JSON.stringify(body));
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 * @param {Object} body [请求时携带的请求体参数]
 */
function post(url, headers, params, body) {
  headers = Object.assign({}, request.defaults.headers.post, headers);
  return request.post(url, body, {
    headers: headers,
    params: params,
  });
}

export function Bodyheaders() {
  return {
    contenType: {
      key: "Content-Type",
      value: {
        json: "application/json",
        wwwFrom: "application/x-www-form-urlencoded",
        formData: "multipart/form-data",
        raw: "application/octet-stream",
      },
    },
  };
}
export default request;
