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
              v-model="form.sub_domain"
              :label="$vuetify.lang.t('$vuetify.sub_domain')"
              :placeholder="$vuetify.lang.t('$vuetify.sub_domain')"
              class="input-md rtl-text-align-start"
              :error-messages="
                error.sub_domain &&
                $vuetify.lang.t(`$vuetify.${error.sub_domain}`)
              "
              @keyup="() => validate('sub_domain')"
              outlined
            />
            <span class="domain-title"> .posrocket.com </span>
          </div>
          <div class="input-container">
            <Input
              v-model="form.email"
              :label="$vuetify.lang.t('$vuetify.email_address')"
              :placeholder="$vuetify.lang.t('$vuetify.email_address')"
              :error-messages="
                error.email && $vuetify.lang.t(`$vuetify.${error.email}`)
              "
              @keyup="() => validate('email')"
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
            large
            :onClick="doReset"
            :disabled="!is_submit_enabled"
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
          {{ $vuetify.lang.t("$vuetify.success_reset_title") }}
        </label>
        <p class="reset-success-paragraph">
          {{ $vuetify.lang.t("$vuetify.success_reset_message") }}
        </p>
      </div>
    </template>
  </AuthCard>
</template>

<script lang="ts">
import AuthCard from "@/components/auth/index.vue";
import { mapActions, mapGetters } from "vuex";
import * as yup from "yup";
import Vue from "vue";
import "./styles.scss";

const loginFormSchema = yup.object().shape({
  email: yup.string().required("invalid_email").email("invalid_email"),
  sub_domain: yup.string().required("invalid_sub_domain"),
});

const ResetPage = Vue.extend({
  name: "ResetPage",
  components: { AuthCard },
  data() {
    return {
      isSuccess: false,
      form: {
        email: "o.shagooj@gmail.com",
        sub_domain: "burger",
      },
      validation_message: "",
      is_submit_enabled: true,
      error: {
        email: "",
        sub_domain: "",
      },
    };
  },
  methods: {
    ...mapActions({
      doResetPassword: "User/doResetPassword",
    }),

    ...mapGetters({
      success: "User/success",
      responseError: "User/error",
    }),

    validate(field: any) {
      return loginFormSchema
        .validateAt(field, this.form)
        .then(() => {
          this.error[field] = "";
          this.is_submit_enabled = true;
        })
        .catch((error) => {
          this.is_submit_enabled = false;
          this.error[field] = error?.message;
        });
    },

    async doReset() {
      loginFormSchema
        .validate(this.form)
        .then(async () => {
          await this.doResetPassword(this.form);
          this.validation_message = "";
        })
        .catch((err: any) => {
          this.is_submit_enabled = false;
          this.validation_message = this.$vuetify.lang.t(
            "$vuetify.fill_all_required_fields_message"
          );
        })
        .finally(() => {
          this.isSuccess = this.success();
          if (!this.isSuccess) {
            const { message } = this.responseError();
            this.validation_message = message;
          }
        });
    },
  },
});
export default ResetPage;
</script>
