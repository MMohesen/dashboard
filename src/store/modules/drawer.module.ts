const Drawer = {
  namespaced: true,
  state: () => ({
    show: false,
    children: false,
  }),
  mutations: {
    toggle(state: any, bool: boolean) {
      state.show = bool;
    },

    setChildren(state: any, children: any) {
      state.children = children;
    },
  },
  actions: {
    toggleDrawer({ state, commit }: { state: any; commit: any }) {
      commit("toggle", !state.show);
    },

    setChildren({ commit }: { commit: any }, children: any) {
      commit("setChildren", children);
    },
  },
};

export default Drawer;
