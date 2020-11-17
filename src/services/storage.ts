import Vue from "vue";

const Storage = {
  set(
    key: string,
    value: string | any,
    isCookies: boolean = false,
    expireTimes?: string | number | Date | undefined
  ): void {
    if (isCookies) {
      Vue.$cookies.set(key, value, expireTimes);
      return;
    }

    localStorage.setItem(key, JSON.stringify(value));
  },

  get(key: string): any | null {
    let value = Vue.$cookies.get(key) || null;
    if (!!localStorage[key]) value = JSON.parse(localStorage[key]);
    return value;
  },

  check(key: string): boolean {
    return !!Vue.$cookies.get(key) || !!localStorage[key] || false;
  },

  remove(key: string): void {
    Vue.$cookies.remove(key) || localStorage.removeItem[key];
  },
};

/**
 * Class storage
 * @example Storage.set('KEY', {V1:'Value1'}, isCookies:boolean, ?Date(...))
 * @example Storage.get('KEY')
 */
export default Storage;
