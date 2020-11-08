import "material-design-icons-iconfont/dist/material-design-icons.css"; // Ensure you are using css-loader
import Vue from "vue";
import Vuetify from "vuetify/lib";

import colors from "@/config/colors";

Vue.use(Vuetify);
import DataJson from "@/data-source/app.json";

export default new Vuetify({
  rtl: false,
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
    current: "en",
  },
});
