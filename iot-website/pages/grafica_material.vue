<template>
  <div class="canvas-container">
    <!-- Set the width and height attributes directly on the canvas -->
    <canvas ref="donutChartCanvas" width="400" height="300"></canvas>
  </div>
</template>


<style setup>
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
  
  onMounted(async () => {
    const response = await fetch('/api/material/distribution'); // Replace with your actual API endpoint
    const labData = await response.json();
  
    const labLabels = labData.map(lab => lab._id);
    const labCounts = labData.map(lab => lab.count);
  
    const data = {
      labels: labLabels,
      datasets: [{
        label: 'Material by Laboratory',
        data: labCounts,
        backgroundColor: [
          // Add as many colors as you have labs, or use a function to generate them
          'rgba(199, 189, 176, 0.97)',
          'rgba(255, 146, 0, 0.31)',
          '#FFCE56',
          // ...more colors
        ],
        hoverOffset: 4
      }]
    };
  
const options = {
  responsive: false, // Disable responsiveness to use the specified width and height
  maintainAspectRatio: false,
  plugins: {
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
  // ... any other options you have
};
  
    new Chart(donutChartCanvas.value.getContext('2d'), {
      type: 'doughnut',
      data: data,
      options: options
    });
  });
  </script>
  