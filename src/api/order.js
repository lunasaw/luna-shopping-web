import request from "@/utils/request";

// 获取地址列表
export const getAddressList = () => {
  return request.get("/address/list");
};

export const checkOrder = (mode, obj) => {
  return request.get("/checkout/order", {
    params: {
      mode,
      delivery: 0,
      couponId: 0,
      isUsePoints: 0,
      ...obj,
    },
  });
};

// 订单列表
export const getMyOrderList = (dataType, page) => {
  return request.get("/order/list", {
    params: {
      dataType,
      page,
    },
  });
};
