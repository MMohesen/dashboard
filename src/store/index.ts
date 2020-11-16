import Vue from "vue";
import Vuex from "vuex";
import Table from "./modules/table.store";
import User from "./modules/user.store";
import App from "./modules/app.store";

Vue.use(Vuex);

/**
 * Combine store
 * @example this.$store.state
 * @returns {object}
 */
const store = new Vuex.Store({
  modules: {
    Table,
    User,
    App,
  },
});

export default store;
