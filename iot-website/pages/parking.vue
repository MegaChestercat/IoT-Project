<template>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1>Historial de Pagos de Estacionamiento</h1>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="12" sm="3">
          <v-text-field
            v-model="userID"
            label="ID:"
            outlined
            dense
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-model="startDate"
            label="Fecha de inicio:"
            outlined
            dense
            placeholder="DD/MM/YYYY"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-model="endDate"
            label="Fecha de Fin:"
            outlined
            dense
            placeholder="DD/MM/YYYY"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-btn color="primary" @click="searchPayments">Buscar</v-btn>
        </v-col>
      </v-row>
  
      <v-row>
        <v-col cols="12">
          <v-data-table
            :headers="headers"
            :items="payments"
            :items-per-page="5"
            class="elevation-1"
          ></v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const userID = ref('')
  const startDate = ref('')
  const endDate = ref('')
  const payments = ref([]) // This will hold the payment data
  
  const headers = [
    { text: 'ID', value: 'id' },
    { text: 'FECHA DE PAGO', value: 'paymentDate' },
    { text: 'MONTO', value: 'amount' },
    // Add other headers if necessary
  ]
  
  function searchPayments() {
    // Logic to search for payments based on the userID, startDate, and endDate
    // For example:
    console.log(`Searching payments for user ${userID.value} from ${startDate.value} to ${endDate.value}`)
    // After fetching the data, you would update the payments array
    // payments.value = fetchedPayments
  }
  </script>
  
  <style>
  /* Add your styles here */
  
  /* You can add a global class for backgrounds like this one */
  .bg-template {
    background: #EEE; /* Example background color */
  }
  </style>
  