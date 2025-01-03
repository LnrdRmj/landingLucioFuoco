<script setup lang="ts">
import { ref } from 'vue';
import FuocoIcon from '../icons/FuocoIcon.vue';
import Logo from '../icons/Logo.vue';
import LucioIcon from '../icons/LucioIcon.vue';
import MenuBurgerIcon from '../icons/MenuBurgerIcon.vue';
import TimesIcon from '../icons/TimesIcon.vue';

const props = defineProps<{
    routes: { title: string; onClick: () => void }[],
    halfVideoIsVisible: boolean
}>()

const open = ref(false)

</script>

<template>
    <div class="flex flex-col h-screen" :class="{ 'pointer-events-none': !open }">
        <header
            class="flex px-10 lg:px-32 justify-between transition-[padding,background-color] backdrop-filter backdrop-blur-md pointer-events-auto"
            :class="[open == true ? 'py-10 bg-black' : 'py-6 bg-black/70', halfVideoIsVisible ? 'lg:py-12 lg:bg-transparent lg:backdrop-blur-0' : 'backdrop-blur-md']">
            <div class="flex [&>*]:h-10 gap-5">
                <Logo />
                <div class="flex">
                    <LucioIcon class="mr-2" />
                    <FuocoIcon />
                </div>
            </div>
            <div class="flex">
                <div class="hidden lg:flex lg:gap-32">
                    <button v-for="route of routes" @click="route.onClick()"
                        class="text-xl hover:text-orange-light transition-colors">
                        {{ route.title }}
                    </button>
                </div>
                <button class="lg:hidden size-10 [&>*]:duration-200 relative pointer-events-auto" @click="open = !open">
                    <Transition name="fade">
                        <MenuBurgerIcon v-if="!open" class="fill-white absolute size-full top-0" />
                        <TimesIcon v-else class="fill-white" />
                    </Transition>
                </button>
            </div>
        </header>
        <div class="flex-1 min-h-0" :class="{ 'pointer-events-none': !open }">
            <div class="grid grid-rows-[0fr] transition-[grid-template-rows] h-full"
                :class="{ 'grid-rows-[1fr]': open }">
                <div class="
                    bg-black
                    lg:hidden
                    overflow-hidden
                    text-white
                    flex flex-col 
                    w-full
                    z-10
                    transition-[opacity,transform] duration-[250ms]" :class="open ? 'opacity-100' : 'opacity-0'">
                    <div class="flex flex-center flex-col pb-12 px-8 h-full">
                        <div class="w-full bg-gray-400 h-[1px]"></div>
                        <div class="flex flex-col items-center justify-center h-full text-4xl gap-10 font-app">
                            <button v-for="route of routes" @click="open = false; route.onClick()">
                                {{ route.title }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>