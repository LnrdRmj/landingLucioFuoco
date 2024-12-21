<script setup lang="ts">
import { ref } from 'vue';
import FuocoIcon from '../icons/FuocoIcon.vue';
import Logo from '../icons/Logo.vue';
import LucioIcon from '../icons/LucioIcon.vue';
import MenuBurgerIcon from '../icons/MenuBurgerIcon.vue';
import TimesIcon from '../icons/TimesIcon.vue';

const open = ref(false)

</script>

<template>
    <div class="flex flex-col h-screen" :class="{ 'pointer-events-none': !open }">
        <header class="flex px-10 justify-between transition-[padding] backdrop-filter backdrop-blur-md"
            :class="open == true ? 'py-10 bg-black' : 'py-6 bg-black/70'">
            <div class="flex [&>*]:h-10 gap-5">
                <Logo />
                <div class="flex">
                    <LucioIcon class="mr-2" />
                    <FuocoIcon />
                </div>
            </div>
            <button class="size-10 [&>*]:duration-200 relative pointer-events-auto" @click="open = !open">
                <Transition name="fade">
                    <MenuBurgerIcon v-if="!open" class="fill-white absolute size-full top-0" />
                    <TimesIcon v-else class="fill-white" />
                </Transition>
            </button>
        </header>
        <div class="flex-1 min-h-0">
            <div class="grid grid-rows-[0fr] transition-[grid-template-rows] h-full"
                :class="{ 'grid-rows-[1fr]': open }">
                <div class="pointer-events-none
                    bg-black
                    lg:hidden
                    overflow-hidden
                    text-white
                    flex flex-col 
                    w-full md:h-fit
                    z-10
                    transition-[opacity,transform] duration-[250ms]" :class="open ? 'opacity-100' : 'opacity-0'">
                    <div class="flex flex-center flex-col pb-12 px-8 h-full">
                        <div class="w-full bg-gray-400 h-[1px]"></div>
                        <div class="flex flex-col items-center justify-center h-full text-4xl gap-10 font-app">
                            <div>Territorio</div>
                            <div>Luoghi</div>
                            <div>Contatti</div>
                        </div>
                        <!-- <button v-for="route of routes" @click="route.onClick(); open = false" class="z-20
                                px-2 py-1 h-fit
                                font-semibold
                                animated-background-button">
                                {{ route.title }}
                            </button> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>