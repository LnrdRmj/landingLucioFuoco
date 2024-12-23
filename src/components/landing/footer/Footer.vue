<script setup lang="ts">
import FuocoIcon from '@/components/icons/FuocoIcon.vue';
import Logo from '@/components/icons/Logo.vue';
import LucioIcon from '@/components/icons/LucioIcon.vue';
</script>

<template>
    <footer class="flex flex-col bg-black px-10 pt-10 pb-24">
        <div class="flex [&>*]:h-10 gap-5">
            <Logo />
            <div class="flex">
                <LucioIcon class="mr-2" />
                <FuocoIcon />
            </div>
        </div>
        <div class="flex flex-col text-white gap-5 mt-10">
            <div class="flex flex-col">
                <div class="text-neutral-700">Indirizzo</div>
                <div class="mt-2">
                    Casa Delle Rose di Bernot Lucio & C.S.A.S
                    Ruttars, Dolegna del Collio (GO)
                </div>
            </div>
            <div class="flex flex-col">
                <div class="text-neutral-700">Email</div>
                <a href="mailto:info@luciofuoco.it" class="mt-2">
                    info@luciofuoco.it
                </a>
            </div>
            <div class="flex flex-col">
                <div class="text-neutral-700">Instagram</div>
                <div class="mt-2">
                    @luciofuoco
                </div>
            </div>
        </div>
    </footer>
</template>