<template class="bg-template">
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="pa-5 rounded-xl">
          <v-card-title class="text-h5 text-center">
            Registro del Curso
          </v-card-title>
          <v-form @submit.prevent="onSubmit">
            <v-text-field
              v-model="nombre"
              label="Nombre"
              outlined
              dense
              required
            ></v-text-field>

            <v-text-field
              v-model="clave"
              label="Clave"
              outlined
              dense
              required
            ></v-text-field>

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
                <v-checkbox
                  v-model="selectedDays"
                  :label="day.label"
                  :value="day.value"
                ></v-checkbox>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" sm="6">
                <v-time-picker
                  v-model="startTime"
                  format="ampm"
                  label="Start Time"
                  required
                ></v-time-picker>
              </v-col>
              <v-col cols="12" sm="6">
                <v-time-picker
                  v-model="endTime"
                  format="ampm"
                  label="End Time"
                  required
                ></v-time-picker>
              </v-col>
            </v-row>

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
              Registrar Curso
            </v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

type Day = { label: string; value: string };
type Classroom = string;

const nombre = ref<string>('')
const clave = ref<string>('')
const teacher = ref<string>('')
const selectedDays = ref<string[]>([])
const startTime = ref<string>('')
const endTime = ref<string>('')
const classrooms = ref<Classroom[]>([])
const days: Day[] = [
  { label: 'L', value: 'L' },
  { label: 'M', value: 'M' },
  { label: 'X', value: 'X' }, // Assuming 'X' is for Wednesday
  { label: 'J', value: 'J' },
  { label: 'V', value: 'V' },
  { label: 'S', value: 'S' },
  // ... other days
]
const availableClassrooms: Classroom[] = ['C101', 'C102', 'C103', 'C104'] // Example classroom list

function validate() {

}

function onSubmit() {
 
}
</script>

<style>

</style>
