<template>
    <v-container>
      <v-form ref="form" v-model="valid" @submit.prevent="submitRoom">
        <v-text-field
          v-model="room.name"
          label="Nombre del salón"
          :rules="nameRules"
          required
        ></v-text-field>
  
        <v-text-field
          v-model="room.responsible"
          label="Responsable"
          :rules="responsibleRules"
          required
        ></v-text-field>
  
        <v-btn :disabled="!valid" color="success" type="submit">Registrar Salón</v-btn>
      </v-form>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'RoomRegistration',
    data() {
      return {
        valid: true,
        room: {
          name: '',
          responsible: ''
        },
        nameRules: [
          v => !!v || 'El nombre del salón es requerido'
        ],
        responsibleRules: [
          v => !!v || 'El nombre del responsable es requerido'
        ]
      }
    },
    methods: {
      submitRoom() {
        if (this.$refs.form.validate()) {
          // Lógica de envío del formulario
          console.log('Salón registrado:', this.room);
          this.$refs.form.reset();
        }
      }
    }
  }
  </script>
  