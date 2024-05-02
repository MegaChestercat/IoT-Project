<template>
  <p class="text-center text-h3 font-weight-bold my-5">Lista de Cursos</p>
  <v-container>
    <v-text-field
      v-model="search"
      label="Buscar"
      single-line
      hide-details
      prepend-inner-icon="mdi-magnify"
      class="my-8"
    ></v-text-field>

    <v-data-table
      :headers="headers"
      :items="filteredCourses"
      item-key="claveCurso"
      class="elevation-1"
    >
      <template v-slot:item.action="{ item }">
        <v-btn
          small
          @click="editCourse(item)"
        >
          Editar
        </v-btn>
      </template>
    </v-data-table>

    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <v-card-title>
          Editar Curso
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-text-field v-model="editingCourse.claveCurso" label="Clave del Curso"></v-text-field>
            <v-text-field v-model="editingCourse.nombreCurso" label="Nombre del Curso"></v-text-field>
            <v-text-field v-model="editingCourse.profesor" label="Profesor"></v-text-field>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="updateCourse(editingCourse)">
            Guardar
          </v-btn>
          <v-btn color="red" text @click="closeDialog">
            Cancelar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      dialog: false,
      editingCourse: {},
      headers: [
        { title: 'Clave del Curso', value: 'claveCurso' },
        { title: 'Nombre del Curso', value: 'nombreCurso' },
        { title: 'Profesor', value: 'profesor' },
        { title: 'Sección', value: 'seccion' },
        { title: 'Acciones', value: 'action', sortable: false }
      ],
      courses: []
    };
  },
  computed: {
    filteredCourses() {
      if (!this.search.trim()) {
        return this.courses;
      }

      const searchLower = this.search.toLowerCase();
      return this.courses.filter(course =>
        course.claveCurso.toLowerCase().includes(searchLower) ||
        course.nombreCurso.toLowerCase().includes(searchLower) ||
        course.seccion.toLowerCase().includes(searchLower) ||
        course.profesor.toLowerCase().includes(searchLower)
      );
    }
  },
  created() {
    fetch('/api/curso')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        this.courses = data;
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });
  },
  methods: {
    editCourse(course) {
      this.editingCourse = { ...course };
      this.dialog = true;
    },
    async updateCourse(course) {
      this.dialog = false;

      try {
        const response = await fetch(`/api/curso/${course._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(course)
        });
        if (!response.ok) throw new Error('Error updating course');

        const updatedCourse = await response.json();
        console.log('Course updated:', updatedCourse);

        this.$q.notify({
          color: 'positive',
          position: 'top',
          message: 'Curso actualizado exitosamente',
          timeout: 3000
        });
      } catch (error) {
        console.error('There was an error updating the course:', error);
        this.$q.notify({
          color: 'negative',
          position: 'top',
          message: 'Error al actualizar el curso',
          timeout: 3000
        });
      }
    },
    closeDialog() {
      this.dialog = false;
      this.editingCourse = {};
    },
    notifyUser(message, color) {
        this.$q.notify({
          color: color,
          position: 'top',
          message: message,
          timeout: 3000
        });
      }
  }
};
</script>
