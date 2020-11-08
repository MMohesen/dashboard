<template>
  <v-dialog
    v-model="isVisible"
    :fullscreen="fullscreen"
    :width="width"
    :transition="transition"
  >
    <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="handleOnClose">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Settings</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn dark text @click="handleOnClose">
            Save
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-list three-line subheader>
        <v-subheader>User Controls</v-subheader>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Content filtering</v-list-item-title>
            <v-list-item-subtitle
              >Set the content filtering level to restrict apps that can be
              downloaded</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Password</v-list-item-title>
            <v-list-item-subtitle
              >Require password for purchase or use password to restrict
              purchase</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list three-line subheader>
        <v-subheader>General</v-subheader>
        <v-list-item>
          <v-list-item-action>
            <v-checkbox v-model="notifications"></v-checkbox>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Notifications</v-list-item-title>
            <v-list-item-subtitle
              >Notify me about updates to apps or games that I
              downloaded</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-action>
            <v-checkbox v-model="sound"></v-checkbox>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Sound</v-list-item-title>
            <v-list-item-subtitle
              >Auto-update apps at any time. Data charges may
              apply</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-action>
            <v-checkbox v-model="widgets"></v-checkbox>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Auto-add widgets</v-list-item-title>
            <v-list-item-subtitle
              >Automatically add home screen widgets</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from "vue";
import "./styles.scss";
const AppDialog = Vue.extend({
  name: "AppDrawer",
  data() {
    return {
      notifications: false,
      sound: true,
      widgets: false,
    };
  },
  props: {
    isVisible: {
      required: false,
      type: Boolean,
      default: false,
    },
    handleOnClose: {
      required: true,
      type: Function,
    },
    fullscreen: {
      type: Boolean,
      default: true,
    },
    width: {
      type: String,
      default: "auto",
    },
    transition: {
      type: String,
      default: "dialog-bottom-transition",
    },
  },
});

/**
 * @name App AppDialog
 * @example <AppDialog
 *             :isVisible="isDialogVisible"
 *             :handleOnClose="toggoleDialog">
 *               <template #header>...</template>
 *               <template #body>...</template>
 *               <template #footer>...</template>
 *          </AppDialog>
 *
 * @param {boolean | required} isVisible
 * @param {boolean | optional} fullscreen
 * @param {boolean | string} transition
 * @param {function | required} handleOnClose
 */
export default AppDialog;
</script>
