<script setup lang="ts">
import CopyIcon from '@/components/icons/CopyIcon.vue';
import NewsLetter from './NewsLetter.vue';
import { useTemplateRef } from 'vue';
import { toastContainerId } from '@/services/toast/toast';
import { appConfig } from '@/services/app/app';

const root = useTemplateRef('root')
defineExpose({ root })

const emailCopiedContainer = useTemplateRef('email-copied-container')
function emailClicked() {
    navigator.clipboard.writeText(appConfig.email).then(text => {
        emailCopiedContainer.value?.classList.remove("toast-animation");
        void emailCopiedContainer.value?.offsetWidth;
        emailCopiedContainer.value?.classList.add("toast-animation");
    });
}

</script>

<template>
    <div class="flex flex-col bg-neutral-900 text-white px-10 py-28 lg:items-center" ref="root">
        <div class="flex-center text-6xl font-Staatliches text-orange-dark">
            CONTATTI
        </div>
        <div class="text-center mt-10 lg:text-xl lg:w-[1000px]">
            Luciofuoco non è solo un vino, ma un’esperienza che desideriamo condividere con chi sa apprezzarne
            l’unicità.
            Per scoprire di più sul prodotto e sulle modalità di acquisto, puoi metterti in contatto diretto con noi.
        </div>
        <div class="flex-center gap-2 mt-8 cursor-pointer" @click="emailClicked()">
            <CopyIcon class="fill-orange-light h-3" />
            <div class="text-orange-light">{{ appConfig.email }}</div>
        </div>
        <Teleport :to="`#${toastContainerId}`">
            <div class="w-full h-10 flex-center bg-white text-black uppercase -translate-y-full"
                ref="email-copied-container">
                mail copiata
            </div>
        </Teleport>
        <NewsLetter class="mt-16 lg:w-[400px]" />
    </div>
</template>