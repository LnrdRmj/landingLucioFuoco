<script setup lang="ts">
import LinkIcon from '@/components/icons/LinkIcon.vue';
import LateralLogo from './LateralLogo.vue';
import { useTemplateRef } from 'vue';

const locations = [
    'Locanda alle Vigne, Cormons (GO)',
    'Osteria agli Antenati, San Lorenzo Isontino (GO)'
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
                <div>{{ location }}</div>
            </div>
        </div>
        <div class="absolute size-full py-10 flex justify-between pointer-events-none">
            <LateralLogo class="h-full -scale-x-100" />
            <LateralLogo class="h-full" />
        </div>
    </div>
</template>