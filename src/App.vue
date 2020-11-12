<template>
  <v-app>
    <nav-bar v-if="isLoggedIn" />
    <v-main class="app-main">
      <aside-nav-bar v-if="isLoggedIn" />
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { NavBar, AsideNavBar } from "@/components";
import "./styles/index.scss";
import { mapGetters } from "vuex";

const App = Vue.extend({
  name: "App",
  components: {
    NavBar,
    AsideNavBar,
  },

  created() {
    this.$store.dispatch("User/singleSignOn");

    return console.log(
      "this.isLoggedIn() => ",
      this.isLoggedIn,
      localStorage.dashboard_user
    );
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
