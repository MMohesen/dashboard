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
        v-on:click="handelOnToggleDrawer"
      >
        apps
      </v-icon>
    </v-app-bar>

    <div class="overlay" :class="getDrawerClass"></div>
    <div
      class="drawer"
      :class="getDrawerClass"
      v-handle-click-outside="handelOnOutClicked"
    ></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import "./nav.styles.scss";
import DataJson from "@/data-source/app.json";
import { mapActions } from "vuex";
import store from "@/store/index";

const TopBanner = Vue.extend({
  name: "TopBanner",
  data() {
    return {
      translation: { ...DataJson?.translation.en },
    };
  },
  computed: {
    getDrawerClass() {
      return this.$store.state?.Nav?.drawer ? "show" : "";
    },
  },
  methods: {
    ...mapActions({
      toggleDrawer: "Nav/setDrawer",
    }),
    /**
     * handel on click toggle drawer
     * @returns {void}
     */
    handelOnToggleDrawer() {
      this.toggleDrawer();
    },

    /**
     * handel the event on user click out to close the drawer
     * @param event
     */
    handelOnOutClicked() {
      if (this.$store.state?.Nav?.drawer) this.toggleDrawer();
    },
  },

  directives: {
    /**
     * directive to handel user click out of the drawer
     * @directive
     */
    "handle-click-outside": {
      bind: function(el: any, binding) {
        const { bubble } = binding.modifiers;
        const clickHandler = (e: any) => {
          if (
            bubble ||
            (!el.contains(e.target) &&
              el !== e.target &&
              e.target.id !== "drawer-toggole")
          ) {
            binding.value(e);
          }
        };
        el.__vueHandleClickOutside__ = clickHandler;
        document.addEventListener("click", clickHandler, true);
      },
      unbind: function(el: any) {
        document.removeEventListener("click", el.__vueHandleClickOutside__);
        el.__vueHandleClickOutside__ = null;
      },
    },
  },
});
export default TopBanner;
</script>
