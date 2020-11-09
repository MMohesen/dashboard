import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueCookies from "vue-cookies";
import { abilitiesPlugin } from "@casl/vue";
import ability from "./services/ability";
import { Can } from "@casl/vue";
import Vuelidate from "vuelidate";

Vue.use(Vuelidate);
Vue.component("Can", Can);
Vue.use(VueCookies);
Vue.use(abilitiesPlugin, ability);

Vue.config.productionTip = true;
Vue.mixin({
  data: function() {
    return {
      get global() {
        return {
          test: "value-test",
        };
      },
    };
  },
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
