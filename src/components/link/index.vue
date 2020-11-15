<template>
  <router-link :to="to" v-bind="resetProps">
    {{ title }}
  </router-link>
</template>

<script lang="ts">
import Vue from "vue";

const Link = Vue.extend({
  name: "Link",
  props: {
    title: {
      required: true,
      default: "",
      type: String,
    },
    to: {
      required: true,
      default: "",
      type: String,
    },
  },
  computed: {
    resetProps(): any {
      return { ...this.$attrs };
    },
  },
});
export default Link;
</script>

<style lang="scss">
.v-link {
}
</style>
