<script setup lang="ts">

import Logo from '@/components/icons/Logo.vue';
import LandingVideo from '../../../assets/landing-video.mp4'
import LucioIcon from '@/components/icons/LucioIcon.vue';
import FuocoIcon from '@/components/icons/FuocoIcon.vue';

const emits = defineEmits(['discoverProduct'])

</script>

<template>
    <div class="relative">
        <div class="size-full flex flex-center z-10 relative text-white">
            <div class="flex flex-col items-center">
                <div class="flex gap-3 [&>*]:h-14 lg:[&>*]:h-24">
                    <LucioIcon />
                    <Logo />
                    <FuocoIcon />
                </div>
                <div class="text-sm lg:text-2xl mt-2">
                    Il Vin al Cjante, ma sot il Cjânt e Zûf il Mâl.
                </div>
                <button class="border border-white rounded-lg py-2 font-normal text-2xl w-60 mt-10"
                    @click="emits('discoverProduct')">
                    Scopri il prodotto
                </button>
            </div>
        </div>
        <video :src="LandingVideo" muted loop class="size-full object-cover absolute top-0 z-0"></video>
    </div>
</template>