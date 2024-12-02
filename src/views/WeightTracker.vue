<template>
  <div class="container d-flex flex-column align-items-center">
    <div
      class="animate__animated animate__bounceIn current d-flex flex-column align-items-center"
    >
      <span class="animate__animated animate__backInRight">
        {{ currentweight.weight }}
      </span>
      <small> current weight (kg) </small>
    </div>
    <div class="form">
      <form @submit.prevent="addweight">
        <input type="number" step="0.1" v-model="weightinput" />
        <input type="submit" value="add weight" />
      </form>
    </div>

    <div class="chart-container" v-if="weights && weights.length > 0">
      <h2>Last 7 Days:</h2>
      <div class="canvas">
        <canvas ref="weightChartEL"></canvas>
      </div>
      <div class="weight-history">
        <h2>weight history</h2>
        <ul class="  ">
          <li
            v-for="weight in weights"
            :key="weight"
            class="d-flex justify-content-between"
          >
            <span> {{ weight.weight }} </span>
            <small>{{ new Date(weight.date).toLocaleDateString() }} </small>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, shallowRef, watch, nextTick } from "vue";
import Chart from "chart.js/auto";
const weights = ref([]);
const weightChartEL = ref(null);
const weightChart = shallowRef(null);
const weightinput = ref(60.0);
const currentweight = computed(() => {
  return weights.value.sort((a, b) => b.date - a.date)[0] || { weight: 0 };
});
const addweight = () => {
  weights.value.push({
    weight: weightinput.value,
    date: new Date().getTime(),
  });
};
watch(
  weights,
  (newweights) => {
    const ws = [...newweights];
    if (weightChart.value) {
      weightChart.value.data.labels = ws
        .sort((a, b) => a.date - b.date)
        .map((w) => new Date(w.date).toLocaleDateString())
        .slice(-7);

      weightChart.value.data.datasets[0].data = ws
        .sort((a, b) => a.date - b.date)
        .map((w) => w.weight)
        .slice(-7);

      weightChart.value.update();
      return;
    }
    nextTick(() => {
      weightChart.value = new Chart(weightChartEL.value.getContext("2d"), {
        type: "line",
        data: {
          labels: ws
            .sort((a, b) => a.date - b.date)
            .map((w) => new Date(w.date).toLocaleDateString()),
          datasets: [
            {
              label: "weight",
              data: ws.sort((a, b) => a.date - b.date).map((w) => w.weight),
              backgroundcolor: "rgba(255,105,180,0.2)",
              borderColor: "rgb(255,105,180)",
              borderWidth: 1,
              fill: true,
            },
          ],
        },
        options: {
          resposive: true,
          maintainAspectRatio: false,
        },
      });
    });
  },
  { deep: true }
);
</script>

<style scoped>
.container {
  padding: 20px !important;
}
.current span {
  font-size: 30px;
}
h2 {
  margin: 15px 0 30px 0;
}
.current {
  margin: 60px 0;
  border-radius: 60%;
  border: 8px solid var(--primary-color);
  padding: 60px 30px;
  background-color: var(--secondary-color);
  font-weight: 700;
}
.form input[type="number"] {
  width: 400px;
  height: 35px;
  border: none;
  border-radius: 10px 0px 0px 10px;
  background-color: var(--secondary-color);
  padding-left: 10px;
}
.form input[type="submit"] {
  background-color: var(--primary-color);
  color: aliceblue;
  border: none;
  padding: 5px 10px;
  border-radius: 0px 10px 10px 00px;
}
.canvas {
  width: 101%;
}
.canvas canvas {
  max-width: 100%;
}
.chart-container {
  margin-top: 40px;
}
li {
  padding: 5px 10px;
  background-color: var(--secondary-color);
}
@media (max-width: 765px) {
  .form input[type="number"] {
    width: 200px;
    height: 35px;
  }
}
@media (max-width: 599px) {
  .current {
    margin: 60px 0;
    border-radius: 60%;
    border: 8px solid var(--primary-color);
    padding: 40px 15px;
    background-color: var(--secondary-color);
    font-weight: 500;
  }
}
</style>
