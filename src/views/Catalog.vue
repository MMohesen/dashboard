<template>
  <div class="wrapper">
    <data-table />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Table as DataTable } from "@/components";

@Component({
  components: {
    DataTable,
  },
})
export default class Catalog extends Vue {}
</script>
