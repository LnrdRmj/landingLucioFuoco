<script setup lang="ts">
import LinkIcon from '@/components/icons/LinkIcon.vue';
import LateralLogo from './LateralLogo.vue';
import { useTemplateRef } from 'vue';

const locations = [
    {
        address: 'Locanda alle Vigne, Cormons (GO)',
        url: 'https://locandallevigne.it/',
    },
    {
        address: 'Osteria agli Antenati, San Lorenzo Isontino (GO)',
        url: 'https://www.facebook.com/trattoriaAgliAntenati/',
    },
    {
        address: 'Osteria Baldovino, Ipplis (UD)',
        url: 'https://www.thefork.it/ristorante/osteria-baldovino-r833387',
    },
    {
        address: 'Eno-Therapy, Champoluc (AO)',
        url: 'https://enotherapy.it/',
    },
    {
        address: 'Alla Bettolina Ristorante, Frachey (AO)',
        url: 'https://allabettolina.superbexperience.com/',
    }
]

const root = useTemplateRef('root')
defineExpose({ root })

</script>

<template>
    <div class="bg-orange-dark flex-center flex-col h-[500px] relative" ref="root">
        <div class="font-Staatliches text-5xl lg:text-8xl text-center">
            DOVE <br class="lg:hidden"> TROVARCI
        </div>
        <div class="flex flex-col items-center mt-10 gap-1">
            <div v-for="location of locations" class="flex items-center text-white gap-2">
                <LinkIcon class="h-3" />
                <a :href="location.url" target="_blank">{{ location.address }}</a>
            </div>
        </div>
        <div class="absolute size-full py-10 flex justify-between pointer-events-none">
            <LateralLogo class="h-full -scale-x-100" />
            <LateralLogo class="h-full" />
        </div>
    </div>
</template>