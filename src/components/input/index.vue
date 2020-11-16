<template>
  <v-text-field
    v-bind="resetProps"
    @input="this.input"
    @keypress="this.keypress"
    @blur="this.blur"
    @click:append="this.appendOnClick"
  />
</template>

<script lang="ts">
import Vue from "vue";

const Input = Vue.extend({
  name: "Input",
  props: {
    appendOnClick: {
      default: () => {},
      type: Function,
    },
    value: {
      default: "",
    },
    keypress: {
      default: () => {},
      type: Function,
    },
    input: {
      default: () => {},
      type: Function,
    },
    blur: {
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
export default Input;
</script>

<style lang="scss">
.v-input {
  border-radius: 0.2rem;
  margin: 10px 0px !important;

  fieldset {
    border: 1px solid rgba(0, 0, 0, 0.32);
  }
  .v-label {
    font-weight: bold;
    font-size: 1.4rem;
    line-height: 1.4rem;
    color: var(--v-catalina-base);
  }
}
.v-text-field {
  .v-input__slot,
  .v-text-field__slot {
    height: 5rem !important;
    min-height: 5rem !important;
  }
  // text
  input {
    font-size: 1.2rem;
    line-height: 1.4rem;
    letter-spacing: 0.011rem;
    color: var(--v-gunmetal-base);
    text-indent: 1px;

    &::placeholder {
      color: var(--v-bali_hai-base) !important;
      opacity: 1;
    }
  }

  .theme--light.v-icon {
    color: #cfd8dc;
  }
}
.v-text-field--full-width .v-input__prepend-outer,
.v-text-field--full-width .v-input__prepend-inner,
.v-text-field--full-width .v-input__append-inner,
.v-text-field--full-width .v-input__append-outer,
.v-text-field--enclosed .v-input__prepend-outer,
.v-text-field--enclosed .v-input__prepend-inner,
.v-text-field--enclosed .v-input__append-inner,
.v-text-field--enclosed .v-input__append-outer {
  top: 0px;
  bottom: 0px;
  margin: auto;
}

.v-text-field__details {
  display: none;
}
.error--text {
  .v-text-field__details {
    display: block;
    margin: 0px !important;
    padding: 0px !important;
  }
}
</style>
