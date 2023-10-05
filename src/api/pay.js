import request from "@/utils/request";
// 提交订单
export const submitOrder = (mode, params) => {
  return request.post("/checkout/submit", {
    mode,
    delivery: 10, // 物流方式  配送方式 (10快递配送 20门店自提)
    couponId: 0, // 优惠券 id
    payType: 10, // 余额支付
    isUsePoints: 0, // 是否使用积分
    ...params,
  });
};
