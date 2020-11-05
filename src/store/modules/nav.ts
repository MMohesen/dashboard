import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const Nav = {
  namespaced: true,
  state: () => ({
    leftSide: false,
    drawer: false,
  }),
  mutations: {
    toggleLeftSide(state: any, bool: boolean) {
      state.leftSide = bool;
    },

    toggleDrawer(state: any, bool: boolean) {
      state.drawer = bool;
    },
  },
  actions: {
    toggle({ state, commit }: { state: any; commit: any }) {
      commit("toggleLeftSide", !state.leftSide);
    },

    setDrawer({ state, commit }: { state: any; commit: any }) {
      commit("toggleDrawer", !state.drawer);
    },
  },
};

export default Nav;
