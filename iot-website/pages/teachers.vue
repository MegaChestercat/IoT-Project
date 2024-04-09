<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="8">
        <v-card>
          <v-toolbar color="deep-orange accent-4" dark>
            <v-toolbar-title>Horario de profesor</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="3">
                    <!-- Adjusted size using dense property for text-field -->
                    <v-text-field label="ID" required dense></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="3">
                    <!-- Adjusted size using dense property for text-field -->
                    <v-text-field label="Nombre" required dense></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="3">
                    <!-- Adjusted size using dense property for button -->
                    <v-btn color="white" class="deep-purple--text text--accent-4" dense>Buscar</v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-card-text>
          <!-- Paginated table starts here -->
          <v-card-text>
            <v-card-text>
      <v-data-table
        :title="headers"
        :items="classes"
        :items-per-page="5"
        :page.sync="page"
        class="elevation-1"
      ></v-data-table>
      <v-pagination
        v-model="page"
        :length="pageCount"
      ></v-pagination>
    </v-card-text>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      page: 1,
      headers: [
        { text: 'Curso', align: 'start', value: 'course' },
        { text: 'Hora de inicio', value: 'start' },
        { text: 'Hora de fin', value: 'end' },
        // Add more headers if needed
      ],
      classes: [
        { course: 'Math 101', start: '9:00 AM', end: '10:30 AM' },
        { course: 'History 202', start: '11:00 AM', end: '12:30 PM' },
        { course: 'Physics 303', start: '2:00 PM', end: '3:30 PM' },
        // Add more classes to simulate more data
      ],
      pageCount: 3 // Adjust accordingly
    }
  }
}
</script>

<style scoped>
  /* Adjust button and text field sizes */
  .v-text-field__slot {
    height: 52px; /* Example height, adjust as needed */
  }

  .div-vcard-text{
    padding: 10px !important;
  }
  
  /* Adjust font sizes */
  .v-btn .v-btn__content,
  .v-text-field label {
    font-size: 14px; /* Example font size, adjust as needed */
  }

  /* Ensure the button matches the text fields in size */
  .v-btn {
    min-height: 52px; /* Adjust this value to match your text fields */
  }
</style>
