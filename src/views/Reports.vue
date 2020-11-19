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
        <v-btn depressed color="success" @click="setUserAbilityRead">
          Set User Ability to Read Book
        </v-btn>
      </v-col>

      <v-col md>
        <v-btn depressed color="primary" @click="setUserAbilityManage">
          Set User Ability To Manage a Book
        </v-btn>
      </v-col>

      <v-col md>
        <Button
          :color="'error'"
          :onClick="setUserAbilityDelete"
          :title="'Set User Ability To Delete a Book'"
          :elevation="20"
          :disabled="false"
          :x-large="true"
        >
          <template #loading v-if="true">
            <v-progress-circular indeterminate :color="'light'" />
          </template>
          <template #icon v-if="true">
            <v-icon>apps</v-icon>
          </template>
        </Button>
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
      <h2>Able to Manage book</h2>
    </Can>

    <br />

    <Can do="read" :on="'Book'" field="title">
      <h2>Able to read book</h2>
    </Can>

    <br />
    <Can do="delete" :on="'Book'" field="title">
      <h2>Able to Delete book</h2>
    </Can>
    <br />
    <br />
    <div class="px-3 py-5">
      <v-row>
        <Button
          :color="'primary'"
          :title="'Primary'"
          :elevation="1"
          :x-small="true"
          :loading="true"
          class="mr-2"
        />

        <Button
          :color="'error'"
          :title="'Error'"
          :elevation="1"
          :small="true"
          class="mr-2"
        />

        <Button
          :color="'default'"
          :title="'Default'"
          :elevation="1"
          :small="true"
          class="mr-2"
        />

        <Button
          :color="'dark'"
          :title="'Dark'"
          :elevation="1"
          :small="true"
          class="mr-2"
        />

        <Button
          :color="'info'"
          :title="'Info'"
          :elevation="1"
          :small="true"
          class="mr-2"
        />
        <Button
          :color="'accent'"
          :title="'Accent'"
          :elevation="1"
          :small="true"
          class="mr-2"
        />

        <Button
          :color="'success'"
          :title="'Success'"
          :elevation="1"
          :small="true"
          class="mr-2"
        />

        <Button
          :color="'warning'"
          :title="'Warning'"
          :elevation="1"
          :small="true"
          class="mr-2"
        />
      </v-row>

      <v-row class="mt-3">
        <Button
          :color="'primary'"
          :title="'Primary'"
          :elevation="1"
          :small="true"
          class="mr-2"
        />

        <Button
          :color="'error'"
          :title="'Error'"
          :elevation="1"
          :small="true"
          class="mr-2"
        />

        <Button
          :color="'default'"
          :title="'Default'"
          :elevation="1"
          :small="true"
          :outlined="true"
          class="mr-2"
        />

        <Button
          :color="'dark'"
          :title="'Dark'"
          :elevation="1"
          :small="true"
          :outlined="true"
          class="mr-2"
        />

        <Button
          :color="'info'"
          :title="'Info'"
          :elevation="1"
          :small="true"
          :outlined="true"
          class="mr-2"
        />
        <Button
          :color="'accent'"
          :title="'Accent'"
          :elevation="1"
          :small="true"
          :outlined="true"
          class="mr-2"
        />

        <Button
          :color="'success'"
          :title="'Success'"
          :elevation="1"
          :small="true"
          :outlined="true"
          class="mr-2"
        />

        <Button
          :color="'warning'"
          :title="'Warning'"
          :elevation="1"
          :small="true"
          :outlined="true"
          class="mr-2"
        />
      </v-row>

      <v-row class="mt-3">
        <Input label="Passwors" placeholder="Password" outlined />
      </v-row>
    </div>
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
      console.log(test);
      log("App Log *****************************");
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
