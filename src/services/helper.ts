import store from "@/store/index";
import Storage from "./storage";
import { APP_LANG } from "@/types";

const Lang = {
  get(): String {
    return Storage.get("lang") || APP_LANG.EN;
  },

  set(lang: string, _this?: any): void {
    Storage.set("lang", lang, false);
    store.commit("App/setAppLang", lang);

    if (_this) {
      _this.$vuetify.rtl = lang === APP_LANG.AR;
      _this.$vuetify.lang.current = lang;
    }
  },

  prepare(): void {
    const lang = this.get();
    if (lang) {
      store.commit("App/setAppLang", lang);
    }
  },

  switch(_this: any): void {
    const lang = this.get();
    switch (lang) {
      case APP_LANG.AR:
        this.set(APP_LANG.EN, _this);
        break;

      case APP_LANG.EN:
        this.set(APP_LANG.AR, _this);
        break;
    }
  },
};

const AppLog = {
  log({ ...reset }) {
    console.log(reset);
  },
};

/**
 * lang
 */
export { Lang, AppLog };
