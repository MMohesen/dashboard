<template>
  <v-btn class="app-icon" icon v-on:click="$emit('click')">
    <v-icon v-if="!!name" v-bind="resetProps" class="icon">{{ name }}</v-icon>
    <v-img v-if="!!path" :src="path" v-bind="resetProps" class="icon" contain />
  </v-btn>
</template>

<script lang="ts">
import Vue from "vue";
const Icon = Vue.extend({
  name: "Icon",

  props: {
    name: {
      default: null,
      type: String,
    },
    path: {
      default: null,
      type: String,
    },
  },

  computed: {
    resetProps(): any {
      return { ...this.$attrs };
    },
  },
});
export default Icon;
</script>

<style lang="scss">
.v-btn--icon {
  width: initial !important;
  height: initial !important;
}
</style>
