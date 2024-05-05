<template>
  <div>
    <v-app-bar app color="black" dark>
      <v-toolbar-title>Acceso a Gimnasio</v-toolbar-title>
    </v-app-bar>
    <v-container class="mt-16">
      <v-row>
        <v-col>
          <v-text-field v-model="search" label="Buscar por ID de usuario" single-line hide-details
            prepend-inner-icon="mdi-magnify" class="my-8"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <h3 class="ml-3">Resultados de Búsqueda:</h3>
      </v-row>

      <!-- Fila para la tabla de datos -->
      <v-row>
        <v-col cols="12">
          <v-data-table :headers="headers" :items="filteredItems" class="elevation-1">
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      headers: [
        { title: 'ID Usuario', value: 'id_usuario' },
        { title: 'Tiempo', value: 'time' }
      ],
      items: []
    }
  },
  computed: {
    filteredItems() {
      if (!this.search.trim()) {
        return this.items;
      }

      const searchLower = this.search.toLowerCase();
      return this.items.filter(item =>
        item.id_usuario.toLowerCase().includes(searchLower)
      );
    }
  },
  created() {
    fetch('/api/gym')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        this.items = data;
      })
      .catch(error => {
        console.error('Error fetching attendances:', error);
      });
  }
}
</script>

<style scoped></style>