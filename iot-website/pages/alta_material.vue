<template>
    <v-container>
      <v-form ref="form" v-model="valid" @submit.prevent="submitMaterial">
        <v-text-field
          v-model="material.name"
          label="Nombre"
          :rules="nameRules"
          required
        ></v-text-field>
  
        <v-text-field
          v-model="material.partNumber"
          label="Número de pieza"
          :rules="partNumberRules"
          required
        ></v-text-field>
  
        <v-text-field
          v-model="material.brand"
          label="Marca"
          :rules="brandRules"
          required
        ></v-text-field>
  
        <v-text-field
          v-model="material.type"
          label="Tipo"
          :rules="typeRules"
          required
        ></v-text-field>
  
        <v-text-field
          v-model="material.lab"
          label="Laboratorio al que pertenece"
          :rules="labRules"
          required
        ></v-text-field>
  
        <v-btn :disabled="!valid" color="success" type="submit">Registrar Material</v-btn>
      </v-form>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'MaterialRegistration',
    data() {
      return {
        valid: true,
        material: {
          name: '',
          partNumber: '',
          brand: '',
          type: '',
          lab: ''
        },
        nameRules: [
          v => !!v || 'El nombre es requerido'
        ],
        partNumberRules: [
          v => !!v || 'El número de pieza es requerido'
        ],
        brandRules: [
          v => !!v || 'La marca es requerida'
        ],
        typeRules: [
          v => !!v || 'El tipo es requerido'
        ],
        labRules: [
          v => !!v || 'El laboratorio es requerido'
        ]
      }
    },
    methods: {
      submitMaterial() {
        if (this.$refs.form.validate()) {
          // Aquí puedes manejar la lógica de envío, como enviar los datos a un servidor
          console.log('Material registrado:', this.material);
          this.$refs.form.reset();
        }
      }
    }
  }
  </script>
  