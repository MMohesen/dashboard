<template>
  <v-btn @click="onClick" v-bind="resetProps">
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
  padding: 0px 15px;
}
</style>
