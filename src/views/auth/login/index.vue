<template>
  <AuthCard>
    <template #form>
      <form class="form-box login-box">
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
            <v-text-field
              v-model="form.business_domain"
              :label="$vuetify.lang.t('$vuetify.business_domain')"
              :placeholder="$vuetify.lang.t('$vuetify.business_domain')"
              class="input-md rtl-text-align-start"
              :error-messages="
                error.business_domain &&
                $vuetify.lang.t(`$vuetify.${error.business_domain}`)
              "
              outlined
              @blur="() => validate('business_domain')"
              @keyup="() => validate('business_domain')"
            />
            <span class="dmain-title"> .posrocket.com </span>
          </div>
          <div class="input-container">
            <v-text-field
              :label="$vuetify.lang.t('$vuetify.email_address')"
              :placeholder="$vuetify.lang.t('$vuetify.email_address')"
              :error-messages="
                error.email && $vuetify.lang.t(`$vuetify.${error.email}`)
              "
              v-model="form.email"
              outlined
              @blur="() => validate('email')"
              @keyup="() => validate('email')"
            />
          </div>
          <div class="input-container">
            <v-text-field
              :label="$vuetify.lang.t('$vuetify.password')"
              :placeholder="$vuetify.lang.t('$vuetify.password')"
              :type="passwordVisible ? 'text' : 'password'"
              v-model="form.password"
              :outlined="true"
              :error-messages="
                error.password && $vuetify.lang.t(`$vuetify.${error.password}`)
              "
              :append-icon="passwordVisible ? 'visibility' : 'visibility_off'"
              :appendOnClick="() => (passwordVisible = !passwordVisible)"
              @blur="() => validate('password')"
              @keyup="() => validate('password')"
            />
          </div>
        </div>

        <div class="remmber-box">
          <v-checkbox
            v-model="form.remamberMe"
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
            elevation="0"
            block
            :onClick="login"
            :disabled="!is_submit_enabled"
            :title="$vuetify.lang.t('$vuetify.login')"
          />
          <Button
            color="default"
            elevation="0"
            class="mt-2"
            block
            text
            :onClick="switchLang"
            :title="$vuetify.lang.t('$vuetify.footer.switch_lang')"
          />
        </div>
      </form>
    </template>
  </AuthCard>
</template>

<script lang="ts">
import User from "@/interface/user.interface";
import { Lang } from "@/services/helper";
import AuthCard from "@/components/auth/index.vue";
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";
import * as yup from "yup";
import "./styles.scss";

const loginFormSchema = yup.object().shape({
  email: yup.string().required("invalid_email").email("invalid_email"),
  password: yup.string().required("invalid_password"),
  business_domain: yup.string().required("invalid_business_domain"),
});

const LoginPage = Vue.extend({
  name: "LoginPage",
  components: { AuthCard },
  data() {
    return {
      form: {
        email: "",
        password: "",
        business_domain: "",
        remamberMe: false,
      },
      is_submit_enabled: true,
      passwordVisible: false,
      validation_message: "Please Fill In The Required Fields",
      error: {
        email: "",
        password: "",
        business_domain: "",
      },
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

    validate(field: any) {
      return loginFormSchema
        .validateAt(field, this.form)
        .then(() => {
          this.error[field] = "";
          this.is_submit_enabled = true;
          console.log("this.is_submit_enabled", this.is_submit_enabled);
        })
        .catch((err: any) => {
          this.is_submit_enabled = false;
          this.error[field] = err.message;
          console.log("this.is_submit_enabled", this.is_submit_enabled);
        });
    },
    async login() {
      const userData: User = {
        email: this.form.email,
        password: this.form.password,
        business: this.form.business_domain,
        token: "Token 123456",
        username: this.form.email,
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
