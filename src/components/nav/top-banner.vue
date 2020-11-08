<template>
  <div class="app-nav-bar">
    <v-app-bar flat color="dark" class="banar-nav" height="44">
      <p class="trial-maessage">
        {{ this.translation.banner_message }}
      </p>
      <v-spacer></v-spacer>

      <label class="lang">{{ this.translation.arabic }}</label>
      <span class="vertical-spacer"></span>
      <v-icon class="btn-apps" color="#fff" id="drawer-toggole">
        apps
      </v-icon>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import "./styles.scss";
import DataJson from "@/data-source/app.json";
import Table from "../table/index.vue";

const TopBanner = Vue.extend({
  name: "TopBanner",
  components: { Table },
  data() {
    return {
      translation: { ...DataJson?.translation.en },
    };
  },
});
export default TopBanner;
</script>
