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
  import { ref, onMounted, watchEffect } from 'vue';
  import Chart from 'chart.js/auto';
  
  const chartData = ref({
    labels: [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ],
    datasets: [{
      label: 'Asistencia',
      backgroundColor: 'rgba(255, 146, 0, 0.31)', // Semi-transparent purple for the fill
      borderColor: 'rgba(255, 146, 0, 0.31)', // Solid purple for the line
      data: [],
      fill: true,
      tension: 0.4, // Smooth the line
      borderWidth: 3,
      pointBackgroundColor: 'white', // Points color
      pointBorderColor: 'black', // Points border color
      pointBorderWidth: 2,
      pointRadius: 5,
      pointHoverRadius: 7,
    }]
  });
  
  const chartOptions = {
    responsive: true, // Disable responsiveness to use the specified width and height
  maintainAspectRatio: true,
    plugins: {
      tooltip: {
        enabled: true,
        mode: 'index',
        position: 'nearest',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
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
        display: false
      },
      title: {
      display: true,
      text: 'Asistencias por mes', // The title text
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
  
  // Define a function to fetch attendance data
  async function fetchAttendanceData(year) {
    try {
      const response = await fetch(`/api/asistencia?year=${year}`);
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      return await response.json();
    } catch (error) {
      console.error('Failed to fetch attendance data:', error);
    }
  }
  
  // Use onMounted lifecycle hook to fetch data and draw the chart
  onMounted(async () => {
    const year = new Date().getFullYear();
    const attendanceData = await fetchAttendanceData(year);
  
    if (attendanceData) {
      const monthlyAttendance = new Array(12).fill(0);
      attendanceData.forEach(record => {
        monthlyAttendance[record._id - 1] = record.count;
      });
  
      chartData.value.datasets[0].data = monthlyAttendance;
    }
  
    // Initialize the chart
    if (canvas.value && !myChart) {
      myChart = new Chart(canvas.value.getContext('2d'), {
        type: 'line', // Changed from 'bar' to 'line'
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
  