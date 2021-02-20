import Vuex from "vuex";
import { createApp } from "vue";
import App from "../App.vue";
createApp(App).mount(Vuex);
export default new Vuex.Store({
  state: {
    fatherMes: "",
    sonMes: "",
    fatherMesAsync: "",
  },
  mutations: {
    sayFather(state, value) {
      state.fatherMes = value;
    },
    saySon(state, value) {
      state.sonMes = value;
    },
    sayAsyncFather(state, value) {
      state.fatherMesAsync = value;
    },
  },
  actions: {
    asyncSayFather({ commit }, payload) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(payload);
        }, 2000);
      }).then((res) => {
        commit("sayAsyncFather", res);
      });
    },
  },
});
