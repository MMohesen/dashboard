<template>
  <v-navigation-drawer
    :mini-variant.sync="isMini"
    permanent
    color="dark"
    class="app-aside-nav"
    width="237"
    mini-variant-width="75"
  >
    <v-list dense nav class="nav-v-list">
      <v-list-item
        v-for="item in getNavItems"
        :key="item.title"
        link
        :to="item.href"
      >
        <v-list-item-icon>
          <v-img
            :lazy-src="item.icon"
            :src="item.icon"
            class="img-icon"
            :width="item.iconWidth"
            :height="item.iconHeight"
            contain
          />
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <div class="nav-separator" />
    <template v-slot:append>
      <div class="footer-logo"></div>
    </template>
  </v-navigation-drawer>
</template>

<script type="ts">
import Storage from "@/services/storage";
import Vue from "vue";
import { $eventHub } from "..";
import "./styles.scss";

const AsideNav = Vue.extend({
  name: "AsideNav",

  mounted() {
    $eventHub.$on("toggleAppLeftSide", this.toggle);
    this.isMini = Storage.get("isLeftSideMini") || false;
  },

  updated() {
    this.isMini = Storage.get("isLeftSideMini");
  },

  data() {
    return {
      isMini: false,
    };
  },

  computed: {
    getNavItems() {
      return [
        {
          title: this.$vuetify.lang.t("$vuetify.menu.dashboard"),
          icon: require("@/assets/navbar/dashboard-icon.svg"),
          href: "dashboard",
        },
        {
          title: this.$vuetify.lang.t("$vuetify.menu.catalog"),
          icon: require("@/assets/navbar/catalog-icon.svg"),
          href: "catalog",
        },
        {
          title: this.$vuetify.lang.t("$vuetify.menu.inventroy"),
          icon: require("@/assets/navbar/inventroy-icon.svg"),
          iconWidth: 21,
          iconHeight: 19,
          href: "inventroy",
        },
        {
          title: this.$vuetify.lang.t("$vuetify.menu.reports"),
          icon: require("@/assets/navbar/reports-icon.svg"),
          iconWidth: 20,
          iconHeight: 16,
          href: "reports",
        },
        {
          title: this.$vuetify.lang.t("$vuetify.menu.customers"),
          icon: require("@/assets/navbar/customers-icon.svg"),
          iconWidth: 20,
          iconHeight: 17,
          href: "customers",
        },
        {
          title: this.$vuetify.lang.t("$vuetify.menu.intgration"),
          icon: require("@/assets/navbar/intgration-icon.svg"),
          iconWidth: 18,
          iconHeight: 23,
          href: "intgration",
        },
        {
          title: this.$vuetify.lang.t("$vuetify.menu.settings"),
          icon: require("@/assets/navbar/settings-icon.svg"),
          href: "settings",
        },
      ];
    },
  },

  methods: {
    toggle() {
      this.isMini = !this.isMini;
      Storage.set("isLeftSideMini", this.isMini);
    },
  },
});
export default AsideNav;
</script>
