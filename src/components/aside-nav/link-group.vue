<template>
  <v-list-group
    no-action
    sub-group
    :key="item.title"
    :value="false"
    class="app-list-group"
  >
    <template #prependIcon>
      <Icon
        :path="item.icon"
        class="img-icon"
        :width="item.iconWidth"
        :height="item.iconHeight"
      />
    </template>
    <template #appendIcon>
      <Icon
        :path="require('@/assets/navbar/white-arrow.svg')"
        class="img-icon image-arrow"
        :width="item.iconWidth"
        :height="item.iconHeight"
      />
    </template>

    <template v-slot:activator>
      <v-list-item-content>
        <v-list-item-title>
          {{ $vuetify.lang.t(`$vuetify.${item.title}`) }}
        </v-list-item-title>
      </v-list-item-content>
    </template>

    <v-list-item
      v-for="(iLink, i) in item.links"
      :key="i"
      link
      :to="iLink.href"
    >
      <v-list-item-title v-text="$vuetify.lang.t(`$vuetify.${iLink.title}`)">
      </v-list-item-title>
    </v-list-item>
  </v-list-group>
</template>

<script type="ts">
import Vue from "vue";
import Links from "./links.js";
import "./styles.scss";

const LinkGroup = Vue.extend({
  name: "LinkGroup",
  props: {
    item: {
      required: true,
    },
  },
  mounted(){
      console.log("LinkGroup", this.item);
  }
});
export default LinkGroup;
</script>

<style lang="scss">
.v-navigation-drawer__content {
  overflow-x: visible !important;
  overflow-y: visible !important;
}
.app-list-group {
  position: relative !important;

  .v-list-group__header__append-icon {
    position: absolute;
    right: 0.9rem;
    margin: 0rem !important;
    width: 3rem;
    overflow: hidden;
    min-width: unset !important;
    justify-content: center !important;
  }
  .image-arrow {
    transform: rotate(0deg);
    transition: transform 0.25555s linear;
  }

  .v-list-item--active .image-arrow {
    transform: rotate(180deg);
    transition: transform 0.25555s linear;
  }
  .v-list-group__items {
    position: relative;
    .v-list-item__title {
      padding-left: 4.5rem;
      &::before {
        content: "";
        position: absolute;
        height: 0.1rem;
        width: 1rem;
        background: #d8d8d8aa;
        display: block;
        top: 0rem;
        bottom: 0rem;
        margin: auto;
        left: 4.5rem;
        z-index: 99999;
      }
    }
    &::before {
      content: "";
      position: absolute;
      height: 90%;
      width: 0.1rem;
      background: #d8d8d8aa;
      display: block;
      top: -0.3rem;
      left: 4.5rem;
      z-index: 99999;
    }
  }
}
</style>
