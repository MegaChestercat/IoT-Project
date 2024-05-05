<template>
  <div class="canvas-container">
    <canvas ref="canvas" class="my-canvas"></canvas>
  </div>
</template>

<style setup>
/*.canvas-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.my-canvas {
  width: 400px !important;
  height: 300px !important;
}*/
</style>

<script setup>
import { ref, onMounted } from 'vue';
import Chart from 'chart.js/auto';

const canvas = ref(null);
let myChart = null;

const chartData = ref({
  labels: [], // Will be career names
  datasets: [{
    label: 'Number of Students',
    backgroundColor: 'rgba(255, 146, 0, 0.31)',
    borderColor: 'orange',
    borderWidth: 1,
    data: [], // Will hold student counts for each career
  }]
});

const chartOptions = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'Top 10 Carreras con Mayor Número de Estudiantes',
      padding: {
        top: 10,
        bottom: 30
      },
      font: {
        size: 12
      }
    }
  },
  scales: {
    y: {
      beginAtZero: true,
    },
    x: { // Added customizations for the x-axis
      ticks: {
        autoSkip: false, // Prevents skipping of labels
        maxRotation: 45, // Rotates labels to 45 degrees
        minRotation: 45,
        font: {
          size: 10 // Smaller font size for x-axis labels
        } // Min rotation to keep it uniform
      }
    }
  }
};

async function fetchTopCareers() {
  try {
    // Ensure this URL corresponds to your API endpoint for fetching top careers data
    const response = await fetch('/api/users/top10careers');
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch top careers data:', error);
  }
}

onMounted(async () => {
  const topCareersData = await fetchTopCareers();
  if (topCareersData) {
    chartData.value.labels = topCareersData.map(career => career._id);
    chartData.value.datasets[0].data = topCareersData.map(career => career.studentCount);

    myChart = new Chart(canvas.value.getContext('2d'), {
      type: 'bar',
      data: chartData.value,
      options: chartOptions
    });
  }
});

</script>
