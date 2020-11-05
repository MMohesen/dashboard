<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :options.sync="options"
      :server-items-length="totalDesserts"
      :loading="loading"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script>
import store from "@/store/index";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      totalDesserts: 0,
      desserts: [],
      loading: true,
      options: {},
      headers: [
        {
          text: "Dessert",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Calories", value: "calories" },
        { text: "Fat", value: "fat" },
        { text: "Carbs ", value: "carbs" },
        { text: "Protein ", value: "protein" },
        { text: "Iron", value: "iron" },
      ],
    };
  },
  watch: {
    options: {
      handler() {
        this.getDataFromApi();
      },
      deep: true,
    },
  },
  mounted() {
    this.getDataFromApi();
  },
  methods: {
    ...mapActions({
      getDataTable: "Table/getData",
    }),

    /**
     * getDataFromApi fake api
     * @example this.getDataFromApi();
     * @retune {void}
     */
    async getDataFromApi() {
      this.loading = true;

      const { sortBy, sortDesc, page, itemsPerPage } = this.options;
      await this.getDataTable();
      const { data } = store.state?.Table;

      let items = await this.sortData(data);

      if (itemsPerPage > 0) {
        items = items?.slice((page - 1) * itemsPerPage, page * itemsPerPage);
      }

      this.desserts = items;
      this.totalDesserts = data?.length;
      this.loading = false;
    },

    /**
     * dataTable formating
     * @example await this.sortData(data);
     * @param {array} data
     * @return {array}
     */
    async sortData(data) {
      let items = null;
      const { sortBy, sortDesc } = this.options;
      if (sortBy?.length === 1 && sortDesc?.length === 1) {
        //bubble sort
        items = data.sort((a, b) => {
          const sortA = a[sortBy[0]];
          const sortB = b[sortBy[0]];
          if (sortDesc[0]) {
            if (sortA < sortB) return 1;
            if (sortA > sortB) return -1;
            return 0;
          } else {
            if (sortA < sortB) return -1;
            if (sortA > sortB) return 1;
            return 0;
          }
        });
      }
      return items || data;
    },
  },
};
</script>
