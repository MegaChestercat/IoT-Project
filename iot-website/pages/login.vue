<template>
  <div>
    <div class="text-center mt-10">
      <v-text class="text-h4 font-weight-bold">Iniciar Sesión</v-text>
    </div>
    <div>
      <v-card>
        <form >
          <v-text-field     
            label="E-mail"
            clearable
          ></v-text-field>
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