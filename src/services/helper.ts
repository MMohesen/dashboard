import store from "@/store/index";
import Storage from "./storage";

const Lang = {
  set(lang: string): void {
    Storage.set("lang", lang, false);
    store.commit("App/setAppLang", lang);
  },
  prepare(): void {
    const lang = Storage.get("lang");
    if (lang) {
      store.commit("App/setAppLang", lang);
    }
  },
};

/**
 * lang
 */
export { Lang };
