import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueCookies from "vue-cookies";
Vue.use(VueCookies);

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
  render: (h) => h(App),
}).$mount("#app");
