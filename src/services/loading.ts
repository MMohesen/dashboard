import store from "@/store/index";

const Loading = {
  show(): void {
    store.commit("App/setAppLoading", true);
  },

  hide(): void {
    setTimeout(() => {
      store.commit("App/setAppLoading", false);
    }, 800);
  },
};

/**
 * Class loading
 */
export default Loading;
