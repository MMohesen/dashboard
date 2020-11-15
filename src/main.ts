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
import { Button, Input, Link, Footer, Feedback } from "@/components";
import { Can } from "@casl/vue";

Vue.use(Vuelidate);
Vue.use(VueCookies);
Vue.use(abilitiesPlugin, ability);

Vue.component("Can", Can);
Vue.component("Button", Button);
Vue.component("Input", Input);
Vue.component("Link", Link);
Vue.component("Footer", Footer);
Vue.component("Feedback", Feedback);

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

export default new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
