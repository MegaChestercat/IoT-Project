<template>
    <v-app>
      <v-app-bar app color="black" dark>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
      </v-app-bar>
  
      <v-main>
        <div class="consultation-form">
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="3">
                <v-text-field v-model="id" label="ID"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-text-field v-model="name" label="Nombre"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-menu v-model="menu1" :close-on-content-click="false" transition="scale-transition" offset-y>
                  <template v-slot:activator="{ on }">
                    <v-text-field v-model="startDate" label="Fecha de inicio" v-on="on"></v-text-field>
                  </template>
                  <v-date-picker v-model="startDate" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu1 = false">Cancel</v-btn>
                    <v-btn text color="primary" @click="$refs.menu1.save(startDate)">OK</v-btn>
                  </v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-menu v-model="menu2" :close-on-content-click="false" transition="scale-transition" offset-y>
                  <template v-slot:activator="{ on }">
                    <v-text-field v-model="endDate" label="Fecha de fin" v-on="on"></v-text-field>
                  </template>
                  <v-date-picker v-model="endDate" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu2 = false">Cancel</v-btn>
                    <v-btn text color="primary" @click="$refs.menu2.save(endDate)">OK</v-btn>
                  </v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="12" md="3">
                <v-btn color="black" dark @click="search">Buscar</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </div>
  
        <div class="search-results">
          <v-container>
            <h3>Resultados Obtenidos:</h3>
            <v-data-table :headers="headers" :items="searchResults"></v-data-table>
          </v-container>
        </div>
      </v-main>
    </v-app>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: 'Consultar Préstamo de Material',
        id: '',
        name: '',
        startDate: null,
        endDate: null,
        menu1: false,
        menu2: false,
        searchResults: [] // This will hold the search results
      };
    },
    methods: {
      search() {
        // Implement your search functionality here
        // For now, let's just simulate some search results
        this.searchResults = [
          { date: '2024-04-09', id: '43765', name: 'Juan Hernández Artiano', material: 'Material' },
          // Add more search results if needed
        ];
      }
    },
    computed: {
      headers() {
        return [
          { text: 'Fecha', value: 'date' },
          { text: 'ID', value: 'id' },
          { text: 'Nombre', value: 'name' },
          { text: 'Material', value: 'material' },
        ];
      }
    }
  };
  </script>
  
  <style scoped>
  .consultation-form {
    margin-bottom: 20px;
  }
  </style>
  