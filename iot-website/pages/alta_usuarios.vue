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
      v-model="user.email"
      label="Correo Electrónico"
      :rules="emailRules"
      required
    ></v-text-field>

    <v-text-field
      v-model="user.password"
      label="Contraseña"
      type="password"
      :rules="passwordRules"
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
        career: '',
        email: '',    // Nuevo campo de correo electrónico
        password: ''  // Nuevo campo de contraseña
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
      ],
      // Reglas de validación para el correo electrónico
      emailRules: [
        v => !!v || 'El correo electrónico es requerido',
        v => /.+@.+\..+/.test(v) || 'El correo electrónico debe ser válido'
      ],
      // Reglas de validación para la contraseña
      passwordRules: [
        v => !!v || 'La contraseña es requerida',
        v => v.length >= 6 || 'La contraseña debe tener al menos 6 caracteres'
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
  