<template>
  <v-navigation-drawer
    :mini-variant.sync="getNavStatus"
    permanent
    color="dark"
    class="app-aside-nav"
  >
    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" link :to="item.href">
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
import DataJson from "@/data-source/app.json";

const menueTrans = { ...DataJson?.translation.en.menu };

const AsideNav = Vue.extend({
  name: "AsideNav",
  data() {
    return {
      items: [
        {
          title: menueTrans?.dashboard,
          icon: "mdi-view-dashboard",
          href: "dashboard",
        },
        { title: menueTrans?.catalog, icon: "menu_book", href: "catalog" },
        { title: menueTrans?.inventroy, icon: "archive", href: "inventroy" },
        { title: menueTrans?.reports, icon: "insights", href: "reports" },
        { title: menueTrans?.customers, icon: "group", href: "customers" },
        { title: menueTrans?.intgration, icon: "layers", href: "intgration" },
        { title: menueTrans?.settings, icon: "settings", href: "settings" },
      ],
      right: null,
    };
  },
  computed: {
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
