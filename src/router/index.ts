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
    meta: { isAuth: true, service: "Catalog", title: "POSRocket | Catalog" },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/auth/login/index.vue"),
    meta: { isAuth: false, title: "POSRocket | Login" },
  },
  {
    path: "/reset-password",
    name: "Reset Password",
    component: () => import("@/views/auth/reset/index.vue"),
    meta: { isAuth: false, title: "POSRocket | Reset password" },
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../views/Dashboard.vue"),
    meta: {
      isAuth: true,
      service: "Dashboard",
      title: "POSRocket | Dashboard",
    },
  },
  {
    path: "/reports",
    name: "reports",
    component: () => import("../views/Reports.vue"),
    meta: { isAuth: true, service: "Reports", title: "POSRocket | Reports" },
  },
  {
    path: "/settings",
    name: "settings",
    component: () => import("../views/Settings.vue"),
    meta: { isAuth: true, service: "Settings", title: "POSRocket | Settings" },
  },
  {
    path: "/catalog",
    name: "catalog",
    component: () => import("../views/Catalog.vue"),
    meta: { isAuth: true, service: "catalog", title: "POSRocket | Catalog" },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(
    document.querySelectorAll("[data-vue-router-controlled]")
  ).map((el: any) => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  // if (!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  if (nearestWithMeta)
    nearestWithMeta.meta.metaTags
      .map((tagDef: any) => {
        const tag = document.createElement("meta");

        Object.keys(tagDef).forEach((key) => {
          tag.setAttribute(key, tagDef[key]);
        });

        // We use this to track which meta tags we create, so we don't interfere with other ones.
        tag.setAttribute("data-vue-router-controlled", "");

        return tag;
      })
      // Add the meta tags to the document head.
      .forEach((tag: any) => document.head.appendChild(tag));

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
