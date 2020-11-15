<template>
  <v-app>
    <NavBar v-if="isLoggedIn" />
    <v-main class="app-main">
      <AsideNavBar v-if="isLoggedIn" />
      <div class="page-container">
        <router-view />
        <Footer />
      </div>
    </v-main>
    <Feedback />
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
});

export default App;
</script>
