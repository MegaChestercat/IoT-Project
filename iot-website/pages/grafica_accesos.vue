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
  height: 400px !important; 
}*/
</style>
  
  <script setup>
  import { ref, onMounted, watchEffect } from 'vue';
  import Chart from 'chart.js/auto';
  
  const chartData = ref({
    labels: [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ],
    datasets: [
      {
        label: 'Acceso Recta',
        backgroundColor: 'rgba(199, 189, 176, 0.37)', // For example, pink color
        borderColor: 'rgba(199, 189, 176, 0.97)',
        data: [], // Data will be populated later
        fill: true,
        tension: 0.4,
        borderWidth: 3,
      },
      {
        label: 'Acceso Periferico',
        backgroundColor: 'rgba(255, 146, 0, 0.31)', // For example, blue color
        borderColor: 'rgba(255, 146, 0, 1)',
        data: [], // Data will be populated later
        fill: true,
        tension: 0.4,
        borderWidth: 3,
      }
    ]
  });
  
  const chartOptions = {
    responsive: true, // Disable responsiveness to use the specified width and height
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
        callbacks: {
          label: function(context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat('en-US').format(context.parsed.y);
            }
            return label;
          }
        }
      },
      legend: {
        display: true // Set to true to display the legend
      },
      title: {
      display: true,
      text: 'Accessos por mes', // The title text
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
          color: 'black' // Adjust tick colors if necessary
        }
      },
      y: {
        grid: {
          drawBorder: false,
          color: function(context) {
            if (context.tick.value === 0) {
              return 'transparent'; // Hide the y-axis zero line
            }
            return '#ebedef'; // Color of other grid lines
          }
        },
        ticks: {
          color: 'black' // Adjust tick colors if necessary
        },
        beginAtZero: true
      }
    }
  };
  
  const canvas = ref(null);
  let myChart = null;
  
  // Define a function to fetch access data
  async function fetchAccessData(year) {
    try {
      const response = await fetch(`/api/acceso?year=${year}`);
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      return await response.json();
    } catch (error) {
      console.error('Failed to fetch access data:', error);
    }
  }
  
  // Use onMounted lifecycle hook to fetch data and draw the chart
  onMounted(async () => {
    const year = new Date().getFullYear();
    const accessData = await fetchAccessData(year);

    console.log('Fetched access data:', accessData);
  
    if (accessData) {
      accessData.forEach((accessTypeData, index) => {
        // This assumes that your API returns the counts in order from January to December
        // and that it includes a count for each month
        chartData.value.datasets[index].data = accessTypeData.monthlyCounts.map(monthData => monthData.count);
      });
    }
  
    // Initialize the chart
    if (canvas.value && !myChart) {
      myChart = new Chart(canvas.value.getContext('2d'), {
        type: 'line',
        data: chartData.value,
        options: chartOptions
      });
    }
  });
  
  // Watch for updates to chartData and update the chart
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
  