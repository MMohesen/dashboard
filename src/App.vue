<template>
  <v-app>
    <AppLoader />
    <NavBar v-if="isLoggedIn" />
    <v-main class="app-main">
      <AsideNavBar v-if="isLoggedIn" />
      <div class="page-container">
        <router-view />
        <Footer v-show="!isLoading && !isLoggedIn" />
      </div>
    </v-main>
    <Feedback v-show="!isLoggedIn" />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { NavBar, AsideNavBar } from "@/components";
import "./styles/index.scss";
import { mapGetters } from "vuex";
import { Lang } from "./services/helper";

const App = Vue.extend({
  name: "App",
  components: {
    NavBar,
    AsideNavBar,
  },

  data() {
    return {
      isLoading: true,
    };
  },
  async beforeCreate() {
    await this.$store.dispatch("User/singleSignOn");
    await Lang.prepare();
    this.$vuetify.lang.current = this.$store.getters["App/lang"];
    this.$vuetify.rtl = this.$store.getters["App/isRtl"];
  },

  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 201);
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
