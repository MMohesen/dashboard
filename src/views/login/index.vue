<template>
  <div class="auth-wrapper login-page">
    <v-card class="login-card">
      <div class="form-box login-box">
        <div class="card-header">
          <div class="logo"></div>
          <span class="header-message"> login to internal platform </span>
        </div>
        <div class="card-body">
          <div class="input-container">
            <v-text-field
              v-model="businessDomain"
              label="Business Domain"
              placeholder="Business Domain"
              class="input-md"
              outlined
            ></v-text-field>
            <span class="dmain-title"> .posrocket.com </span>
          </div>
          <div class="input-container">
            <v-text-field
              v-model="email"
              label="Email Address"
              placeholder="Email Address"
              outlined
            ></v-text-field>
          </div>
          <div class="input-container">
            <v-text-field
              v-model="password"
              label="Passwors"
              placeholder="Password"
              :type="passwordVisible ? 'text' : 'password'"
              outlined
              :append-icon="passwordVisible ? 'visibility' : 'visibility_off'"
              @click:append="() => (passwordVisible = !passwordVisible)"
            ></v-text-field>
          </div>
        </div>
        <div class="card-footer">
          <v-btn color="primary" elevation="2" block @click="login">
            LOGIN</v-btn
          >
        </div>
      </div>
      <div class="slider-box login-box"></div>
    </v-card>
  </div>
</template>

<script lang="ts">
import User from "@/interface/user.interface";
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
    logout() {
      this.doLogOut();
    },
  },
});
export default LoginPage;
</script>
