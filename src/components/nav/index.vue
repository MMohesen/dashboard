<template>
  <div class="app-nav-bar">
    <top-banner />
    <v-app-bar flat color="white" height="52">
      <div class="d-flex align-center brand-box">
        <v-img :src="this.appLogo" width="32" :alt="this.appName" />
      </div>
      <div class="links">
        <div class="burger-btn">
          <v-img
            @click="toggleLeftSide"
            :src="require('@/assets/navbar/burger.svg')"
            contain
            :width="18"
          />
        </div>
      </div>
      <v-spacer />

      <Icon
        :path="require('@/assets/navbar/search.svg')"
        @click="toggleLeftSide"
        :width="19"
        :height="19"
      />
      <Icon
        :path="require('@/assets/navbar/info.svg')"
        @click="toggleLeftSide"
        :width="20"
        :height="20"
      />
      <Icon
        :path="require('@/assets/navbar/sgnial.svg')"
        @click="toggleLeftSide"
        :width="12"
        :height="21"
      />
      <Icon
        @click="toggleLeftSide"
        :path="require('@/assets/navbar/notification.svg')"
        :width="18"
        :height="19"
      />

      <div class="text-center">
        <v-menu offset-y :right="300">
          <template v-slot:activator="{ on, attrs }">
            <div class="user-box" v-bind="attrs" v-on="on">
              <v-icon class="user-avatar" color="#ccc" v-bind="attrs" v-on="on">
                account_circle
              </v-icon>
              <div class="user-details">
                <label class="user-name">{{ userName }}</label>
                <span class="user-type">{{ userType }}</span>
              </div>
            </div>
          </template>

          <v-list dense class="user-panale">
            <v-list-item-group color="primary">
              <v-list-item>
                <v-list-item-icon>
                  <Icon
                    :path="require('@/assets/navbar/config.svg')"
                    :width="14"
                    :height="13"
                  />
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title
                    v-text="'Account Settings'"
                  ></v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item @click="logout">
                <v-list-item-icon>
                  <Icon
                    :path="require('@/assets/navbar/exit.svg')"
                    :width="14"
                    :height="13"
                  />
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="'Logout'"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import "./styles.scss";
import DataJson from "@/data-source/app.json";
import TopBanner from "./top-banner.vue";
import $eventHub from "../eventHub";
import { mapActions } from "vuex";

const NavBar = Vue.extend({
  name: "NavBar",
  components: { TopBanner },
  data() {
    return {
      appName: DataJson?.app?.name || "Not Set",
      userName: DataJson?.user?.name || "Not Set",
      userType: DataJson?.user?.type || "Not Set",
      appLogo: require("@/assets/images/header/logo.png"),
      translation: { ...DataJson?.translation.en },

      items: [
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me 2" },
      ],
    };
  },
  methods: {
    ...mapActions({
      doLogout: "User/doLogOut",
    }),

    toggleLeftSide() {
      $eventHub.$emit("toggleAppLeftSide");
    },
    async logout() {
      $eventHub.$emit("toggleAppLoader");
      this.doLogout();
      this.$router.push("/login");
    },
  },
});
export default NavBar;
</script>
