<template>
  <div>
    <v-app-bar app color="black" dark>
      <v-toolbar-title>Cursos</v-toolbar-title>
    </v-app-bar>
    <v-container class="mt-16">

      <v-row align="center">
        <v-col>
          <v-text-field v-model="search" label="Buscar" single-line hide-details prepend-inner-icon="mdi-magnify"
            class="my-8"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <h3 class="ml-3">Resultados de Búsqueda:</h3>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-data-table :headers="headers" :items="filteredCourses" item-key="claveCurso" class="elevation-1">
            <template v-slot:item.action="{ item }">
              <v-btn small @click="editCourse(item)">
                Editar
              </v-btn>
            </template>
          </v-data-table>
        </v-col>
      </v-row>

      <v-dialog v-model="dialog" max-width="600px">
        <v-card>
          <v-card-title>
            Editar Curso
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-text-field v-model="editingCourse.claveCurso" label="Clave del Curso"></v-text-field>
              <v-text-field v-model="editingCourse.nombreCurso" label="Nombre del Curso"></v-text-field>
              <v-text-field v-model="editingCourse.seccion" type="number" label="Sección"></v-text-field>
              <v-text-field v-model="editingCourse.profesor" label="Profesor"></v-text-field>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="updateCourse">
              Guardar
            </v-btn>
            <v-btn color="red" text @click="closeDialog">
              Cancelar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useFetch } from 'nuxt/app';

// Table Headers
const headers = ref([
  { title: 'ID Material', value: 'claveCurso' },
  { title: 'Nombre', value: 'nombreCurso' },
  { title: 'Profesor', value: 'profesor' },
  { title: 'Sección', value: 'seccion' },
  { title: 'Acciones', value: 'action', sortable: false },
]);

// Search Term
const search = ref('');

// Fetch Materials
const { data: courses, execute: fetchCursos } = useFetch('/api/curso');

// Computed Property for Filtered Materials
const filteredCourses = computed(() => {
  return search.value.trim() ?
    courses.value.filter(course => course .nombre.toLowerCase().startsWith(search.value.toLowerCase())) :
    courses.value;
});

// Dialog State
const dialog = ref(false);

// Editing Material State
const editingCourse = ref({});

// Function to Handle Material Edit
function editCourse(course) {
  editingCourse.value = { ...course };
  dialog.value = true;
}

// Function to Update Material
async function updateCourse() {
  dialog.value = false;
  try {
    const response = await fetch(`/api/curso/${editingCourse.value._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editingCourse.value)
    });
    if (!response.ok) throw new Error('Error updating course');

    const updatedCourse = await response.json();
    console.log('Course updated:', updatedCourse);

    // Refresh the materials list
    fetchCursos();
  } catch (error) {
    console.error('Error updating course:', error);
  }
}

// Function to Close Dialog
function closeDialog() {
  dialog.value = false;
  editingCourse.value = {};
}
</script>
