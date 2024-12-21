<script setup lang="ts">
import LinkIcon from '@/components/icons/LinkIcon.vue';
import LateralLogo from './LateralLogo.vue';

const locations = [
    'Locanda alle Vigne, Cormons (GO)',
    'Osteria agli Antenati, San Lorenzo Isontino (GO)'
]

</script>

<template>
    <div class="bg-orange-dark flex-center flex-col h-[500px] relative">
        <div class="absolute size-full py-10 flex justify-between">
            <LateralLogo class="h-full -scale-x-100" />
            <LateralLogo class="h-full" />
        </div>
        <div class="font-Staatliches text-5xl text-center">
            DOVE <br> TROVARCI
        </div>
        <div class="flex flex-col items-center mt-10 gap-1">
            <div v-for="location of locations" class="flex items-center text-white gap-2">
                <LinkIcon class="h-3" />
                <div>{{ location }}</div>
            </div>
        </div>
    </div>
</template>