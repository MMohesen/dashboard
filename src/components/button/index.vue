<template>
  <v-btn
    :elevation="elevation"
    :color="color"
    @click="onClick"
    v-bind="resetProps"
  >
    <slot name="loading" />
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
      default: "Test Button",
      type: String,
    },
    onClick: {
      default: () => {},
      type: Function,
    },
    color: {
      default: "primary",
      type: String,
    },
    elevation: {
      default: 1,
      type: Number,
    },
    isLoading: {
      default: false,
      type: Boolean,
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
  padding: 0px 15px;
}
</style>
