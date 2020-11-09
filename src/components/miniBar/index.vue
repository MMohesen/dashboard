<template>
  <div class="app-min-bar" v-handle-click-outside="handelOnOutSideClick">
    <div class="min-bar-container" :class="{ show: isVisible, right: isRight }">
      <slot name="body" />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import "./styles.scss";
const MinBar = Vue.extend({
  name: "AppDrawer",
  props: {
    isVisible: {
      required: true,
      type: Boolean,
      default: false,
    },
    handleOnClose: {
      required: true,
      type: Function,
    },
  },

  computed: {
    isRight() {
      return !this.$vuetify.rtl;
    },
  },

  methods: {
    /**
     * handel the event on user click out to close the minbar
     */
    handelOnOutSideClick() {
      if (this.isVisible) this.handleOnClose();
    },
  },

  directives: {
    /**
     * directive to handel user click out of the auto complete box
     * @directive
     */
    "handle-click-outside": {
      bind: function(el, binding) {
        const { bubble } = binding.modifiers;
        const clickHandler = (e) => {
          if (
            bubble ||
            (!el.contains(e.target) &&
              el !== e.target &&
              e.target.id !== "dashboard_services_minbar_button")
          ) {
            binding.value(e);
          }
        };
        el.__vueHandleClickOutside__ = clickHandler;
        document.addEventListener("click", clickHandler, true);
      },
      unbind: function(el) {
        document.removeEventListener("click", el.__vueHandleClickOutside__);
        el.__vueHandleClickOutside__ = null;
      },
    },
  },
});

/**
 * @name App MinBar
 * @example <MinBar
 *             :isVisible="isVisible"
 *             :handleOnClose="toggole">
 *               <template #body>...</template>
 *          </MinBar>
 * @requires {isVisible: Boolean, handleOnClose: Function}
 */
export default MinBar;
</script>
