<template>
  <v-footer class="app-footer">
    <div class="footer-content">
      <div class="footer-links">
        <Link
          :title="this.$vuetify.lang.t('$vuetify.footer.about_us')"
          :to="''"
          class="link"
        />
        <Link
          :title="this.$vuetify.lang.t('$vuetify.footer.email_us')"
          :to="''"
          class="link"
        />
        <Link
          :title="this.$vuetify.lang.t('$vuetify.footer.switch_lang')"
          :to="''"
          class="link"
        />
      </div>
      <span class="copy-rights">
        {{ this.$vuetify.lang.t("$vuetify.footer.copy_right_text") }}
      </span>
    </div>
    <v-row></v-row>
  </v-footer>
</template>

<script lang="ts">
import Vue from "vue";

const Footer = Vue.extend({
  name: "Footer",
});
export default Footer;
</script>

<style lang="scss">
.app-footer {
  &.v-footer {
    background-color: #edf1f7 !important;
    color: rgba(0, 0, 0, 0.87) !important;
    box-shadow: none !important;
    text-align: center;
    display: block;
    padding: 22px 0px;
  }
  .footer-content {
    min-width: 260px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .footer-links {
    margin-bottom: 5px;
    .link {
      font-size: 12px;
      line-height: 20px;
      letter-spacing: -0.0428571px;
      color: #121010;
      text-decoration: none;
      margin-right: 16px;
    }
  }
  .copy-rights {
    font-size: 12px;
    line-height: 20px;
    color: #9ea0a5;
  }
}
</style>
