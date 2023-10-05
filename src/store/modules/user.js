import { getInfo, setInfo } from "@/utils/storage";
export default {
  namespaced: true,
  state() {
    return {
      userInfo: getInfo(),
    };
  },
  mutations: {
    setUserInfo(state, obj) {
      state.userInfo = obj;
      setInfo(obj);
    },
  },
  actions: {
    logout(context) {
      context.commit("setUserInfo", {});
      context.commit("cart/setCartList", [], { root: true });
    },
  },
  getters: {
    userInfo: (state) => state.userInfo,
  },
};
