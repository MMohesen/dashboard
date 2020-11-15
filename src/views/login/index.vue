<template>
  <div class="auth-wrapper login-page">
    <v-card class="login-card rounded-0 v-sheet--outlined">
      <div class="form-box login-box">
        <div class="card-header">
          <div class="logo"></div>
        </div>
        <div class="card-body">
          <div class="input-container" dir="ltr">
            <Input
              v-model="businessDomain"
              :label="this.$vuetify.lang.t('$vuetify.business_domain')"
              :placeholder="this.$vuetify.lang.t('$vuetify.business_domain')"
              class="input-md rtl-text-align-start"
              outlined
            />
            <span class="dmain-title"> .posrocket.com </span>
          </div>
          <div class="input-container">
            <Input
              v-model="email"
              :label="this.$vuetify.lang.t('$vuetify.email_address')"
              :placeholder="this.$vuetify.lang.t('$vuetify.email_address')"
              outlined
            />
          </div>
          <div class="input-container">
            <Input
              v-model="password"
              :label="this.$vuetify.lang.t('$vuetify.password')"
              :placeholder="this.$vuetify.lang.t('$vuetify.password')"
              :type="passwordVisible ? 'text' : 'password'"
              :outlined="true"
              :append-icon="passwordVisible ? 'visibility' : 'visibility_off'"
              :appendOnClick="() => (passwordVisible = !passwordVisible)"
            />
          </div>
        </div>

        <div class="remmber-box">
          <v-checkbox
            v-model="remamberMe"
            :label="this.$vuetify.lang.t('$vuetify.remamber_me')"
            class="check-box"
          ></v-checkbox>
          <Link
            :title="this.$vuetify.lang.t('$vuetify.reset_password')"
            class="link"
            :to="'lol'"
          />
        </div>
        <div class="card-footer">
          <Button
            color="primary"
            class="mb-5"
            elevation="2"
            block
            :onClick="login"
            :title="this.$vuetify.lang.t('$vuetify.login')"
          />
          <Button
            color="default"
            elevation="0"
            class="mt-2"
            block
            text
            :onClick="switchLang"
            :title="this.$vuetify.lang.t('$vuetify.footer.arabic')"
          />
        </div>
      </div>
      <div class="slider-box login-box">
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
import User from "@/interface/user.interface";
import { Lang } from "@/services/helper";
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";
import "./styles.scss";

const LoginPage = Vue.extend({
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
      businessDomain: "",
      remamberMe: false,
      passwordVisible: false,
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
  methods: {
    ...mapActions({
      doLogin: "User/doLogin",
      doLogOut: "User/doLogOut",
    }),
    ...mapGetters({
      isLoggedIn: "User/isLoggedIn",
    }),
    async login() {
      const userData: User = {
        email: this.email,
        password: this.password,
        business: this.businessDomain,
        token: "Token 123456",
        username: "Monty",
        id: 1,
      };

      await this.doLogin(userData);
      await this.$router.push("/dashboard");
    },
    switchLang() {
      Lang.switch(this);
    },
    logout() {
      this.doLogOut();
    },
  },
});
export default LoginPage;
</script>
