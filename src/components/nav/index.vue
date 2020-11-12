<template>
  <div class="app-nav-bar">
    <top-banner />
    <v-app-bar flat color="white">
      <div class="d-flex align-center brand-box">
        <v-img :src="this.appLogo" :width="35" :alt="this.appName" />
        <span class="app-name">{{ this.appName }}</span>
      </div>
      <div class="links">
        <v-icon class="btn-action" @click="toggleLeftSide">menu</v-icon>
        <label class="page-title">{{
          this.$vuetify.lang.t("$vuetify.catalog")
        }}</label>
        <v-btn text href="/fooRoute" class="btn-link"
          >{{ this.$vuetify.lang.t("$vuetify.catalog") }}
        </v-btn>
        <v-btn text href="/fooRoute" class="btn-link">
          {{ this.$vuetify.lang.t("$vuetify.items") }}
        </v-btn>
        <v-btn text href="/fooRoute" class="btn-link">
          {{ this.$vuetify.lang.t("$vuetify.combos") }}
        </v-btn>
      </div>
      <v-spacer />

      <v-icon class="btn-action">search</v-icon>
      <v-icon class="btn-action">info</v-icon>
      <v-icon class="btn-action">flash_on</v-icon>
      <div class="user-box">
        <v-icon class="user-avatar" color="#ccc">account_circle</v-icon>
        <div class="user-details">
          <label class="user-name">{{ this.userName }}</label>
          <span class="user-type">{{ this.userType }}</span>
        </div>
      </div>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import "./styles.scss";
import DataJson from "@/data-source/app.json";
import TopBanner from "./top-banner.vue";
import $eventHub from "../eventHub";

const NavBar = Vue.extend({
  name: "NavBar",
  components: { TopBanner },
  data() {
    return {
      appName: DataJson?.app?.name || "Not Set",
      userName: DataJson?.user?.name || "Not Set",
      userType: DataJson?.user?.type || "Not Set",
      appLogo: require("@/assets/images/header/logo.png"),
      translation: { ...DataJson?.translation.en },
    };
  },
  methods: {
    toggleLeftSide() {
      $eventHub.$emit("toggleAppLeftSide");
    },
  },
});
export default NavBar;
</script>
