<template>
  <v-container>
    <!-- Contenedor principal del formulario utilizando Vuetify -->
    <v-form ref="form" v-model="valid" @submit.prevent="submitRoom">
      <!-- Campo de texto para el nombre del salón con reglas de validación -->
      <v-text-field
        v-model="room.name"
        label="Nombre del salón"
        :rules="nameRules"
        required
      ></v-text-field>

      <!-- Campo de texto para el responsable del salón con reglas de validación -->
      <v-text-field
        v-model="room.responsible"
        label="Responsable"
        :rules="responsibleRules"
        required
      ></v-text-field>

      <!-- Botón para enviar el formulario, deshabilitado si el formulario no es válido -->
      <v-btn :disabled="!valid" color="success" type="submit">Registrar Salón</v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: 'RoomRegistration',
  data() {
    return {
      valid: true, // Indica si el formulario es válido
      room: { // Modelo de datos para el formulario
        name: '',
        responsible: ''
      },
      nameRules: [ // Reglas de validación para el nombre del salón
        v => !!v || 'El nombre del salón es requerido'
      ],
      responsibleRules: [ // Reglas de validación para el responsable del salón
        v => !!v || 'El nombre del responsable es requerido'
      ]
    }
  },
  methods: {
    submitRoom() {
      if (this.$refs.form.validate()) { // Verifica la validez del formulario
        console.log('Salón registrado:', this.room); // Registro de salón
        this.$refs.form.reset(); // Reinicia el formulario
      }
    }
  }
}
</script>
