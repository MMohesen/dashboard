import $vuetify from "@/plugins/vuetify";

export default [
  {
    title: "menu.dashboard",
    icon: require("@/assets/navbar/dashboard-icon.svg"),
    href: "dashboard",
  },
  {
    title: "menu.catalog",
    icon: require("@/assets/navbar/catalog-icon.svg"),
    href: "catalog",
  },
  {
    title: "menu.inventroy",
    icon: require("@/assets/navbar/inventroy-icon.svg"),
    iconWidth: 21,
    iconHeight: 19,
    href: "inventroy",
  },
  {
    title: "menu.reports",
    icon: require("@/assets/navbar/reports-icon.svg"),
    iconWidth: 20,
    iconHeight: 16,
    href: "reports",
  },
  {
    title: "menu.customers",
    icon: require("@/assets/navbar/customers-icon.svg"),
    iconWidth: 20,
    iconHeight: 17,
    href: "customers",
  },
  {
    title: "menu.intgration",
    icon: require("@/assets/navbar/intgration-icon.svg"),
    iconWidth: 18,
    iconHeight: 23,
    href: "intgration",
  },
  {
    title: "menu.settings",
    icon: require("@/assets/navbar/settings-icon.svg"),
    href: "settings",
  },
];
