<template>
  <div class="app-auth-card">
    <v-card class="auth-card rounded-0 v-sheet--outlined">
      <div class="form-box auth-box">
        <slot name="form"></slot>
      </div>
      <div class="slider-box auth-box">
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
              <label>
                A point-of-sale that helps you sell and grow {{ i }}
              </label>
              <span>https://www.posrocket.com/</span>
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
          src: require("@/assets/images/login/slider-1.png"),
        },
        {
          src: require("@/assets/images/login/slider-1.png"),
        },
        {
          src: require("@/assets/images/login/slider-1.png"),
        },
        {
          src: require("@/assets/images/login/slider-1.png"),
        },
      ],
    };
  },
});
export default AuthCard;
</script>
