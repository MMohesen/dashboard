<template>
  <v-row class="app-drawer">
    <v-navigation-drawer
      right
      fixed
      hide-overlay
      v-model="isVisible"
      :tag="tag"
      :width="width"
    >
      <template #prepend>
        <slot name="header" />
      </template>
      <template #default>
        <slot name="body" />
      </template>
      <template #append>
        <slot name="footer" />
      </template>
    </v-navigation-drawer>
    <div
      class="app-drawer-overlay"
      v-if="isVisible"
      @click="handleOnClose"
    ></div>
  </v-row>
</template>

<script>
import Vue from "vue";
import "./styles.scss";
const AppDrawer = Vue.extend({
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
    tag: {
      default: "aside",
    },
    width: {
      default: "auto",
    },
  },
});

/**
 * @name App Drawer
 * @example <AppDrawer
 *             :isVisible="isDrawerVisible"
 *             :handleOnClose="toggoleDrawer">
 *               <template #header>...</template>
 *               <template #body>...</template>
 *               <template #footer>...</template>
 *          </AppDrawer>
 * @requires {isVisible: Boolean, handleOnClose: Function}
 */
export default AppDrawer;
</script>
