import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueCookies from "vue-cookies";
import { abilitiesPlugin } from "@casl/vue";
import ability from "./services/ability";
import Vuelidate from "vuelidate";
import { Button } from "@/components";
import { Can } from "@casl/vue";

Vue.use(Vuelidate);
Vue.use(VueCookies);
Vue.use(abilitiesPlugin, ability);

Vue.component("Can", Can);
Vue.component("Button", Button);

Vue.config.productionTip = true;

Vue.mixin({
  data: function () {
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
