import Vue from "vue";
import Vuex from "vuex";
import axios from "@/providers/requests";
import ENDPOINTS from "@/providers/ENDPOINTS";
Vue.use(Vuex);

const DataTable = {
  namespaced: true,
  state: () => ({
    data: [],
  }),
  mutations: {
    setDataResult(state: any, data: any) {
      state.data = data;
    },
  },
  actions: {
    async getData({ commit }: { commit: any }) {
      return await axios.get(ENDPOINTS.TABLE).then(({ data }) => {
        commit("setDataResult", data);
      });
    },
  },
};

export default DataTable;
