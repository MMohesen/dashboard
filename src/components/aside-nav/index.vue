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
      <div v-for="item in getNavItems" :key="item.title">
        <LinkItem :item="item" v-if="!item.links" />
        <LinkGroup :item="item" v-if="!!item.links" />
      </div>
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
import LinkItem from "./link-item";
import LinkGroup from "./link-group";
import "./styles.scss";

const AsideNav = Vue.extend({
  name: "AsideNav",
  components:{LinkItem, LinkGroup},

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
      cruds: [
        ['Create', 'mdi-plus-outline'],
        ['Read', 'mdi-file-outline'],
        ['Update', 'mdi-update'],
        ['Delete', 'mdi-delete'],
      ],
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
