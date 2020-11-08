import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueCookies from "vue-cookies";
import { abilitiesPlugin } from "@casl/vue";
import ability from "@/services/ability";
import { Can } from "@casl/vue";

Vue.component("Can", Can);
Vue.use(VueCookies);
Vue.use(abilitiesPlugin);

import DataJson from "@/data-source/app.json";

Vue.config.productionTip = true;
Vue.mixin({
  data: function() {
    return {
      get lang() {
        return {
          ...DataJson?.translation["en"],
        };
      },
    };
  },
});
new Vue({
  router,
  store,
  vuetify,
  ability,
  render: (h) => h(App),
}).$mount("#app");
