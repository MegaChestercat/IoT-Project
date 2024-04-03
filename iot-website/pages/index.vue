<template>
    <div>
        <v-container>
            <v-row>
                <v-col>
                    <v-btn to="/login" rounded="lg" height="150" width="70%"  class="mt-5 ml-7 px-16">
                        <v-icon icon='mdi-clock-outline' size="x-large" class="mr-2"></v-icon>
                        <v-text class="text-center">Accesos Entrada</v-text>
                    </v-btn>
                    
                </v-col>
                <v-col>
                    <v-btn to="/gym_access" rounded="lg" height="150" width="70%" class="mt-5 ml-7 px-16">
                        <v-icon icon='mdi-weight-lifter' size="x-large" class="mr-2"></v-icon>
                        <v-text class="text-center">Accesos Gimnasio</v-text>
                    </v-btn>
                    
                </v-col>
                
            </v-row>
            <v-row>
                <v-col>
                    <v-btn to="/course_attendance" rounded="lg" height="150" width="70%"class="mt-5 ml-7 px-16">
                        <v-icon icon='mdi-human-male-board' size="x-large" class="mr-2"></v-icon>
                        <v-text class="text-center">Asistencias Cursos</v-text>
                    </v-btn>
                    
                </v-col>
                <v-col>
                    <v-btn to="/login" rounded="lg" height="150" width="70%" class="mt-5 ml-7 px-16">
                        <v-icon icon='mdi-book' size="x-large" class="mr-2"></v-icon>
                        <v-text class="text-center">Historial Préstamo <br>de Material</v-text>
                            
                    </v-btn>
                    
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-btn to="/login" rounded="lg" height="150" width="70%" class="mt-5 ml-7 px-16">
                        <v-icon icon='mdi-car' size="x-large" class="mr-2"></v-icon>
                        <v-text class="text-center">Historial Pagos <br>de <br>Estacionamiento</v-text>
                    </v-btn>
                    
                </v-col>
                <v-col>
                    <v-btn to="/room_reservation" rounded="lg" height="150" width="70%" class="mt-5 ml-7 px-16">
                        <v-icon icon='mdi-calendar-range' size="x-large" class="mr-2"></v-icon>
                        <v-text class="text-center">Reservas de <br>Salones</v-text>
                    </v-btn>
                    
                </v-col>
            </v-row>
    
        </v-container>
    </div>
</template>