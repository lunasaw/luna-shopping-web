import request from "@/utils/request";

// 获取搜索商品列表数据
export const getProList = (paramsObj) => {
  const { categoryId, goodsName, page } = paramsObj;
  return request.get("/goods/list", {
    params: {
      categoryId,
      goodsName,
      page,
    },
  });
};
