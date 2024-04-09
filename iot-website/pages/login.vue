<template>
  <div>
    <div class="d-flex align-center justify-center mt-12">
      <v-card width="40%" class="px-5 pb-5 rounded-lg" >
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
            <v-btn rounded="lg" color="green" size="medium" class="d-block px-3 py-3 text-none">
              <p>Iniciar Sesión</p>
            </v-btn>
            <v-btn to="/index" color="red" size="medium" rounded="lg" class="d-block ml-3 px-3 py-3 text-none">
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