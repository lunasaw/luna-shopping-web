import { getCartList, changeCount, delSelect } from "@/api/cart";
import { Toast } from "vant";
export default {
  namespaced: true,
  state() {
    return {
      cartList: [],
    };
  },
  mutations: {
    setCartList(state, newList) {
      state.cartList = newList;
    },
    toggleCheck(state, goodsId) {
      const goods = state.cartList.find((item) => item.goods_id === goodsId);
      goods.isChecked = !goods.isChecked;
    },
    toggleAllCheck(state, flag) {
      state.cartList.forEach((item) => {
        item.isChecked = flag;
      });
    },
    changeCount(state, { goodsId, value }) {
      const obj = state.cartList.find((item) => item.goods_id === goodsId);
      obj.goods_num = value;
    },
  },
  actions: {
    async getCartAction(context) {
      const { data } = await getCartList();
      data.list.forEach((item) => {
        item.isChecked = true;
      });
      context.commit("setCartList", data.list);
    },
    async changeCountAction(context, obj) {
      const { goodsId, value, skuId } = obj;
      context.commit("changeCount", {
        goodsId,
        value,
      });
      await changeCount(goodsId, value, skuId);
    },
    // 删除购物车数据
    async delSelect(context) {
      const selCartList = context.getters.selCartList;
      const cartIds = selCartList.map((item) => item.id);
      await delSelect(cartIds);
      Toast("删除成功");

      // 重新拉取最新的购物车数据 (重新渲染)
      context.dispatch("getCartAction");
    },
  },
  getters: {
    cartTotal(state) {
      return state.cartList.reduce((sum, item) => sum + item.goods_num, 0);
    },
    selCartList(state) {
      return state.cartList.filter((item) => item.isChecked);
    },
    selCount(state, getters) {
      return getters.selCartList.reduce((sum, item) => sum + item.goods_num, 0);
    },
    selPrice(state, getters) {
      return getters.selCartList
        .reduce((sum, item) => {
          return sum + item.goods_num * item.goods.goods_price_min;
        }, 0)
        .toFixed(2);
    },
    isAllChecked(state) {
      return state.cartList.every((item) => item.isChecked);
    },
  },
};
