<script setup lang="ts">
import CopyIcon from '@/components/icons/CopyIcon.vue';
import NewsLetter from './NewsLetter.vue';
import { useTemplateRef } from 'vue';

const root = useTemplateRef('root')
defineExpose({ root })

</script>

<template>
    <div class="flex flex-col bg-neutral-900 text-white px-10 py-28" ref="root">
        <div class="flex-center text-6xl font-Staatliches text-orange-dark">
            CONTATTI
        </div>
        <div class="text-center mt-10">
            Luciofuoco non è solo un vino, ma un’esperienza che desideriamo condividere con chi sa apprezzarne
            l’unicità.
            Per scoprire di più sul prodotto e sulle modalità di acquisto, puoi metterti in contatto diretto con noi.
        </div>
        <div class="flex items-center justify-center gap-2 mt-8">
            <CopyIcon class="fill-orange-light h-3" />
            <a href="mailto:info@luciofuoco.it" class="text-orange-light">info@luciofuoco.it</a>
        </div>
        <NewsLetter class="mt-16" />
    </div>
</template>