<template>
  <div class="canvas-container">
    <canvas ref="canvas" class="my-canvas"></canvas>
  </div>
</template>

<style scoped>
.canvas-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.my-canvas {
  width: 400px; 
  height: 400px; 
}
</style>

<script setup>
import {ref, onMounted, watchEffect } from 'vue';
import Chart from 'chart.js/auto';

const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

const chartData = ref({
  labels: months,
  datasets: [
    {
      label: 'Acceso Recta',
      backgroundColor: 'rgba(199, 189, 176, 0.37)',
      borderColor: 'rgba(199, 189, 176, 0.97)',
      data: new Array(12).fill(0), // Initialize data for all months as 0
      fill: true,
      tension: 0.4,
      borderWidth: 3,
    },
    {
      label: 'Acceso Periférico',
      backgroundColor: 'rgba(255, 146, 0, 0.31)',
      borderColor: 'rgba(255, 146, 0, 1)',
      data: new Array(12).fill(0), // Initialize data for all months as 0
      fill: true,
      tension: 0.4,
      borderWidth: 3,
    }
  ]
});

const chartOptions = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    tooltip: {
      enabled: true,
      mode: 'index',
      position: 'nearest',
      backgroundColor: 'rgba(255, 146, 0, 0.31)',
      titleColor: '#fff',
      bodyColor: '#fff',
      cornerRadius: 3,
      caretSize: 5,
      displayColors: false,
    },
    legend: {
      display: true
    },
    title: {
      display: true,
      text: 'Accesos por mes',
      padding: {
        top: 10,
        bottom: 30
      },
      font: {
        size: 18
      }
    }
  },
  scales: {
    x: {
      grid: {
        display: false
      },
      ticks: {
        color: 'black'
      }
    },
    y: {
      grid: {
        drawBorder: false,
        color: function(context) {
          if (context.tick.value === 0) {
            return 'transparent';
          }
          return '#ebedef';
        }
      },
      ticks: {
        color: 'black',
        beginAtZero: true
      }
    }
  }
};

const canvas = ref(null);
let myChart = null;

async function fetchAccessData(year) {
  try {
    const response = await fetch(`/api/acceso/bymonth?year=${year}`);
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch access data:', error);
  }
}

onMounted(async () => {
  const year = new Date().getFullYear();
  const accessData = await fetchAccessData(year);

  if (accessData) {
    accessData.forEach((accessTypeData, index) => {
      accessTypeData.monthlyCounts.forEach(monthData => {
        chartData.value.datasets[index].data[monthData.month - 1] = monthData.count;
      });
    });
  }

  if (!myChart && canvas.value) {
    myChart = new Chart(canvas.value.getContext('2d'), {
      type: 'line',
      data: chartData.value,
      options: chartOptions
    });
  }
});

watchEffect(() => {
  if (myChart) {
    myChart.data = chartData.value;
    myChart.update();
  }
});
</script>

<style>
/* Add any additional styling here */
</style>
