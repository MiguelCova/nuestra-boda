
<template>
    <header class="bg-header bg-cover bg-center h-screen flex flex-col justify-between" id="header">
        <nav class="contenedor p-5 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-10">
            <a href="#" class="text-white text-sm">Home</a>
            <a href="#ceremonia" class="text-white text-sm">Ceremonia</a>
            <a href="#fiesta" class="text-white text-sm">Recepción</a>
            <a href="#mesaregalos" class="text-white text-sm">Mesa de regalos</a>
        </nav>
        <div class="flex flex-col justify-center items-center -mt-40">
            <h1 class="text-gray-100 font-medium font-serif text-5xl md:text-9xl">Laura + Miguel</h1>
            <div class="mt-3">
                <div class="text-gray-100 uppercase text-sm md:text-2xl py-1 px-2 md:py-2 md:px-5 border-y border-y-white">
                    We're getting married
                </div>
            </div>
        </div>
        <div class="relative flex justify-center">
            <div class="absolute bottom-0 h-32 animate-pulse flex justify-center items-center rounded-t-full bg-green-100 pt-3 px-3 w-[230px] transition">
            </div>
            <div class="absolute bottom-0 h-30 pt-7 pb-5 px-10 bg-green-300 rounded-t-full w-[200px]">
                <div class="text-white font-serif text-3xl text-center whitespace-nowrap">
                    Save the date
                </div>
                <div class="text-white font-semibold text-center whitespace-nowrap">
                    14 OCT 2023
                </div>
            </div>
        </div>
    </header>
</template>
