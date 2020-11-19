<template>
  <div class="auth-wrapper">
    <v-card class="auth-card rounded-0 v-sheet--outlined">
      <slot name="form" />
      <div class="slider-box">
        <div class="gradients"></div>
        <v-carousel
          hide-delimiter-background
          delimiter-icon="mdi-minus"
          class="v-carousel-slider"
          :show-arrows="false"
        >
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
            class="slider-images"
            min-height="'100%'"
          >
            <div class="slide-description">
              <label>{{ $vuetify.lang.t("$vuetify.auth_slider_text") }}</label>
              <span>www.posrocket.com</span>
            </div>
          </v-carousel-item>
        </v-carousel>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import "./styles.scss";

const AuthCard = Vue.extend({
  name: "AuthCard",
  data() {
    return {
      items: [
        {
          src: require("@/assets/images/login/slide-1.png"),
        },
        {
          src: require("@/assets/images/login/slide-2.png"),
        },
      ],
    };
  },
});
export default AuthCard;
</script>
