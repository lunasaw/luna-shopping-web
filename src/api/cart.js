import request from "@/utils/request";

// 加入购物车
export const addCart = (goodsId, goodsNum, goodsSkuId) => {
  return request.post("/cart/add", {
    goodsId,
    goodsNum,
    goodsSkuId,
  });
};

// 获取购物车数量
export const getCartTotal = () => {
  return request.get("/cart/total", {});
};
