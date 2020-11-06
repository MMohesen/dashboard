<template>
  <div class="wrapper">
    <v-btn depressed color="primary" @click="toggleDrawer">
      Open drawer
    </v-btn>
    <AppDrawer :isVisible="drawer" :handleOnClose="toggleDrawer">
      <template #header>
        Test Prepend
      </template>

      <template #body>
        Test default
      </template>
    </AppDrawer>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import { AppDrawer } from "@/components";

export default Vue.extend({
  components: { AppDrawer },
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    toggleDrawer(): void {
      this.drawer = !this.drawer;
    },
  },
});
</script>
