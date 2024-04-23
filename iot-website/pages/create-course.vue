<template>
  <v-container>
    <v-form ref="form" v-model="valid" @submit.prevent="submitForm">
      <v-text-field
        v-model="course.fecha"
        label="Fecha"
        type="date"
        :rules="dateRules"
        required
      ></v-text-field>

      <v-text-field
        v-model="course.id"
        label="ID"
        type="text"
        :rules="idRules"
        required
      ></v-text-field>

      <v-text-field
        v-model="course.alumno"
        label="Alumno"
        type="text"
        :rules="alumnoRules"
        required
      ></v-text-field>

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
        v-model="course.profesor"
        label="Profesor"
        type="text"
        :rules="profesorRules"
        required
      ></v-text-field>

      <v-btn :disabled="!valid" color="success" @click="submitForm">Registrar</v-btn>

      <v-btn color="error" @click="cancel">Cancelar</v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      course: {
        fecha: null,
        id: '',
        alumno: '',
        claveCurso: '',
        nombreCurso: '',
        profesor: ''
      },
      dateRules: [
        v => !!v || 'La fecha es requerida'
      ],
      idRules: [
        v => !!v || 'El ID es requerido',
        v => !isNaN(parseFloat(v)) && isFinite(v) || 'El ID debe ser numérico'
      ],
      alumnoRules: [
        v => !!v || 'El nombre del alumno es requerido'
      ],
      claveCursoRules: [
        v => !!v || 'La clave del curso es requerida'
      ],
      nombreCursoRules: [
        v => !!v || 'El nombre del curso es requerido'
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
          this.$router.push('/consulta_cursos');
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
