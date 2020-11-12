import "material-design-icons-iconfont/dist/material-design-icons.css"; // Ensure you are using css-loader
import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "@/config/colors";
import DataJson from "@/data-source/app.json";
import store from "@/store";

export default new Vuetify({
  rtl: store.getters["App/isRtl"],
  iconfont: "md",
  icons: {
    iconfont: "mdi",
  },
  options: {
    customProperties: true,
  },
  theme: {
    themes: {
      light: {
        ...colors,
      },
    },
  },
  lang: {
    locales: {
      en: {
        ...DataJson?.translation.en,
      },
      ar: {
        ...DataJson?.translation.ar,
      },
    },
    current: store.getters["App/lang"],
  },
});
Vue.use(Vuetify);
