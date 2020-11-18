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
          <v-list-item-title>
            {{ $vuetify.lang.t(`$vuetify.${item.title}`) }}
          </v-list-item-title>
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
import Links from "./links.js";
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
      return Links
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
