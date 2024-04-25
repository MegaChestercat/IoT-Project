<template>
  <div class="dashboard">
    <!-- Filas con dos gráficas cada una-->
    <div class="graph-row">
      <GraficaAsistencia />
      <GraficaAccesos />
    </div>
    <div class="graph-row">
      <GraficaCursos />
      <GraficaMaterial />
    </div>
  </div>
</template>

<script>
//Importamos los componentes
import GraficaAsistencia from '~/pages/grafica_asistencia.vue'
import GraficaAccesos from '~/pages/grafica_accesos.vue'
import GraficaCursos from '~/pages/grafica_cursos.vue'
import GraficaMaterial from '~/pages/grafica_material.vue'

export default {
  components: {
    GraficaAsistencia,
    GraficaAccesos,
    GraficaCursos,
    GraficaMaterial
  }
}
</script>


<style>
/*Definimos los estilos*/
.dashboard {
  max-width: 1200px; /* layout */
  margin: 50px;
}

.graph-row {
  display: flex;
  justify-content: space-between;
  gap: 1rem; /*Espacio entre gráficas*/
}

.graph-row > * {
  flex-basis: calc(50% - 0.5rem); /* Ajusta el espacio entre gap*/
  height: auto;
}

/* e*/
.grafica-asistencia, .grafica-accesos, .grafica-cursos, .grafica-material {
  width: 200px;
  height: 200px !important;
}
</style>
