<template>
  <div class="wrapper">
    <v-row>
      <v-col lg> <h1>Drawer</h1></v-col>
    </v-row>
    <v-row>
      <v-col md>
        <v-btn depressed color="primary" @click="toggleDrawer">
          Open drawer
        </v-btn>
      </v-col>

      <v-col md>
        <v-btn depressed color="primary" @click="toggleDrawer2">
          Open drawer 2
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col lg> <h1>Dialog</h1></v-col>
    </v-row>
    <v-row>
      <v-col lg>
        <v-btn color="primary" @click="toggleDialog"> Open Dialog </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col lg> <h1>ACL</h1></v-col>
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
      <template #footer> Test Append Footer </template>
      <template #header> prepend </template>
      <template #body>
        <v-list-item v-for="item in items" :key="item.text" link>
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <router-view />
      </template>
    </AppDrawer>

    <AppDrawer
      :isVisible="isDrawer2Visible"
      :handleOnClose="toggleDrawer2"
      :width="'80vw'"
    >
      <template #body>
        <p>
          A paragraph is a series of related sentences developing a central
          idea, called the topic. Try to think about paragraphs in terms of
          thematic unity: a paragraph is a sentence or a group of sentences that
          supports one central, unified idea. Paragraphs add one idea at a time
          to your broader argument.
        </p>
      </template>
    </AppDrawer>

    <AppDialog
      :isVisible="!!isDialogVisible"
      :handleOnClose="toggleDialog"
      :fullscreen="true"
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

<script>
import { Vue } from "vue-property-decorator";
import { AppDrawer, AppDialog, $eventHub } from "@/components";
import { AbilityBuilder } from "@casl/ability";

export default Vue.extend({
  components: { AppDrawer, AppDialog },

  data() {
    return {
      isDrawerVisible: false,
      isDrawer2Visible: false,
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
    toggleDrawer() {
      this.isDrawerVisible = !this.isDrawerVisible;
    },

    toggleDrawer2() {
      this.isDrawer2Visible = !this.isDrawer2Visible;
    },

    toggleDialog() {
      this.isDialogVisible = !this.isDialogVisible;
    },

    setUserAbilityRead() {
      const { can, rules } = new AbilityBuilder();
      can("read", "Book");
      this.$ability.update(rules);
      console.log(this.$ability);
    },

    setUserAbilityManage() {
      const { can, rules } = new AbilityBuilder();
      can("manage", "Book");
      this.$ability.update(rules);
      console.log(this.$ability);
    },

    setUserAbilityDelete() {
      const { can, rules } = new AbilityBuilder();
      can("delete", "Book");
      this.$ability.update(rules);
      console.log(this.$ability);
    },
  },
});
</script>
