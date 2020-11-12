const APP_LANG = {
  EN: "en",
  AR: "ar",
};
const AppModule = {
  namespaced: true,
  state: () => ({
    isLoading: false,
    lang: APP_LANG.EN,
  }),
  getters: {
    isLoading: (state: any) => !!state.isLoading,
    lang: (state: any) => state.lang,
    isRtl: (state: any) => state.lang === APP_LANG.AR,
  },
  mutations: {
    setAppLoading(state: any, isLoading: boolean = false) {
      state.isLoading = isLoading;
    },
    setAppLang(state: any, lang: string = APP_LANG.EN) {
      state.lang = lang;
    },
  },
};

export default AppModule;
