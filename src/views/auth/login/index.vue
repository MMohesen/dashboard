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
              v-model="form.sub_domain"
              :label="$vuetify.lang.t('$vuetify.sub_domain')"
              :placeholder="$vuetify.lang.t('$vuetify.sub_domain')"
              class="input-md rtl-text-align-start"
              :error-messages="
                error.sub_domain &&
                $vuetify.lang.t(`$vuetify.${error.sub_domain}`)
              "
              autocomplete="off"
              outlined
              @keyup="() => validate('sub_domain')"
            />
            <span class="domain-title"> .posrocket.com </span>
          </div>
          <div class="input-container">
            <v-text-field
              :label="$vuetify.lang.t('$vuetify.email_address')"
              :placeholder="$vuetify.lang.t('$vuetify.email_address')"
              :error-messages="
                error.email && $vuetify.lang.t(`$vuetify.${error.email}`)
              "
              autocomplete="off"
              v-model="form.email"
              outlined
              @keyup="() => validate('email')"
            />
          </div>
          <div class="input-container">
            <v-text-field
              :label="$vuetify.lang.t('$vuetify.password')"
              :placeholder="$vuetify.lang.t('$vuetify.password')"
              :type="is_password_visible ? 'text' : 'password'"
              v-model="form.password"
              :outlined="true"
              :error-messages="
                error.password && $vuetify.lang.t(`$vuetify.${error.password}`)
              "
              autocomplete="off"
              :append-icon="
                is_password_visible ? 'visibility' : 'visibility_off'
              "
              @click:append="() => (is_password_visible = !is_password_visible)"
              @keyup="() => validate('password')"
            />
          </div>
        </div>

        <div class="remmber-box">
          <v-checkbox
            v-model="form.is_remamber"
            color="primary"
            :label="$vuetify.lang.t('$vuetify.remamber_me')"
            class="check-box"
          />
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
            large
            :onClick="login"
            :disabled="!is_submit_enabled"
            :title="$vuetify.lang.t('$vuetify.login')"
          />
          <Button
            color="default"
            elevation="0"
            class="mt-2"
            block
            large
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
import { Lang } from "@/services/helper";
import AuthCard from "@/components/auth/index.vue";
import { UserInterface } from "@/interface/user.interface";
import { mapActions, mapGetters } from "vuex";
import Storage from "@/services/storage";
import * as yup from "yup";
import Vue from "vue";
import "./styles.scss";

const loginFormSchema = yup.object().shape({
  email: yup.string().required("invalid_email").email("invalid_email"),
  password: yup.string().required("invalid_password"),
  sub_domain: yup.string().required("invalid_sub_domain"),
});

const LoginPage = Vue.extend({
  name: "LoginPage",
  components: { AuthCard },
  mounted() {
    setTimeout(() => {
      const saved_login_credentials = Storage.get("login_credentials");
      if (!!saved_login_credentials) {
        this.form = {
          ...this.form,
          ...saved_login_credentials,
        };
      }
    }, 500);
  },
  data() {
    return {
      form: {
        sub_domain: "",
        email: "",
        password: "",
        is_remamber: false,
      },
      is_submit_enabled: true,
      is_password_visible: false,
      validation_message: "",
      error: {
        email: "",
        password: "",
        sub_domain: "",
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
      responseError: "User/error",
    }),

    validate(field: any) {
      return loginFormSchema
        .validateAt(field, this.form)
        .then(() => {
          this.error[field] = "";
          this.is_submit_enabled = true;
        })
        .catch((err: any) => {
          this.is_submit_enabled = false;
          this.error[field] = err.message;
        });
    },

    async login() {
      const onSuccess = async () => {
        const { email, password, sub_domain, is_remamber } = this.form;
        const userData: UserInterface = {
          email,
          password,
          sub_domain,
        };

        if (is_remamber) {
          Storage.set("login_credentials", { ...userData, is_remamber });
        } else {
          Storage.remove("login_credentials");
        }
        await this.doLogin(userData);

        if (this.isLoggedIn()) {
          this.$router.push("/");
          return;
        }

        const { message, details } = this.responseError();

        this.validation_message =
          message ||
          this.$vuetify.lang.t("$vuetify.fill_all_required_fields_message");

        if (details)
          this.error = {
            ...this.error,
            ...details,
          };

        this.form = {
          ...this.form,
          password: "",
        };
        this.is_submit_enabled = false;
      };

      const onError = (err: any) => {
        this.validation_message = this.$vuetify.lang.t(
          "$vuetify.fill_all_required_fields_message"
        );
      };

      return loginFormSchema.validate(this.form).then(onSuccess).catch(onError);
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
