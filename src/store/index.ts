import Vue from "vue";
import Vuex from "vuex";
import Nav from "./modules/nav";
import Table from "./modules/table";

Vue.use(Vuex);

/**
 * Combine store
 * @example this.$store.state
 * @returns {object}
 */
const store = new Vuex.Store({
  modules: {
    Nav,
    Table,
  },
});

export default store;
