<template class="bg-template">
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="pa-5 rounded-xl">
          <v-card-title class="text-h5 text-center">
            Registro del Curso <!-- Título del formulario de registro de curso -->
          </v-card-title>
          <v-form @submit.prevent="onSubmit">
            <!-- Etiqueta para el campo del nombre del curso -->
            <v-text-field
              v-model="nombre"
              label="Nombre" 
              outlined
              dense
              required
            ></v-text-field>
            <!-- Etiqueta para el campo de la clave del curso -->
            <v-text-field
              v-model="clave"
              label="Clave" 
              outlined
              dense
              required
            ></v-text-field>
            <!-- Etiqueta para el campo del nombre del profesor -->
            <v-text-field
              v-model="teacher"
              label="Teacher"
              outlined
              dense
              required
            ></v-text-field>

            <v-row>
              <v-col
                v-for="day in days"
                :key="day.value"
                cols="12"
                sm="2"
              >
              <!-- Etiqueta para el checkbox de cada día -->
                <v-checkbox
                  v-model="selectedDays"
                  :label="day.label"
                  :value="day.value"
                ></v-checkbox>
              </v-col>
            </v-row>
            <!-- Etiqueta para el campo de la hora de inicio -->
            <v-row>
              <v-col cols="12" sm="6">
                <v-time-picker
                  v-model="startTime"
                  format="ampm"
                  label="Hora de inicio" 
                  required
                ></v-time-picker>
              </v-col>
              <!-- Etiqueta para el campo de la hora de finalización -->
              <v-col cols="12" sm="6">
                <v-time-picker
                  v-model="endTime"
                  format="ampm"
                  label="Hora de finalización"
                  required
                ></v-time-picker>
              </v-col>
            </v-row>
            <!-- Etiqueta para el campo de selección de salones -->
            <v-autocomplete
              v-model="classrooms"
              label="Salón(es)"
              :items="availableClassrooms"
              chips
              small-chips
              multiple
              required
            ></v-autocomplete>

            <v-btn
              color="orange"
              class="white--text"
              block
              type="submit"
            >
              Registrar Curso <!-- Botón para enviar el formulario -->
            </v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
// Importa la función 'ref' de Vue
import { ref } from 'vue'

// Define el tipo para el objeto 'Day'
type Day = { label: string; value: string };

// Define el tipo para 'Classroom'
type Classroom = string;

// Variables reactivas para los campos del formulario
const nombre = ref<string>('')
const clave = ref<string>('')
const teacher = ref<string>('')
const selectedDays = ref<string[]>([])
const startTime = ref<string>('')
const endTime = ref<string>('')

// Variable reactiva para los salones seleccionados
const classrooms = ref<Classroom[]>([])

// Array de días para los checkboxes
const days: Day[] = [
  { label: 'L', value: 'L' },
  { label: 'M', value: 'M' },
  { label: 'X', value: 'X' }, // Asumiendo que 'X' es para el miércoles
  { label: 'J', value: 'J' },
  { label: 'V', value: 'V' },
  { label: 'S', value: 'S' },
  // ... otros días
]

// Lista de salones disponibles (ejemplo)
const availableClassrooms: Classroom[] = ['C101', 'C102', 'C103', 'C104']

// Función para validar (a completar)
function validate() {

}

// Función que se ejecuta al enviar el formulario
function onSubmit() {
 
}
</script>

<style>

</style>
