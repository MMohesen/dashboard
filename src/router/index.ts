import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Catalog from "../views/Catalog.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Catalog",
    component: Catalog,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../views/Dashboard.vue"),
  },
  {
    path: "/reports",
    name: "reports",
    component: () => import("../views/Reports.vue"),
  },
  {
    path: "/settings",
    name: "settings",
    component: () => import("../views/Settings.vue"),
  },
  {
    path: "/catalog",
    name: "catalog",
    component: () => import("../views/Catalog.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  //TODO: Check the user authrization
  console.log("to", to);
  console.log("from", from);
  console.log("next", next);
  next();
});

export default router;
