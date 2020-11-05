<template>
  <v-app>
    <NavBar />
    <v-main class="app-main">
      <AsideNav />
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import NavBar from "./components/nav/nav.vue";
import AsideNav from "./components/aside-nav/aside-nav.vue";
import "./styles/index.scss";

const App = Vue.extend({
  name: "App",
  components: {
    NavBar,
    AsideNav,
  },
});

export default App;
</script>
