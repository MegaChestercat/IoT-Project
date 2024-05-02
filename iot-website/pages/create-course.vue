<template>
  <p class="text-center text-h3 font-weight-bold my-5">Crear Curso</p>
  <v-container>
    <v-form ref="form" v-model="valid" @submit.prevent="submitForm">
      <v-text-field
        v-model="course.claveCurso"
        label="Clave del Curso"
        type="text"
        :rules="claveCursoRules"
        required
      ></v-text-field>

      <v-text-field
        v-model="course.nombreCurso"
        label="Nombre del Curso"
        type="text"
        :rules="nombreCursoRules"
        required
      ></v-text-field>

      <v-text-field
        v-model="course.seccion"
        label="Sección"
        type="number"
        :rules="seccionRules"
        required
      ></v-text-field>

      <v-text-field
        v-model="course.profesor"
        label="Profesor"
        type="text"
        :rules="profesorRules"
        required
      ></v-text-field>

      <div>
        <v-btn :disabled="!valid" color="success" @click="submitForm" class="mr-5">Registrar</v-btn>
        <v-btn color="error" @click="cancel">Cancelar</v-btn>
      </div>
    </v-form>
  </v-container>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  data() {
    return {
      valid: true,
      course: {
        claveCurso: '',
        nombreCurso: '',
        seccion: '',
        profesor: ''
      },
      claveCursoRules: [
        v => !!v || 'La clave del curso es requerida'
      ],
      nombreCursoRules: [
        v => !!v || 'El nombre del curso es requerido'
      ],
      seccionRules: [
        v => !!v || 'La sección del curso es requerida'
      ],
      profesorRules: [
        v => !!v || 'El nombre del profesor es requerido'
      ]
    };
  },
  methods: {
    async submitForm() {
      console.log('Submitting form');
      if (this.$refs.form.validate()) {
        try {
          const response = await fetch('/api/curso', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.course)
          });
          if (!response.ok) {
            throw new Error('Failed to register course');
          }

          const result = await response.json();
          console.log('Course registered:', result);

          this.$refs.form.reset();
          this.$router.push('/consulta_cursos'); //This action will sent the user automatically to the page insde the parethesis, once the form was sent.
          this.$q.notify({
            color: 'positive',
            position: 'top',
            message: 'Curso registrado exitosamente',
            timeout: 3000
          });
        } catch (error) {
          console.error('There was an error registering the course:', error);
          this.$q.notify({
            color: 'negative',
            position: 'top',
            message: 'Error al registrar el curso',
            timeout: 3000
          });
        }
      }
    },
    cancel() {
      this.$router.push('/');
    }
  }
};
</script>
