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
    <header class="flex px-10 justify-between transition-[padding]" :class="open == true ? 'py-10' : 'py-6'">
        <div class="flex [&>*]:h-10 gap-5">
            <Logo />
            <div class="flex">
                <LucioIcon class="mr-2" />
                <FuocoIcon />
            </div>
        </div>
        <Button class="size-10 [&>*]:duration-200 relative" @click="open = !open">
            <Transition name="fade">
                <MenuBurgerIcon v-if="!open" class="fill-white absolute size-full top-0" />
                <TimesIcon v-else class="fill-white" />
            </Transition>
        </Button>
    </header>
</template>