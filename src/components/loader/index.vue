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

const AppLoader = Vue.component("AppLoader", {
  computed: {
    ...mapGetters({
      isLoading: "App/isLoading",
    }),
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
