<template>
  <v-btn @click="onClick" v-bind="resetProps">
    <slot name="pre-icon" />
    <span class="btn-title">
      {{ title }}
    </span>
    <slot name="icon" />
  </v-btn>
</template>

<script lang="ts">
import Vue from "vue";

const Button = Vue.extend({
  name: "Button",
  props: {
    title: {
      required: true,
      default: "",
      type: String,
    },
    onClick: {
      default: () => {},
      type: Function,
    },
  },
  computed: {
    resetProps(): any {
      return { ...this.$attrs };
    },
  },
});
export default Button;
</script>

<style lang="scss">
.btn-title {
  display: inline-block;
  padding: 0rem 1.5rem;
}
.theme--light.v-btn.v-btn--disabled:not(.v-btn--flat):not(.v-btn--text):not(.v-btn-outlined) {
  color: var(--v-white-base) !important;
  background-color: var(--v-primary-base) !important;
  opacity: 0.5;
}
</style>
