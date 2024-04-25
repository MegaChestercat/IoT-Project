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

// Ref for the chart instance
const canvas = ref(null);
let myChart = null;

// Chart data structure
const chartData = ref({
  labels: [], // Labels for the bar chart, will be course names
  datasets: [{
    label: 'Number of Users',
    backgroundColor: 'rgba(255, 146, 0, 0.31)', // A nice shade of teal
    borderColor: 'orange', // Teal border
    borderWidth: 1,
    data: [], // Will hold user counts for each course
  }]
});

// Chart options
const chartOptions = {
  responsive: false, // Disable responsiveness to use the specified width and height
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false, // Set to false since we only have one dataset
    },
    title: {
      display: true,
      text: 'Top 10 cursos con mayor demanda', // The title text
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
    }
  }
};

// Fetch the top courses data
async function fetchTopCourses() {
  try {
    // Replace this URL with your actual endpoint that returns the top courses data
    const response = await fetch('/api/curso/top10');
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch top courses data:', error);
  }
}

// Initialize the chart with the fetched data
onMounted(async () => {
  const topCoursesData = await fetchTopCourses();
  if (topCoursesData) {
    chartData.value.labels = topCoursesData.map(course => course._id);
    chartData.value.datasets[0].data = topCoursesData.map(course => course.numberOfUsers);

    // Create the bar chart
    myChart = new Chart(canvas.value.getContext('2d'), {
      type: 'bar', // This specifies a bar chart
      data: chartData.value,
      options: chartOptions
    });
  }
});

</script>
