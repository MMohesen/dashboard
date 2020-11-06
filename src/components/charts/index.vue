<template>
  <div class="large cart-wedget">
    <line-chart :chart-data="datacollection" :options="options"></line-chart>
    <button @click="fillData()">Randomize</button>
  </div>
</template>

<script>
import LineChart from "./line.js";
import "./styles.scss";

export default {
  components: {
    LineChart,
  },
  data() {
    return {
      datacollection: null,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        fullWidth: true,
        width: "1000px",
        height: "440px",
        maintainAspectRatio: false,
      },
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: [this.getRandomInt(), this.getRandomInt()],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#FAFAC",
            data: [this.getRandomInt(), this.getRandomInt()],
          },
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [this.getRandomInt(), this.getRandomInt()],
          },
        ],
      };
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    },
  },
};
</script>

<style>
.small {
  max-width: 600px;
  margin: 150px auto;
}
</style>
