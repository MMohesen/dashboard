<template>
  <v-app>
    <nav-bar />
    <v-main class="app-main">
      <aside-nav-bar />
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { NavBar, AsideNavBar } from "@/components";
import "./styles/index.scss";

const App = Vue.extend({
  name: "App",
  components: {
    NavBar,
    AsideNavBar,
  },
});

export default App;
</script>
