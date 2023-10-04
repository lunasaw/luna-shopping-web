import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";

Vue.use(Vuex);
const data = {
  state: {
    notFound: {
      code: 404,
      message:
        " LOST IN <span>SPACE</span> App-Name? Hmm, looks like that page doesn't exist.",
    },
    pageError: {
      code: 500,
      message:
        "ERRPR IN <span>SPACE</span> App-Name? Hmm, looks like that page has error.",
    },
  },

  mutations: {
    // actions: {},
    // getters: {}
  },
  modules: {
    user,
  },
};

const store = new Vuex.Store(data);

export default store;
