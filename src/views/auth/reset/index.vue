<template>
  <AuthCard>
    <template #form>
      <div class="form-box reset-box" v-if="!isSuccess">
        <div class="alert-box">
          <v-alert dismissible color="error" v-show="!!validation_message">
            {{ validation_message }}
          </v-alert>
        </div>
        <div class="top-head">
          <Link
            :title="$vuetify.lang.t('$vuetify.back_to_login')"
            class="back-link"
            :to="'login'"
          />
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
        </div>

        <div class="card-footer">
          <Button
            color="primary"
            class="mb-5"
            elevation="0"
            block
            :onClick="reset"
            :title="$vuetify.lang.t('$vuetify.reset_password')"
          />
        </div>
      </div>

      <div class="form-box reset-box" v-if="isSuccess">
        <div class="alert-box">
          <v-alert dismissible color="error" v-show="!!validation_message">
            {{ validation_message }}
          </v-alert>
        </div>
        <div class="top-head">
          <Link
            :title="$vuetify.lang.t('$vuetify.back_to_login')"
            class="back-link"
            :to="'login'"
          />
        </div>
        <div class="reset-success" />
        <label class="reset-success-title">
          Password reset has been requested.
        </label>
        <p class="reset-success-paragraph">
          If the provided email exists in our system, a new password will be
          sent.
        </p>
      </div>
    </template>
  </AuthCard>
</template>

<script lang="ts">
import AuthCard from "@/components/auth/index.vue";
import Vue from "vue";
import "./styles.scss";

const ResetPage = Vue.extend({
  name: "ResetPage",
  components: { AuthCard },
  data() {
    return {
      isSuccess: false,
      email: "",
      businessDomain: "",
      validation_message: "",
      error: {
        email: "",
        business_domain: "",
      },
    };
  },
  methods: {
    reset() {
      this.isSuccess = !0;
    },
  },
});
export default ResetPage;
</script>
