<template>
  <AuthCard>
    <template #form>
      <div class="form-box login-box">
        <div class="alert-box">
          <v-alert dismissible color="error" v-show="!!validation_message">
            {{ validation_message }}
          </v-alert>
        </div>
        <div class="card-header">
          <div class="logo"></div>
        </div>
        <div class="card-body">
          <div class="input-container" dir="ltr">
            <Input
              v-model="businessDomain"
              :label="$vuetify.lang.t('$vuetify.business_domain')"
              :placeholder="$vuetify.lang.t('$vuetify.business_domain')"
              class="input-md rtl-text-align-start"
              :error-messages="error.business_domain"
              outlined
            />
            <span class="dmain-title"> .posrocket.com </span>
          </div>
          <div class="input-container">
            <Input
              v-model="email"
              :label="$vuetify.lang.t('$vuetify.email_address')"
              :placeholder="$vuetify.lang.t('$vuetify.email_address')"
              :error-messages="error.email"
              outlined
            />
          </div>
          <div class="input-container">
            <Input
              v-model="password"
              :label="$vuetify.lang.t('$vuetify.password')"
              :placeholder="$vuetify.lang.t('$vuetify.password')"
              :type="passwordVisible ? 'text' : 'password'"
              :outlined="true"
              :error-messages="error.password"
              :append-icon="passwordVisible ? 'visibility' : 'visibility_off'"
              :appendOnClick="() => (passwordVisible = !passwordVisible)"
            />
          </div>
        </div>

        <div class="remmber-box">
          <v-checkbox
            v-model="remamberMe"
            :label="$vuetify.lang.t('$vuetify.remamber_me')"
            class="check-box"
          ></v-checkbox>
          <Link
            :title="$vuetify.lang.t('$vuetify.reset_password')"
            class="link"
            :to="'reset-password'"
          />
        </div>
        <div class="card-footer">
          <Button
            color="primary"
            class="mb-5"
            elevation="2"
            block
            :onClick="login"
            :title="$vuetify.lang.t('$vuetify.login')"
          />
          <Button
            color="default"
            elevation="0"
            class="mt-2"
            block
            text
            :onClick="switchLang"
            :title="$vuetify.lang.t('$vuetify.footer.arabic')"
          />
        </div>
      </div>
    </template>
  </AuthCard>
</template>

<script lang="ts">
import User from "@/interface/user.interface";
import { Lang } from "@/services/helper";
import AuthCard from "@/components/auth/index.vue";
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";
import "./styles.scss";

const LoginPage = Vue.extend({
  name: "LoginPage",
  components: { AuthCard },
  data() {
    return {
      email: "",
      password: "",
      businessDomain: "",
      remamberMe: false,
      passwordVisible: false,
      validation_message: "Please Fill In The Required Fields",
      error: {
        email: "invalide email address",
        password: "",
        business_domain: "",
      },
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
