import Vue from "vue";
import Vuex from "vuex";
import Nav from "./modules/nav.module";
import Table from "./modules/table.module";
import Drawer from "./modules/drawer.module";
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
    Nav,
    Table,
    Drawer,
    User,
    App,
  },
});

export default store;
