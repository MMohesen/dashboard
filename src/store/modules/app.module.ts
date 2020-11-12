const AppModule = {
  namespaced: true,
  state: () => ({
    isLoading: false,
  }),
  getters: {
    isLoading: (state: any) => !!state.isLoading,
  },
  mutations: {
    setAppLoading(state: any, isLoading: boolean = false) {
      state.isLoading = isLoading;
    },
  },
  actions: {},
};

export default AppModule;
