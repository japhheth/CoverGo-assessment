import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    transactionSummary: {},
  },
  getters: {
    getTransactionSummary(state) {
      return state.transactionSummary;
    },
  },
  mutations: {
    setUserDetails(state, payload) {
      state.transactionSummary = payload;
    },
  },
  actions: {},
  modules: {},
});
