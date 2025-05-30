<script setup lang="ts">
import FuocoIcon from '@/components/icons/FuocoIcon.vue';
import InstagramIcon from '@/components/icons/InstagramIcon.vue';
import Logo from '@/components/icons/Logo.vue';
import LucioIcon from '@/components/icons/LucioIcon.vue';
import MailIcon from '@/components/icons/MailIcon.vue';
</script>

<template>
    <footer class="flex flex-col bg-black px-10 pt-10 pb-24">
        <div class="flex justify-between [&>*]:h-10 gap-5">
            <div class="flex gap-5">
                <Logo />
                <div class="flex">
                    <LucioIcon class="mr-2" />
                    <FuocoIcon />
                </div>
            </div>
            <div class="flex gap-5">
                <a href="mailto:info@luciofuoco.it" class="size-10 p-2 flex-center rounded-md border-2 border-white">
                    <MailIcon />
                </a>
                <a href="https://www.instagram.com/luciofuoco/"
                    class="size-10 p-2 flex-center rounded-md border-2 border-white" target="_blank">
                    <InstagramIcon />
                </a>
            </div>
        </div>
        <div class=" flex flex-col lg:flex-row lg:gap-32 text-white gap-5 mt-10">
            <div class="flex flex-col">
                <div class="text-neutral-700">Indirizzo</div>
                <div class="mt-2">
                    Casa Delle Rose di Bernot Lucio & C.S.A.S
                    Ruttars, Dolegna del Collio (GO)
                </div>
            </div>
        </div>
    </footer>
</template>