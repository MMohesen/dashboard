<template>
  <div class="wrapper">
    <v-row>
      <v-col lg>
        <v-btn depressed color="primary" @click="toggleDrawer">
          Open drawer
        </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col lg>
        <v-btn depressed color="primary" @click="toggleDialog">
          Open Fullscreen Dialog
        </v-btn>
      </v-col>
    </v-row>
    <AppDrawer
      :isVisible="isDrawerVisible"
      :handleOnClose="toggleDrawer"
      :width="'400px'"
    >
      <template #footer>
        Test Append Footer
      </template>
      <template #header>
        prepend
      </template>
      <template #body>
        <v-list-item
          v-for="item in items"
          :key="item.text"
          link
          :to="item.href"
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <router-view />
      </template>
    </AppDrawer>

    <AppDialog
      :isVisible="isDialogVisible"
      :handleOnClose="toggleDialog"
      :fullscreen="false"
      :width="'auto'"
      :transition="'scroll-x-reverse-transition'"
    >
    </AppDialog>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import { AppDrawer, AppDialog } from "@/components";

export default Vue.extend({
  components: { AppDrawer, AppDialog },
  data() {
    return {
      isDrawerVisible: false,
      isDialogVisible: false,
      alignments: ["start", "center", "end"],
      items: [
        { text: "reports", href: "/reports" },
        { text: "catalog", href: "/catalog" },
      ],
    };
  },

  computed: {
    getItems() {
      return [...Array(100)].map((item, index) => {
        return { title: `item ${!item && index}` };
      });
    },
  },
  methods: {
    toggleDrawer(): void {
      this.isDrawerVisible = !this.isDrawerVisible;
    },
    toggleDialog(): void {
      this.isDialogVisible = !this.isDialogVisible;
    },
  },
});
</script>

/**

<v-list dense>
          <v-list-item v-for="(item, index) in getItems" :key="index" link>
            <v-list-item-content style="min=width:500">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

*/
