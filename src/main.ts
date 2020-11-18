import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueCookies from "vue-cookies";
import { abilitiesPlugin } from "@casl/vue";
import ability from "./services/ability";
import { Button, Input, Link, Footer, Feedback, Icon } from "@/components";
import { Can } from "@casl/vue";

Vue.use(VueCookies);
Vue.use(abilitiesPlugin, ability);

Vue.component("Can", Can);
Vue.component("Icon", Icon);
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

Vue.config.errorHandler = (err, vm, info) => {
  // TODO: Perform any custom logic or log to server
  console.log("Vue.config Error - CentralizeErrorHandler: ", err, vm, info);
};

// window.onerror = (
//   message: Event | string,
//   url?: string,
//   lineNo?: number,
//   columnNo?: number,
//   error?: Error
// ) => {
//   console.log(
//     "onError - CentralizeErrorHandler: ",
//     message,
//     url,
//     lineNo,
//     columnNo,
//     error
//   );
// };

export default new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
