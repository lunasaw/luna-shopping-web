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

// 获取购物车列表数据
export const getCartList = () => {
  return request.get("/cart/list");
};

// 更新购物车商品数量
export const changeCount = (goodsId, goodsNum, goodsSkuId) => {
  return request.post("/cart/update", {
    goodsId,
    goodsNum,
    goodsSkuId,
  });
};

// 删除购物车
export const delSelect = (cartIds) => {
  return request.post("/cart/clear", {
    cartIds,
  });
};
