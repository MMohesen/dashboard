<template>
  <v-navigation-drawer
    :mini-variant.sync="getNavStatus"
    permanent
    color="dark"
    class="app-aside-nav"
  >
    <v-list dense nav>
      <v-list-item
        v-for="item in getNavItems"
        :key="item.title"
        link
        :to="item.href"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from "vue";
import "./styles.scss";

const AsideNav = Vue.extend({
  name: "AsideNav",
  computed: {
    getNavItems() {
      return [
        {
          title: this.$vuetify.lang.t("$vuetify.menu.dashboard"),
          icon: "mdi-view-dashboard",
          href: "dashboard",
        },
        {
          title: this.$vuetify.lang.t("$vuetify.menu.catalog"),
          icon: "menu_book",
          href: "catalog",
        },
        // {
        //   title: this.$vuetify.lang.t("$vuetify.menu.inventroy"),
        //   icon: "archive",
        //   href: "inventroy",
        // },
        {
          title: this.$vuetify.lang.t("$vuetify.menu.reports"),
          icon: "insights",
          href: "reports",
        },
        // {
        //   title: this.$vuetify.lang.t("$vuetify.menu.customers"),
        //   icon: "group",
        //   href: "customers",
        // },
        // {
        //   title: this.$vuetify.lang.t("$vuetify.menu.intgration"),
        //   icon: "layers",
        //   href: "intgration",
        // },
        {
          title: this.$vuetify.lang.t("$vuetify.menu.settings"),
          icon: "settings",
          href: "settings",
        },
      ];
    },
    getNavStatus: {
      get(): boolean {
        return this.$store.state?.Nav?.leftSide;
      },
      set(): void {},
    },
  },
});
export default AsideNav;
</script>
