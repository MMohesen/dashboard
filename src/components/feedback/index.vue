<template>
  <div class="app-feedback">
    <router-link to="" class="feedback"> Feedback </router-link>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

const Feedback = Vue.extend({
  name: "Feedback",
});
export default Feedback;
</script>

<style lang="scss">
.app-feedback {
  position: fixed;
  right: 0px;
  z-index: 99;
  top: 0px;
  bottom: 48px;
  margin: auto;
  height: 130px;
  width: 45px;
  overflow: hidden;
}
.feedback {
  position: relative;
  width: 120px;
  height: 44px;
  background: var(--v-error-base);
  font-size: 16px;
  line-height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--v-white-base) !important;
  text-decoration: none;
  letter-spacing: 0.15px;
  transform: rotate(-90deg);
  left: -37px;
  top: 40px;
}
</style>
