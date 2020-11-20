<template>
  <v-list-item :key="item.title" link :to="item.href">
    <v-list-item-icon>
      <v-img
        :lazy-src="item.icon"
        :src="item.icon"
        class="img-icon"
        :width="item.iconWidth"
        :height="item.iconHeight"
        contain
      />
    </v-list-item-icon>

    <v-list-item-content>
      <v-list-item-title>
        {{ $vuetify.lang.t(`$vuetify.${item.title}`) }}
      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script type="ts">
import Vue from "vue";
import Links from "./links.js";
import "./styles.scss";

const LinkItem = Vue.extend({
  name: "LinkItem",
  props: {
    item: {
      required: true,
      default: null,
      type: Object
    },
  },
  mounted(){
      console.log("LinkItem", this.item);
  }
});
export default LinkItem;
</script>
