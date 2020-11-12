<template>
  <v-app>
    <nav-bar v-if="isLoggedIn" />
    <v-main class="app-main">
      <aside-nav-bar v-if="isLoggedIn" />
      <router-view />
    </v-main>
    <AppLoader />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { NavBar, AsideNavBar } from "@/components";
import "./styles/index.scss";
import { AppLoader } from "@/components";
import { mapGetters } from "vuex";
import { Lang } from "./services/helper";

const App = Vue.extend({
  name: "App",
  components: {
    NavBar,
    AsideNavBar,
    AppLoader,
  },

  async beforeCreate() {
    await this.$store.dispatch("User/singleSignOn");
    await Lang.prepare();
    this.$vuetify.lang.current = this.$store.getters["App/lang"];
    this.$vuetify.rtl = this.$store.getters["App/isRtl"];
  },

  computed: {
    ...mapGetters({
      isLoggedIn: "User/isLoggedIn",
      user: "User/user",
    }),
  },

  methods: {
    async check() {
      console.log("this.user => ", this.user);
      console.log("this.isLoggedIn => ", this.isLoggedIn);
    },
  },
});

export default App;
</script>
