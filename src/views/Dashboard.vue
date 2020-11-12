<template>
  <div class="wrapper">
    <Charts />
    <AppLoader />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Charts } from "@/components";

@Component({
  components: {
    Charts,
  },
})
export default class Dashboard extends Vue {}
</script>
