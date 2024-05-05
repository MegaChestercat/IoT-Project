<!-- consulta_usuarios.vue -->

<template>
  <div>
    <v-app-bar app color="black" dark>
      <v-toolbar-title>Usuarios</v-toolbar-title>
    </v-app-bar>
    <v-container class="mt-16"> 
      <v-row>
        <h3 class="ml-3">Resultados de Búsqueda:</h3>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-data-table :headers="headers" :items="users" item-key="id" class="elevation-1">
            <template v-slot:item.action="{ item }">
              <v-btn small @click="editUser(item)">
                Editar
              </v-btn>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>

    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          Editar Usuario
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-text-field v-model="editingUser.nombre" label="Nombre"></v-text-field>
            <v-text-field v-model="editingUser.id" label="ID"></v-text-field>
            <v-select v-model="editingUser.rol" :items="roles" label="Rol"></v-select>
            <v-text-field v-model="editingUser.carrera" label="Carrera"></v-text-field>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="updateUser(editingUser)">
            Guardar
          </v-btn>
          <v-btn color="red" text @click="closeDialog">
            Cancelar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useFetch } from 'nuxt/app';

// Define los encabezados de la tabla, incluyendo la columna de acción
const headers = ref([
  { title: 'Nombre', value: 'nombre' },
  { title: 'ID', value: 'id' },
  { title: 'Rol', value: 'rol' },
  { title: 'Carrera', value: 'carrera' },
  { title: 'Acciones', value: 'action', sortable: false },
]);

// Realiza la petición para obtener los usuarios
const { data: users } = await useFetch('/api/users');



//Actualización

const dialog = ref(false);
const editingUser = ref({});
const roles = ['Estudiante', 'Profesor', 'Administrativo'];


function editUser(user) {
  editingUser.value = { ...user };
  dialog.value = true;
}

async function updateUser(user) {
  dialog.value = false; // Cierra el diálogo mientras se actualizan los datos

  try {
    const response = await fetch(`/api/users/${user._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    if (!response.ok) throw new Error('Error al actualizar el usuario');

    const updatedUser = await response.json();
    console.log('Usuario actualizado:', updatedUser);

    // Actualizar la lista de usuarios
    window.location.reload();
    // await refreshUsers()
  } catch (error) {
    console.error('Hubo un error al actualizar al usuario:', error);
  }
}

function closeDialog() {
  dialog.value = false;
  editingUser.value = {}; // Resetear el usuario que se estaba editando
}

// async function refreshUsers() {
//   const response = await useFetch('/api/users');
//   users.value = response.data; // Actualizar los usuarios con la nueva lista
// }




</script>