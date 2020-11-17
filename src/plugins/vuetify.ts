import "material-design-icons-iconfont/dist/material-design-icons.css"; // Ensure you are using css-loader
import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "@/config/colors";
import DataJson from "@/data-source/app.json";
import store from "@/store";
import { VuetifyPreset } from "vuetify/types/services/presets";
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader

// add plugin to vue app
Vue.use(Vuetify);

// customize the vutify library
const options: VuetifyPreset = {
  rtl: store.getters["App/isRtl"],
  iconfont: "",
  icons: {
    iconfont: "mdi",
    values: {},
  },
  breakpoint: {
    mobileBreakpoint: 16,
    scrollBarWidth: 24,
    thresholds: {
      xs: 600,
      sm: 960,
      md: 1280,
      lg: 1920,
    },
  },
  theme: {
    dark: false,
    default: "light",
    disable: false,
    options: {
      cspNonce: "dQw4w9WgXcQ",
      customProperties: true,
      variations: false,
    },
    themes: {
      light: {
        ...colors.light,
      },
      dark: {
        ...colors.dark,
      },
    },
  },
  customVariables: ["@/styles/variables.scss"],
  treeShake: true,
  lang: {
    t: undefined as any,
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
};
export default new Vuetify(options);
