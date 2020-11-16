import axios from "@/providers/requests";
import ENDPOINTS from "@/providers/end-points";
// import User from "@/interface/user.interface";
import Storage from "@/services/storage";
import { SessionInterface } from "@/interface/user.interface";
import SessionModel from "@/modules/user";

// import Session from "@/interface/user.interface.ts";
const UserStore = {
  namespaced: true,
  state: () => ({
    session: null,
    error: null,
    success: false,
  }),
  getters: {
    isLoggedIn: (state: any) => !!state.session,
    user: (state: any) => state.session,
    error: (state: any) => state.error,
    success: (state: any) => state.success,
  },
  mutations: {
    setUserLoggedIn(state: any, user: {}) {
      state.session = user;
    },

    setError(state: any, error: []) {
      state.error = error;
    },

    setSuccess(state: any, success: boolean) {
      state.success = success;
    },
  },
  actions: {
    async singleSignOn({ commit }: { commit: any }) {
      const user = Storage.get("dashboard_user");
      if (!!user) {
        await commit("setUserLoggedIn", user);
      }
    },

    async doLogin({ commit }: { commit: any }, user: any) {
      return await axios
        .post(ENDPOINTS.LOGIN, user)
        .then(async ({ data }: { data: SessionInterface }) => {
          // save user information on app storage
          const session = new SessionModel(data);

          Storage.set("dashboard_user", session.getUser(), true);
          Storage.set("dashboard_token", session.getToken(), true);

          // trigger store user is logged in
          await commit("setUserLoggedIn", session.getUser());
        })
        .catch(async ({ error }: { error: any }) => {
          await commit("setError", error);
        });
    },

    async doResetPassword({ commit }: { commit: any }, user: any) {
      return await axios
        .post(ENDPOINTS.RESET_PASSWORD, user)
        .then(async (data) => {
          // save user information on app storage
          console.log(data);
          debugger;
          await commit("setSuccess", true);
        })
        .catch(async ({ error }: { error: any }) => {
          await commit("setSuccess", false);
          debugger;
          await commit("setError", error);
        });
    },

    async doLogOut({ commit }: { commit: any }) {
      Storage.remove("dashboard_user");
      await commit("setUserLoggedIn", null);
    },
  },
};

export default UserStore;