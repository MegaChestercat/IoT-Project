<template >
  <div class="bg" style="height: 100vh;">
    <div class="d-flex align-center justify-center mt-12">
      <v-card width="40%" class="px-5 pb-5 rounded-xl" >
        <v-card-title class="my-3 text-center text-h4 font-weight-bold">Iniciar Sesión</v-card-title>
        <form >
          <v-text-field     
            label="Correo electrónico"
            clearable
            width="300"
            class="rounded-lg"
            variant="solo"
          ></v-text-field>
          <v-text-field     
            label="Contraseña"
            clearable
            variant="solo"
          ></v-text-field>
          <div class="d-flex justify-center">
            <v-btn rounded="lg" color="#94F68B" size="medium" class="d-inline-block px-3 py-3 text-none">
              <p>Iniciar Sesión</p>
            </v-btn>
            <v-btn to="/" color="#E95D5D" size="medium" rounded="lg" class="d-inline-block ml-3 px-3 py-3 text-none">
              <p>Cancelar</p>
            </v-btn>
          </div>
        </form>
      </v-card>
    </div>
  </div>
</template>
<script >
definePageMeta({
  layout: false
})
</script>
<style scoped>
.bg{
  background: url(https://cdn.vuetifyjs.com/images/cards/docks.jpg)
}
</style>