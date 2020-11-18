<template>
  <v-text-field
    :value="value"
    v-bind="resetProps"
    @input="$emit('update', $event.target.value)"
  />
</template>

<script lang="ts">
import Vue from "vue";
import "./styles.scss";
const Input = Vue.extend({
  name: "Input",
  model: {
    prop: "value",
    event: "update",
  },
  props: {
    value: {
      default: "",
    },
  },
  computed: {
    resetProps(): any {
      return { ...this.$attrs };
    },
  },
});
export default Input;
</script>
