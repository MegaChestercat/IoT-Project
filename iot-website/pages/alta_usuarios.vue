<template>
  <v-container>
    <!-- Contenedor principal del formulario utilizando Vuetify -->
    <v-form ref="form" v-model="valid" @submit.prevent="submitForm">
      <!-- Campo de texto para el nombre del usuario con una longitud máxima y reglas de validación -->
      <v-text-field
        v-model="user.nombre"
        :counter="10"
        :rules="nameRules"
        label="Nombre"
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
        v-model="user.rol"
        :items="roles"
        label="Rol"
        :rules="[v => !!v || 'El campo es requerido']"
        required
      ></v-select>

      <!-- Campo de texto para la carrera del usuario con reglas de validación -->
      <v-text-field
        v-model="user.carrera"
        label="Carrera"
        :rules="careerRules"
        required
      ></v-text-field>

      <!-- Botón para enviar el formulario, deshabilitado si el formulario no es válido -->
      <v-btn :disabled="!valid" color="success" type="submit">Registrar</v-btn>

      <v-btn color="error" @click="cancel">Cancelar</v-btn>

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
        nombre: '',
        id: '',
        rol: '',
        carrera: ''
      },
      roles: ['Estudiante', 'Profesor', 'Administrativo'], // Opciones de roles para el selector
      nameRules: [ // Reglas de validación para el nombre
        v => !!v || 'El nombre es requerido',
        v => (v && v.length <= 30) || 'El nombre debe ser de 30 caracteres máximo'
      ],
      idRules: [ // Reglas de validación para el ID
        v => !!v || 'El ID es requerido',
        v => !isNaN(parseFloat(v)) && isFinite(v) || 'El ID debe ser numérico'
      ],
      careerRules: [ // Reglas de validación para la carrera
        v => !!v || 'La carrera es requerida'
      ]

    }
  },
  methods: {
    async submitForm() {
      if (this.$refs.form.validate()) {
    console.log('Entró al método con datos:', this.user);
    // console.log(":", config.MONGO_URI)
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.user)
      });
      const result = await response.json();
      console.log('result:', result);
      this.$refs.form.reset(); // Reinicia el formulario
      this.$router.push('/consulta_usuarios'); // Redirige a una página de éxito
    } catch (error) {
      console.error('Hubo un error al registrar al usuario:', error);
    }
  }
}
,
    cancel() {
      this.$router.push('/'); // Redirecciona al usuario a la ruta raíz
    }
  }
}
</script>
