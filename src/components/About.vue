<template>
    <div class="contenedor mt-20 md:mt-40 mb-10">
        <h1 class="font-serif font-normal text-center text-gray-800 text-5xl md:text-7xl">Estas invitado!</h1>
        <div class="flex justify-center items-center my-5 md:my-10">
            <div class="border-2 border-gray-700 h-10 w-10 rounded-full -mr-5">

            </div>
            <div class="border-2 border-gray-700 h-10 w-10 rounded-full">

            </div>
        </div>
        <div class="text-gray-600 text-center">
            Nos conocimos, nos enamoramos y nos casaremos. A ustedes los conocemos los amamos y los consentiremos en nuestra Boda. <br> Queremos que seas parte de este momento tan especial.
        </div>
        <div class="flex justify-center items-center gap-3 mt-5 md:mt-10">

            <div class="border-2 border-gray-500 h-20 w-20 rounded-full flex flex-col justify-center items-center">
                <div class="text-gray-700 text-xl font-medium">
                    {{ dias }}
                </div>
                <div class="text-gray-800 text-xs">
                    días
                </div>
    
            </div>
            <div class="border-2 border-gray-500 h-20 w-20 rounded-full flex flex-col justify-center items-center">
                <div class="text-gray-700 text-xl font-medium">
                    {{ horas }}
                </div>
                <div class="text-gray-800 text-xs">
                    horas
                </div>
    
            </div>
            <div class="border-2 border-gray-500 h-20 w-20 rounded-full flex flex-col justify-center items-center">
                <div class="text-gray-700 text-xl font-medium">
                    {{ minutos }}
                </div>
                <div class="text-gray-800 text-xs">
                    minutos
                </div>
    
            </div>
            <div class="border-2 border-gray-500 h-20 w-20 rounded-full flex flex-col justify-center items-center">
                <div class="text-gray-700 text-xl font-medium">
                    {{ segundos }}
                </div>
                <div class="text-gray-800 text-xs">
                    segundos
                </div>
    
            </div>
        </div>
    </div>
</template>

<script>
//===
// VARIABLES
//===
const DATE_TARGET = new Date('10/14/2023 5:00 PM');
// Milliseconds for the calculations
const MILLISECONDS_OF_A_SECOND = 1000;
const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24


export default {
  
  data() {
    return {
      dias: '',
      horas: '',
      minutos: '',
      segundos: '',
    };
  },
  
  methods: {
    updateCountdown() {
            // Calcs
            const NOW = new Date()
            const DURATION = DATE_TARGET - NOW;
            const REMAINING_DAYS = Math.floor(DURATION / MILLISECONDS_OF_A_DAY);
            const REMAINING_HOURS = Math.floor((DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);
            const REMAINING_MINUTES = Math.floor((DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE);
            const REMAINING_SECONDS = Math.floor((DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND);

            // Render
            this.dias = REMAINING_DAYS;
            this.horas = REMAINING_HOURS;
            this.minutos = REMAINING_MINUTES;
            this.segundos = REMAINING_SECONDS;
        },
        intervalo(){
            setInterval(this.updateCountdown, MILLISECONDS_OF_A_SECOND);
        }
        
  },
  mounted(){
    console.log('mounted')
        this.intervalo()
    },
};
</script>