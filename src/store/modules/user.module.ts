// import axios from "@/providers/requests";
// import ENDPOINTS from "@/providers/end-points";
import User from "@/interface/user.interface";
import Storage from "@/services/storage";

const UserModule = {
  namespaced: true,
  state: () => ({
    session: null,
  }),
  getters: {
    isLoggedIn: (state: any) => !!state.session,
    user: (state: any) => state.session,
  },
  mutations: {
    setUserLoggedIn(state: any, user: User | null) {
      state.session = user;
    },
  },
  actions: {
    // async login({ commit }: { commit: any }) {
    //   return await axios.get(ENDPOINTS.TABLE).then(({ data }) => {
    //     commit("setDataResult", data);
    //   });
    // },

    async singleSignOn({ commit }: { commit: any }) {
      const user = Storage.get("dashboard_user");
      if (!!user) {
        await commit("setUserLoggedIn", user);
      }
    },

    async doLogin({ commit }: { commit: any }, user: User) {
      Storage.set("dashboard_user", user, true);
      await commit("setUserLoggedIn", user);
    },

    async doLogOut({ commit }: { commit: any }) {
      Storage.remove("dashboard_user");
      await commit("setUserLoggedIn", null);
    },
  },
};

export default UserModule;
