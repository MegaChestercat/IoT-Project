<template>
    <v-container>
      <v-form ref="form" v-model="valid" @submit.prevent="submitForm">
        <v-text-field
          v-model="user.name"
          :counter="10"
          :rules="nameRules"
          label="Nombre"
          required
        ></v-text-field>
  
        <v-text-field
          v-model="user.id"
          label="ID"
          type="number"
          :rules="idRules"
          required
        ></v-text-field>
  
        <v-select
          v-model="user.role"
          :items="roles"
          label="Rol"
          :rules="[v => !!v || 'El campo es requerido']"
          required
        ></v-select>
  
        <v-text-field
          v-model="user.career"
          label="Carrera"
          :rules="careerRules"
          required
        ></v-text-field>
  
        <v-btn :disabled="!valid" color="success" type="submit">Registrar</v-btn>
      </v-form>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'UserRegistration',
    data() {
      return {
        valid: true,
        user: {
          name: '',
          id: '',
          role: '',
          career: ''
        },
        roles: ['Estudiante', 'Profesor', 'Administrativo'],
        nameRules: [
          v => !!v || 'El nombre es requerido',
          v => (v && v.length <= 10) || 'El nombre debe ser de 10 caracteres máximo'
        ],
        idRules: [
          v => !!v || 'El ID es requerido',
          v => !isNaN(parseFloat(v)) && isFinite(v) || 'El ID debe ser numérico'
        ],
        careerRules: [
          v => !!v || 'La carrera es requerida'
        ]
      }
    },
    methods: {
      submitForm() {
        if (this.$refs.form.validate()) {
          // Lógica de envío del formulario
          console.log('Usuario registrado:', this.user);
          this.$refs.form.reset();
        }
      }
    }
  }
  </script>
  