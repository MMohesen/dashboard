// import { Loader } from "@/services/helper";
import Storage from "@/services/storage";
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Catalog from "../views/Catalog.vue";
import { $eventHub } from "@/components";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Catalog",
    component: Catalog,
    meta: { isAuth: true, service: "Catalog" },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/login/index.vue"),
    meta: { isAuth: false },
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../views/Dashboard.vue"),
    meta: { isAuth: true, service: "Dashboard" },
  },
  {
    path: "/reports",
    name: "reports",
    component: () => import("../views/Reports.vue"),
    meta: { isAuth: true, service: "Reports" },
  },
  {
    path: "/settings",
    name: "settings",
    component: () => import("../views/Settings.vue"),
    meta: { isAuth: true, service: "Settings" },
  },
  {
    path: "/catalog",
    name: "catalog",
    component: () => import("../views/Catalog.vue"),
    meta: { isAuth: true, service: "catalog" },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const user = Storage.get("dashboard_user");
  const { isAuth } = to?.meta;

  // user logged in and route login
  if (to.fullPath.match(/^\/login(?:\/(?=$))?$/i) && user)
    return next({ path: "/" });

  // route required auth and user not logged in
  if (isAuth && !user)
    return next({ path: "/login", params: { nextUrl: to.fullPath } });

  // otherwise
  return next();
});

router.beforeResolve((to, from, next) => {
  // show app loader
  if (typeof to.matched[0]?.components.default === "function") {
    $eventHub.$emit("showAppLoader");
  }
  next();
});

router.afterEach(() => {
  // hide app loader
  $eventHub.$emit("hideAppLoader", 700);
});

export default router;
