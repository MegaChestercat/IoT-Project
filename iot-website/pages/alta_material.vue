<template>
  <v-container>
    <!-- Contenedor principal del formulario utilizando Vuetify -->
    <v-form ref="form" v-model="valid" @submit.prevent="submitMaterial">
      <!-- Campo de texto para el nombre del material con reglas de validación -->
      <v-text-field
        v-model="material.name"
        label="Nombre"
        :rules="nameRules"
        required
      ></v-text-field>

      <!-- Campo de texto para el número de pieza del material con reglas de validación -->
      <v-text-field
        v-model="material.partNumber"
        label="Número de pieza"
        :rules="partNumberRules"
        required
      ></v-text-field>

      <!-- Campo de texto para la marca del material con reglas de validación -->
      <v-text-field
        v-model="material.brand"
        label="Marca"
        :rules="brandRules"
        required
      ></v-text-field>

      <!-- Campo de texto para el tipo de material con reglas de validación -->
      <v-text-field
        v-model="material.type"
        label="Tipo"
        :rules="typeRules"
        required
      ></v-text-field>

      <!-- Campo de texto para especificar a qué laboratorio pertenece el material con reglas de validación -->
      <v-text-field
        v-model="material.lab"
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
      valid: true, // Indica si el formulario es válido
      material: { // Modelo de datos para el formulario, almacena los valores de los campos
        name: '',
        partNumber: '',
        brand: '',
        type: '',
        lab: ''
      },
      nameRules: [ // Reglas de validación para el nombre del material
        v => !!v || 'El nombre es requerido'
      ],
      partNumberRules: [ // Reglas de validación para el número de pieza
        v => !!v || 'El número de pieza es requerido'
      ],
      brandRules: [ // Reglas de validación para la marca
        v => !!v || 'La marca es requerida'
      ],
      typeRules: [ // Reglas de validación para el tipo de material
        v => !!v || 'El tipo es requerido'
      ],
      labRules: [ // Reglas de validación para especificar el laboratorio
        v => !!v || 'El laboratorio es requerido'
      ]
    }
  },
  methods: {
    submitMaterial() {
      if (this.$refs.form.validate()) { // Verifica la validez del formulario
        // Lugar para manejar la lógica de envío, como enviar datos a un servidor
        console.log('Material registrado:', this.material); // Muestra por consola el material registrado
        this.$refs.form.reset(); // Reinicia el formulario
      }
    }
  }
}
</script>
