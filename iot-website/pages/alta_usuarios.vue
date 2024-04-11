<template>
  <v-container>
    <!-- Contenedor principal del formulario utilizando Vuetify -->
    <v-form ref="form" v-model="valid" @submit.prevent="submitForm">
      <!-- Campo de texto para el nombre del usuario con una longitud máxima y reglas de validación -->
      <v-text-field
        v-model="user.name"
        :counter="10"
        :rules="nameRules"
        label="Nombre"
        required
      ></v-text-field>

      <!-- Campo de texto para el correo electrónico del usuario con reglas de validación -->
      <v-text-field
        v-model="user.email"
        label="Correo Electrónico"
        :rules="emailRules"
        required
      ></v-text-field>

      <!-- Campo de texto para la contraseña del usuario con tipo 'password' y reglas de validación -->
      <v-text-field
        v-model="user.password"
        label="Contraseña"
        type="password"
        :rules="passwordRules"
        required
      ></v-text-field>

      <!-- Campo de texto para el ID del usuario de tipo numérico con reglas de validación -->
      <v-text-field
        v-model="user.id"
        label="ID"
        type="number"
        :rules="idRules"
        required
      ></v-text-field>

      <!-- Selector para el rol del usuario con una lista de roles disponibles y una regla de validación -->
      <v-select
        v-model="user.role"
        :items="roles"
        label="Rol"
        :rules="[v => !!v || 'El campo es requerido']"
        required
      ></v-select>

      <!-- Campo de texto para la carrera del usuario con reglas de validación -->
      <v-text-field
        v-model="user.career"
        label="Carrera"
        :rules="careerRules"
        required
      ></v-text-field>

      <!-- Botón para enviar el formulario, deshabilitado si el formulario no es válido -->
      <v-btn :disabled="!valid" color="success" type="submit">Registrar</v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: 'UserRegistration',
  data() {
    return {
      valid: true, // Indica si el formulario es válido
      user: { // Modelo de datos para el formulario
        name: '',
        id: '',
        role: '',
        career: '',
        email: '',    // Campo para el correo electrónico
        password: ''  // Campo para la contraseña
      },
      roles: ['Estudiante', 'Profesor', 'Administrativo'], // Opciones de roles para el selector
      nameRules: [ // Reglas de validación para el nombre
        v => !!v || 'El nombre es requerido',
        v => (v && v.length <= 10) || 'El nombre debe ser de 10 caracteres máximo'
      ],
      idRules: [ // Reglas de validación para el ID
        v => !!v || 'El ID es requerido',
        v => !isNaN(parseFloat(v)) && isFinite(v) || 'El ID debe ser numérico'
      ],
      careerRules: [ // Reglas de validación para la carrera
        v => !!v || 'La carrera es requerida'
      ],
      emailRules: [ // Reglas de validación para el correo electrónico
        v => !!v || 'El correo electrónico es requerido',
        v => /.+@.+\..+/.test(v) || 'El correo electrónico debe ser válido'
      ],
      passwordRules: [ // Reglas de validación para la contraseña
        v => !!v || 'La contraseña es requerida',
        v => v.length >= 6 || 'La contraseña debe tener al menos 6 caracteres'
      ]
    }
  },
  methods: {
    submitForm() {
      if (this.$refs.form.validate()) { // Verifica la validez del formulario
        console.log('Usuario registrado:', this.user); // Registro de usuario
        this.$refs.form.reset(); // Reinicia el formulario
      }
    }
  }
}
</script>
