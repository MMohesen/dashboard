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

    <v-row>
      <v-col md>
        <v-btn depressed color="green" @click="setUserAbilityRead">
          Set User Ability to Read Book
        </v-btn>
      </v-col>

      <v-col md>
        <v-btn depressed color="primary" @click="setUserAbilityManage">
          Set User Ability To Manage a Book
        </v-btn>
      </v-col>

      <v-col md>
        <v-btn depressed color="red" @click="setUserAbilityDelete">
          Set User Ability To Delete a Book
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

    <Can do="manage" :on="'Book'" field="title">
      <span>Able to Manage book </span>
    </Can>

    <br />

    <Can do="read" :on="'Book'" field="title">
      <span>Able to read book </span>
    </Can>

    <br />
    <Can do="delete" :on="'Book'" field="title">
      <span>Able to Delete book </span>
    </Can>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import { AppDrawer, AppDialog } from "@/components";
import { AbilityBuilder } from "@casl/ability";

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

    setUserAbilityRead(): void {
      const { can, rules } = new AbilityBuilder();
      can("read", "Book");
      this.$ability.update(rules);
      console.log(this.$ability);
    },

    setUserAbilityManage(): void {
      const { can, rules } = new AbilityBuilder();
      can("manage", "Book");
      this.$ability.update(rules);
      console.log(this.$ability);
    },

    setUserAbilityDelete(): void {
      const { can, rules } = new AbilityBuilder();
      can("delete", "Book");
      this.$ability.update(rules);
      console.log(this.$ability);
    },
  },
});
</script>
