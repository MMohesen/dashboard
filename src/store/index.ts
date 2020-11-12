import Vue from "vue";
import Vuex from "vuex";
import Table from "./modules/table.module";
import User from "./modules/user.module";
import App from "./modules/app.module";

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
