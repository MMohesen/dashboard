<template>
  <div class="app-nav-bar">
    <v-app-bar flat color="dark" class="banar-nav" height="44">
      <p class="trial-maessage">
        {{ this.translation.banner_message }}
      </p>
      <v-spacer></v-spacer>

      <label class="lang">{{ this.translation.arabic }}</label>
      <span class="vertical-spacer"></span>
      <v-icon
        class="btn-apps"
        color="#fff"
        id="drawer-toggole"
        v-on:click="toggoleDrawer"
      >
        apps
      </v-icon>
    </v-app-bar>
    <AppDrawer :isVisible="isDrawerVisible" :handleOnClose="toggoleDrawer">
      <template #footer>
        Test Append Footer
      </template>
      <template #header>
        prepend
      </template>
      <template #body>
        <v-list dense>
          <v-list-item v-for="(item, index) in items" :key="index" link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content style="min=width:500">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </template>
    </AppDrawer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import "./styles.scss";
import DataJson from "@/data-source/app.json";
import Table from "../table/index.vue";
import { AppDrawer } from "@/components";

const TopBanner = Vue.extend({
  name: "TopBanner",
  components: { Table, AppDrawer },
  data() {
    return {
      translation: { ...DataJson?.translation.en },
      isDrawerVisible: false,
      items: [
        { title: "Home", icon: "mdi-view-dashboard" },
        {
          title:
            "AboutAboutAboutAboutAboutAboutAboutAboutAboutAboutAboutAboutAboutAbout",
          icon: "mdi-forum",
        },
        { title: "About", icon: "mdi-forum" },
        { title: "About", icon: "mdi-forum" },
        { title: "About", icon: "mdi-forum" },
        { title: "About", icon: "mdi-forum" },
        { title: "About", icon: "mdi-forum" },
        { title: "About", icon: "mdi-forum" },
        { title: "About", icon: "mdi-forum" },
        { title: "About", icon: "mdi-forum" },
        { title: "About", icon: "mdi-forum" },
        { title: "About", icon: "mdi-forum" },
        { title: "About", icon: "mdi-forum" },
        { title: "About", icon: "mdi-forum" },
        { title: "About", icon: "mdi-forum" },
        { title: "About", icon: "mdi-forum" },
        { title: "About", icon: "mdi-forum" },
        { title: "About", icon: "mdi-forum" },
        { title: "About", icon: "mdi-forum" },
        { title: "About", icon: "mdi-forum" },
        { title: "About", icon: "mdi-forum" },
        { title: "About", icon: "mdi-forum" },
        { title: "About", icon: "mdi-forum" },
        { title: "About", icon: "mdi-forum" },
        { title: "About", icon: "mdi-forum" },
        { title: "About", icon: "mdi-forum" },
        { title: "About", icon: "mdi-forum" },
        { title: "About", icon: "mdi-forum" },
        { title: "About", icon: "mdi-forum" },
        { title: "About", icon: "mdi-forum" },
        { title: "About", icon: "mdi-forum" },
        { title: "About", icon: "mdi-forum" },
        { title: "About", icon: "mdi-forum" },
        { title: "About", icon: "mdi-forum" },
        { title: "About", icon: "mdi-forum" },
        { title: "About", icon: "mdi-forum" },
        { title: "About", icon: "mdi-forum" },
      ],
    };
  },
  methods: {
    toggoleDrawer() {
      this.isDrawerVisible = !this.isDrawerVisible;
    },
  },
});
export default TopBanner;
</script>
