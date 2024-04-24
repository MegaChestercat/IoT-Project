<template>
    <div>
      <canvas ref="canvas"></canvas>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, watchEffect } from 'vue';
  import Chart from 'chart.js/auto';
  
  const chartData = ref({
    labels: [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ],
    datasets: [{
      label: 'Asistencia',
      backgroundColor: '#f87979',
      data: []
    }]
  });
  
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false
  };
  
  const canvas = ref(null);
  let myChart = null;
  
  // Define a function to fetch attendance data
  async function fetchAttendanceData(year) {
    try {
      const response = await fetch(`/api/asistencia?year=${year}`
      );

      console.log(response)
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
        type: 'bar',
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
  