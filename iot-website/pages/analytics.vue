<template>
  <div class="dashboard">
    <!-- Cards go here, if you have them -->
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
.dashboard {
  max-width: 1200px; /* Adjust as needed for your layout */
  margin: 50px;
}

.graph-row {
  display: flex;
  justify-content: space-between;
  gap: 1rem; /* Adjust the spacing between graphs as needed */
}

.graph-row > * {
  flex-basis: calc(50% - 0.5rem); /* Adjust the spacing based on 'gap' value */
  height: auto; /* Or set a fixed height if you prefer */
}

/* Styles for individual graphs, if necessary, to ensure they fill their containers */
.grafica-asistencia, .grafica-accesos, .grafica-cursos, .grafica-material {
  width: 200px;
  height: 200px !important;
}
</style>
