<template>
  <div class="wrapper">
    <data-table />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DataTable from "@/components/table/index.vue";

@Component({
  components: {
    DataTable,
  },
})
export default class Catalog extends Vue {}
</script>
