<template>
    <div>
      <v-sheet width="100%" height="10%" class="header-bg ml-5 mt-5">
        <p class="text-h4">Reservación de Salones</p>
      </v-sheet>
      <v-sheet class="reservation-form">
      <form @prevent.submit="submit">
        <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="3">
                <v-text-field v-model="id" label="ID"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-text-field v-model="room" label="Salón"></v-text-field>
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
              <v-col cols="12" sm="6" md="3">
                <v-text-field v-model="name" label="Nombre"></v-text-field>
              </v-col>
              <v-col cols="12" md="3">
                <v-btn color="black" dark @click="search">Buscar</v-btn>
              </v-col>
            </v-row>
          </v-container>
      </form>
      <v-sheet class="search-results">
        <v-container>
            <h3>Resultados de Búsqueda:</h3>
            <v-data-table :headers="headers" :items="searchResults"></v-data-table>
        </v-container>
      </v-sheet>
    </v-sheet>
    </div>
   
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: 'Reservación de Salones',
        id: '',
        room: '',
        startDate: null,
        endDate: null,
        name: '',
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
          { room: 'CN129', building: 'Ingenierías', id: '43765', name: 'Álvaro Fernando Oros Ramírez', date: '2024-04-09', startTime: '08:00', endTime: '10:00' },
          // Add more search results if needed
        ];
      }
    },
    computed: {
      headers() {
        return [
          { text: 'SALÓN', value: 'room' },
          { text: 'EDIFICIO', value: 'building' },
          { text: 'ID', value: 'id' },
          { text: 'NOMBRE', value: 'name' },
          { text: 'FECHA', value: 'date' },
          { text: 'HORA INICIO', value: 'startTime' },
          { text: 'HORA FIN', value: 'endTime' },
        ];
      }
    }
  };
  </script>
  
  <style scoped>
  .reservation-form {
    margin-bottom: 20px;
  }

  .header-bg{
    color: black;
  }
  </style>
  