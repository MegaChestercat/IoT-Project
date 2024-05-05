<template>
  <div>
    <v-app-bar app color="black" dark>
      <v-toolbar-title>Materiales</v-toolbar-title>
    </v-app-bar>
    <v-container class="mt-16">

      <v-row align="center">
        <!-- Campo para el ID del usuario -->
        <v-col>
          <!-- Search Input -->
          <v-text-field v-model="search" label="Buscar por nombre" single-line hide-details
            prepend-inner-icon="mdi-magnify"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <h3 class="ml-3">Resultados de Búsqueda:</h3>
      </v-row>


      <v-row>
        <v-col cols="12">
          <v-data-table :headers="headers" :items="filteredMaterials" item-key="_id" class="elevation-1">
            <!-- Action Slot for Editing -->
            <template v-slot:item.action="{ item }">
              <v-btn small @click="editMaterial(item)">
                Editar
              </v-btn>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
      <!-- Materials Data Table -->

      <!-- Edit Material Dialog -->
      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card>
          <v-card-title>Editar Material</v-card-title>
          <v-card-text>
            <v-container>
              <!-- Material Edit Form -->
              <v-text-field v-model="editingMaterial.nombre" label="Nombre"></v-text-field>
              <v-text-field v-model="editingMaterial.cantidad" type="number" label="Cantidad"></v-text-field>
              <v-text-field v-model="editingMaterial.marca" label="Marca"></v-text-field>
              <v-text-field v-model="editingMaterial.tipo" label="Tipo"></v-text-field>
              <v-text-field v-model="editingMaterial.laboratorio" label="Laboratorio"></v-text-field>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="updateMaterial">Guardar</v-btn>
            <v-btn color="red" text @click="closeDialog">Cancelar</v-btn>
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
  { title: 'ID Material', value: 'id' },
  { title: 'Nombre', value: 'nombre' },
  { title: 'Marca', value: 'marca' },
  { title: 'Tipo', value: 'tipo' },
  { title: 'Laboratorio', value: 'laboratorio' },
  { title: 'Cantidad', value: 'cantidad' },
  { title: 'Acciones', value: 'action', sortable: false },
]);

// Search Term
const search = ref('');

// Fetch Materials
const { data: materials, execute: fetchMaterials } = useFetch('/api/material');

// Computed Property for Filtered Materials
const filteredMaterials = computed(() => {
  return search.value.trim() ?
    materials.value.filter(material => material.nombre.toLowerCase().startsWith(search.value.toLowerCase())) :
    materials.value;
});

// Dialog State
const dialog = ref(false);

// Editing Material State
const editingMaterial = ref({});

// Function to Handle Material Edit
function editMaterial(material) {
  editingMaterial.value = { ...material };
  dialog.value = true;
}

// Function to Update Material
async function updateMaterial() {
  dialog.value = false;
  try {
    const response = await fetch(`/api/material/${editingMaterial.value._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editingMaterial.value)
    });
    if (!response.ok) throw new Error('Error updating material');

    const updatedMaterial = await response.json();
    console.log('Material updated:', updatedMaterial);

    // Refresh the materials list
    fetchMaterials();
  } catch (error) {
    console.error('Error updating material:', error);
  }
}

// Function to Close Dialog
function closeDialog() {
  dialog.value = false;
  editingMaterial.value = {};
}
</script>