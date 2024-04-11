<template>
  <!-- Contenedor principal -->
  <v-container>
    <!-- Fila principal -->
    <v-row>
      <!-- Columna que ocupa todo el ancho en dispositivos pequeños y 8/12 en medianos -->
      <v-col cols="12" md="8">
        <!-- Tarjeta principal -->
        <v-card>
          <!-- Barra de herramientas con título -->
          <v-toolbar color="deep-orange accent-4" dark>
            <v-toolbar-title>Horario de profesor</v-toolbar-title>
          </v-toolbar>

          <!-- Contenido de la tarjeta con el formulario -->
          <v-card-text>
            <v-form>
              <v-container>
                <v-row>
                  <!-- Campo de texto para el ID del profesor -->
                  <v-col cols="12" sm="6" md="3">
                    <v-text-field label="ID" required dense></v-text-field>
                  </v-col>
                  <!-- Campo de texto para el nombre del profesor -->
                  <v-col cols="12" sm="6" md="3">
                    <v-text-field label="Nombre" required dense></v-text-field>
                  </v-col>
                  <!-- Botón para buscar -->
                  <v-col cols="12" sm="6" md="3">
                    <v-btn color="white" class="deep-purple--text text--accent-4" dense>Buscar</v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-card-text>

          <!-- Contenido de la tarjeta con la tabla paginada -->
          <v-card-text>
            <v-data-table
              :headers="headers" <!-- Encabezados de la tabla -->
              :items="classes" <!-- Datos de las clases -->
              :items-per-page="5" <!-- Elementos por página -->
              :page.sync="page" <!-- Página actual -->
              class="elevation-1"
            ></v-data-table>
            <!-- Paginación -->
            <v-pagination
              v-model="page"
              :length="pageCount" <!-- Cantidad total de páginas -->
            ></v-pagination>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      page: 1, // Página actual
      headers: [ // Encabezados de la tabla
        { text: 'Curso', align: 'start', value: 'course' },
        { text: 'Hora de inicio', value: 'start' },
        { text: 'Hora de fin', value: 'end' },
        // Añadir más encabezados si es necesario
      ],
      classes: [ // Datos de las clases
        { course: 'Math 101', start: '9:00 AM', end: '10:30 AM' },
        { course: 'History 202', start: '11:00 AM', end: '12:30 PM' },
        { course: 'Physics 303', start: '2:00 PM', end: '3:30 PM' },
        // Añadir más clases para simular más datos
      ],
      pageCount: 3 // Cantidad total de páginas
    }
  }
}
</script>

<style scoped>
  /* Ajustar el tamaño de los botones y campos de texto */
  .v-text-field__slot {
    height: 52px; /* Altura de ejemplo, ajustar según sea necesario */
  }

  /* Ajustar los tamaños de fuente */
  .v-btn .v-btn__content,
  .v-text-field label {
    font-size: 14px; /* Tamaño de fuente de ejemplo, ajustar según sea necesario */
  }

  /* Asegurarse de que el botón coincida en tamaño con los campos de texto */
  .v-btn {
    min-height: 52px; /* Ajustar este valor para que coincida con tus campos de texto */
  }
</style>
