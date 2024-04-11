<template>
  <v-container>
    <!-- Fila para el título de la página -->
    <v-row>
      <v-col cols="12">
        <h1>Historial de Pagos de Estacionamiento</h1>
      </v-col>
    </v-row>

    <!-- Fila para los campos de búsqueda -->
    <v-row align="center">
      <!-- Campo para el ID del usuario -->
      <v-col cols="12" sm="3">
        <v-text-field
          v-model="userID"
          label="ID:"
          outlined
          dense
        ></v-text-field>
      </v-col>

      <!-- Campo para la fecha de inicio -->
      <v-col cols="12" sm="3">
        <v-text-field
          v-model="startDate"
          label="Fecha de inicio:"
          outlined
          dense
          placeholder="DD/MM/YYYY"
        ></v-text-field>
      </v-col>

      <!-- Campo para la fecha de fin -->
      <v-col cols="12" sm="3">
        <v-text-field
          v-model="endDate"
          label="Fecha de Fin:"
          outlined
          dense
          placeholder="DD/MM/YYYY"
        ></v-text-field>
      </v-col>

      <!-- Botón para buscar los pagos -->
      <v-col cols="12" sm="3">
        <v-btn color="primary" @click="searchPayments">Buscar</v-btn>
      </v-col>
    </v-row>

    <!-- Fila para la tabla de datos -->
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

// ID del usuario
const userID = ref('')

// Fecha de inicio
const startDate = ref('')

// Fecha de fin
const endDate = ref('')

// Array para almacenar los datos de los pagos
const payments = ref([])

// Encabezados de la tabla de pagos
const headers = [
  { text: 'ID', value: 'id' },
  { text: 'FECHA DE PAGO', value: 'paymentDate' },
  { text: 'MONTO', value: 'amount' },
  // Añade otros encabezados si es necesario
]

// Función para buscar los pagos
function searchPayments() {
  // Lógica para buscar los pagos
  console.log(`Buscando pagos para el usuario ${userID.value} desde ${startDate.value} hasta ${endDate.value}`)
  // Actualizar el array de pagos después de obtener los datos
}
</script>

<style>
/* Añade tus estilos aquí */

/* Clase global para los fondos */
.bg-template {
  background: #EEE;
}
</style>
