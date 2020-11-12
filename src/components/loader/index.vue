<template>
  <div class="app-loader" v-if="isLoading">
    <v-progress-circular
      :size="70"
      :width="7"
      color="primary"
      indeterminate
    ></v-progress-circular>
  </div>
</template>

<script>
import Vue from "vue";
import { mapGetters } from "vuex";
import $eventHub from "../eventHub";

const AppLoader = Vue.component("AppLoader", {
  computed: {
    // ...mapGetters({
    //   isLoading: "App/isLoading",
    // }),
  },
  mounted() {
    $eventHub.$on("showAppLoader", this.start);
    $eventHub.$on("hideAppLoader", this.stop);
  },
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    start() {
      this.isLoading = true;
    },
    stop(timeout = 500) {
      setTimeout(() => {
        this.isLoading = false;
      }, timeout);
    },
  },
});

export default AppLoader;
</script>
<style>
.app-loader {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 10;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fffe;
}
</style>
