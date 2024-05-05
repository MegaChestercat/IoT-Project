<template>
  <div class="canvas-container">
    <!-- Set the width and height attributes directly on the canvas -->
    <canvas ref="donutChartCanvas" width="400" height="300"></canvas>
  </div>
</template>

<style>
.canvas-container {
  width: 100%; 
  display: flex;
  justify-content: center;
  align-items: center;
}

.my-canvas {
  width: 400px !important; 
  height: 300px !important; 
}
</style>

<script setup>
import { ref, onMounted } from 'vue';
import Chart from 'chart.js/auto';

const donutChartCanvas = ref(null);

// Function to generate shades of orange
function generateOrangeColor() {
  let r = 255; // Max red
  let g = Math.floor(Math.random() * 156) + 100; // Random green from 100 to 255
  let b = 0; // No blue
  return `rgba(${r}, ${g}, ${b}, 0.7)`; // Return RGBA color with transparency
}

onMounted(async () => {
  const response = await fetch('/api/material/distribution'); // Replace with your actual API endpoint
  if (!response.ok) {
    console.error('Failed to fetch data:', response.status);
    return;
  }
  const labData = await response.json();

  const labLabels = labData.map(lab => lab._id);
  const labCounts = labData.map(lab => lab.count);
  const backgroundColors = labData.map(() => generateOrangeColor());

  const data = {
    labels: labLabels,
    datasets: [{
      label: 'Material by Laboratory',
      data: labCounts,
      backgroundColor: backgroundColors,
      hoverOffset: 4
    }]
  };

  const options = {
    responsive: false, // Disable responsiveness to use the specified width and height
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom'
      },
      title: {
        display: true,
        text: 'Solicitud de material por lugar', // The title text
        padding: {
          top: 10,
          bottom: 30
        },
        font: {
          size: 12
        }
      }
    },
    cutout: '50%', // This creates the donut hole
  };

  new Chart(donutChartCanvas.value.getContext('2d'), {
    type: 'doughnut',
    data: data,
    options: options
  });
});
</script>
