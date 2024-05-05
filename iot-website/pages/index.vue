<template>
    <div class="d-flex fill-height align-center bg">
        <div class="d-inline-flex ml-16 mr-16">
            <v-container>
                <v-row>
                    <v-col>
                        <v-btn to="/entrance_access" rounded="lg" prepend-icon="mdi-clock-outline" size="large"
                            height="150" width="70%" class="mt-5 ml-7 px-16" color="rgba(255, 255, 255, 0.8)" stacked>
                            <p class="text-center">Accesos Entrada</p>
                        </v-btn>

                    </v-col>
                    <v-col>
                        <v-btn to="/gym_access" rounded="lg" prepend-icon="mdi-weight-lifter" size="large" height="150"
                            width="70%" class="mt-5 ml-7 px-16" color="rgba(255, 255, 255, 0.8)" stacked>
                            <p class="text-center">Accesos Gimnasio</p>
                        </v-btn>

                    </v-col>

                </v-row>
                <v-row>
                    <v-col>
                        <v-btn to="/course_attendance" rounded="lg" prepend-icon='mdi-human-male-board' size="large"
                            height="150" width="70%" class="mt-5 ml-7 px-16" color="rgba(255, 255, 255, 0.8)" stacked>
                            <p class="text-center">Asistencias Cursos</p>
                        </v-btn>

                    </v-col>
                    <v-col>
                        <v-btn to="/prestamo_material" rounded="lg" prepend-icon='mdi-book' size="large" height="150"
                            width="70%" class="mt-5 ml-7 px-16" color="rgba(255, 255, 255, 0.8)" stacked>
                            <p class="text-center">Historial Préstamo <br>de Material</p>

                        </v-btn>

                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-btn to="/parking" rounded="lg" prepend-icon='mdi-car' size="large" height="150" width="70%"
                            class="mt-5 ml-7 px-16" color="rgba(255, 255, 255, 0.8)" stacked>
                            <p class="text-center">Historial Pagos <br>de <br>Estacionamiento</p>
                        </v-btn>

                    </v-col>
                    <v-col>
                        <v-btn to="/room_reservation" rounded="lg" prepend-icon='mdi-calendar-range' size="large"
                            height="150" width="70%" class="mt-5 ml-7 px-16" color="rgba(255, 255, 255, 0.8)" stacked>
                            <p class="text-center">Reservas de <br>Salones</p>
                        </v-btn>

                    </v-col>
                </v-row>

            </v-container>
        </div>
        <div>
            <v-card width="300" color="rgba(255, 255, 255, 0.5)">
                <v-card-title class="my-3 text-center font-weight-bold">Creación de Datos</v-card-title>
                <v-btn to="/alta_usuarios" rounded="lg" size="large" class="d-block mx-16 mb-5 px-4 py-3 text-none"
                    color="orange-lighten-2">
                    <p>Crear Usuario</p>
                </v-btn>
                <v-btn to="/alta_material" rounded="lg" size="large" class="d-block mx-16 mb-5 px-4 py-3 text-none"
                    color="orange-lighten-2">
                    <p>Crear Material</p>
                </v-btn>
                <v-btn to="/create-course" rounded="lg" size="large" class="d-block mx-16 mb-5 px-4 py-3 text-none"
                    color="orange-lighten-2">
                    <p>Crear Curso</p>
                </v-btn>
            </v-card>

            <v-card width="300" color="rgba(255, 255, 255, 0.5)" class="mt-16">
                <v-card-title class="my-3 text-center font-weight-bold">Consultas adicionales</v-card-title>
                <v-btn to="/consulta_usuarios" rounded="lg" size="large" class="d-block mx-16 mb-5 px-4 py-3 text-none"
                    color="orange-lighten-2">
                    <p>Consulta Usuarios</p>
                </v-btn>
                <v-btn to="/consulta_materiales" rounded="lg" size="large" class="d-block mx-16 mb-5 px-7 py-3 text-none"
                    color="orange-lighten-2">
                    <p>Consulta Materiales</p>
                </v-btn>
                <v-btn to="/consulta_cursos" rounded="lg" size="large" class="d-block mx-16 mb-5 px-4 py-3 text-none"
                    color="orange-lighten-2">
                    <p>Consulta Cursos</p>
                </v-btn>
            </v-card>
        </div>
    </div>
</template>
<style scoped>
.bg {
    background: url("../assets/page_bg.jpg");
    background-size: cover;
}
</style>