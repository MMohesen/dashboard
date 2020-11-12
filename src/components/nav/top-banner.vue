<template>
  <div class="app-nav-bar">
    <v-app-bar flat color="dark" class="banar-nav" height="44">
      <p class="trial-maessage">
        {{ this.$vuetify.lang.t("$vuetify.banner_message") }}
      </p>
      <v-spacer></v-spacer>

      <label class="lang" @click="switchAppLang">
        {{ this.$vuetify.lang.t("$vuetify.nextLang") }}
      </label>
      <span class="vertical-spacer"></span>
      <v-icon
        class="btn-apps"
        color="#fff"
        id="dashboard_services_minbar_button"
        @click="toggleMiniBar"
      >
        apps
      </v-icon>
    </v-app-bar>
    <AppMinBar :isVisible="isVisible" :handleOnClose="toggleMiniBar" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import "./styles.scss";
import DataJson from "@/data-source/app.json";
import AppMinBar from "@/components/miniBar/index.vue";

const TopBanner = Vue.extend({
  name: "TopBanner",
  components: { AppMinBar },
  data() {
    return {
      isVisible: false,
      translation: { ...DataJson?.translation.en },
    };
  },
  methods: {
    switchAppLang(): void {
      if (this.$vuetify.lang.current === "ar") {
        this.$vuetify.lang.current = "en";
        this.$vuetify.rtl = false;
        return;
      }

      this.$vuetify.lang.current = "ar";
      this.$vuetify.rtl = true;
    },

    toggleMiniBar(): void {
      this.isVisible = !this.isVisible;
    },
  },
});
export default TopBanner;
</script>
