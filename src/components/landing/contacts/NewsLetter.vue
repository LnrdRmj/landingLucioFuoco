<script setup lang="ts">
import ArrowIcon from '@/components/icons/ArrowIcon.vue';
import LogoOrange from '@/components/icons/LogoOrange.vue';
import { ref } from 'vue';
import { computed } from 'vue';

const email = ref('marcoalbero7@gmail.com')
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const isEmailValid = computed(() => emailPattern.test(email.value));

</script>

<template>
    <div class="flex flex-col border border-white p-5 rounded-md">
        <div class="flex items-start">
            <LogoOrange class="mr-5 w-32" />
            <div>
                Iscriviti alla nostra Newsletter, ti avviseremo quando sarà possibile accedere alle selezioni di
                Luciofuoco.
            </div>
        </div>
        <div class="flex overflow-hidden rounded-md  mt-7 transition-colors"
            :class="[isEmailValid ? 'bg-white' : 'bg-zinc-800']">
            <input type="email" placeholder="Inserisci Email" v-model="email"
                class="h-10 placeholder:text-neutral-700 px-2 flex-1 transition-colors bg-transparent outline-none"
                :class="[isEmailValid ? 'text-black' : 'text-white']" />
            <div class="flex-center w-10">
                <Transition name="to-from-right">
                    <button v-if="isEmailValid" :disabled="!isEmailValid"
                        class="text-white px-3 bg-orange-dark size-full !duration-200">
                        <ArrowIcon class="fill-transparent size-full stroke-white" />
                    </button>
                </Transition>
            </div>
        </div>
    </div>
</template>