<template>
    <div>
        <v-layout>
            <v-navigation-drawer color="green-lighten-4" width="200" permanent>
                <NuxtLink to="/" style="text-decoration: none;">
                    <v-img src="~~/assets/logo/logo.png" class="ml-6 mt-14" width="140" cover></v-img>
                    <p style="color: black;" class="ml-5 mb-10 mt-2 font-weight-black text-h5">ID Scanner</p>
                </NuxtLink>
                <v-list lines='two'>
                    <NuxtLink to="/" class="hoverbtn" style="text-decoration: none;">
                        <v-list-item style="color: gray;" class="ml-2 my-8 hoverbtn" prepend-icon="mdi-view-dashboard"
                            title="Panel"></v-list-item>
                    </NuxtLink>

                    <v-list-item @click="Prototype" style="color: gray;" class="ml-2 my-8" prepend-icon="mdi-account-circle"
                            title="Perfil"></v-list-item>

                    <v-list-item  @click="Prototype" style="color: gray;" class="ml-2 my-8" prepend-icon="mdi-tune"
                            title="Ajustes"></v-list-item>

                    <NuxtLink to="/analytics" style="text-decoration: none;">
                        <v-list-item style="color: gray;" class="ml-2 my-8" prepend-icon="mdi-chart-bar"
                            title="Analítica"></v-list-item>
                    </NuxtLink>
                </v-list>

                <v-btn to="/login" rounded="lg" width="70%" prepend-icon="mdi-login" class="mt-5 ml-7"
                    color="orange-lighten-2">
                    LogIn
                </v-btn>
            </v-navigation-drawer>
            <v-main class="d-flex justify-center align-center" style="height: 100vh;">
                <slot />
            </v-main>
        </v-layout>
    </div>
</template>

<script setup>
import Swal from 'sweetalert2'

const Prototype = () => {
    Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Por el momento esta función no se encuentra disponible.",
    });
}
</script>

<style scoped>
.hoverbtn:hover {
    color: blue;
}
</style>