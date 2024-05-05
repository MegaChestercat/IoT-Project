<template>
  <div>
    <v-app-bar app color="black" dark>
      <v-toolbar-title>Historial de Pagos de Estacionamiento</v-toolbar-title>
    </v-app-bar>
    <v-container class="mt-16">
      <!-- Fila para los campos de búsqueda -->
      <v-row align="center">
        <!-- Campo para el ID del usuario -->
        <v-col>
          <v-text-field v-model="userID" label="Buscar por ID de usuario" single-line hide-details
                        prepend-inner-icon="mdi-magnify" class="my-8"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <h3 class="ml-3">Resultados de Búsqueda:</h3>
      </v-row>
      <!-- Fila para la tabla de datos -->
      <v-row>
        <v-col cols="12">
          <v-data-table :headers="headers" :items="filteredItems" :items-per-page="5" class="elevation-1"></v-data-table>
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
        fetch('/api/pagos')
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
                console.error('Error fetching payments:', error);
            });
    }
}
</script>

<style>
</style>
