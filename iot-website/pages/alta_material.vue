<template>
  <p class="text-center text-h3 font-weight-bold my-5">Alta Material</p>
  <v-container>
    <!-- Contenedor principal del formulario utilizando Vuetify -->
    <v-form ref="form" v-model="valid" @submit.prevent="submitMaterial">
      <!-- Campo de texto para el nombre del material con reglas de validación -->
      <v-text-field
        v-model="material.id"
        label="ID Material"
        :rules="idRules"
        required
      ></v-text-field>
      
      <v-text-field
        v-model="material.nombre"
        label="Nombre"
        :rules="nameRules"
        required
      ></v-text-field>

      <!-- Campo de texto para la marca del material con reglas de validación -->
      <v-text-field
        v-model="material.marca"
        label="Marca"
        :rules="brandRules"
        required
      ></v-text-field>

      <v-text-field
        v-model="material.cantidad"
        label="Cantidad"
        type="number"
        :rules="quantityRules"
        required
      ></v-text-field>

      <!-- Campo de texto para el tipo de material con reglas de validación -->
      <v-text-field
        v-model="material.tipo"
        label="Tipo"
        :rules="typeRules"
        required
      ></v-text-field>

      <!-- Campo de texto para especificar a qué laboratorio pertenece el material con reglas de validación -->
      <v-text-field
        v-model="material.laboratorio"
        label="Laboratorio al que pertenece"
        :rules="labRules"
        required
      ></v-text-field>

      <!-- Botón para enviar el formulario, deshabilitado si el formulario no es válido -->
      <v-btn :disabled="!valid" color="success" type="submit">Registrar Material</v-btn>
    </v-form>
  </v-container>
</template>
<script>

export default {
  name: 'MaterialRegistration',
  data() {
    return {
      valid: true, // Indicates if the form is valid
      material: { // Data model for the form
        id: '',
        nombre: '',
        cantidad: '',
        marca: '',
        tipo: '',
        laboratorio: ''
      },
      // Validation rules
      idRules: [
        v => !!v || 'El id del material es requerido'
      ],
      nameRules: [
        v => !!v || 'El nombre es requerido'
      ],
      brandRules: [
        v => !!v || 'La marca es requerida'
      ],
      typeRules: [
        v => !!v || 'El tipo es requerido'
      ],
      labRules: [
        v => !!v || 'El laboratorio es requerido'
      ],
      quantityRules: [
        v => !!v || 'La cantidad del material es requerida'
      ]
    }
  },
  methods: {
    async submitMaterial() {
      if (this.$refs.form.validate()) { // Validates the form
        try {
          // Sending the data to the server
          const response = await fetch('/api/material', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.material)
          });

          if (!response.ok) {
            throw new Error('Failed to register material');
          }

          const result = await response.json();
          console.log('Material registered:', result); // Log the server response

          this.$refs.form.reset(); // Resets the form after successful registration
          alert('Material registered successfully!'); // Show success message
        } catch (error) {
          console.error('Error registering material:', error);
          alert('Failed to register material.'); // Show error message
        }
      }
    }
  }
}
</script>
