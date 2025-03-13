<script setup lang="ts">
import ArrowIcon from '@/components/icons/ArrowIcon.vue';
import Logo from '@/components/icons/Logo.vue';
import LogoOrange from '@/components/icons/LogoOrange.vue';
import { addEmail } from '@/services/firebase/firestore/emailCollection/emailCollection';
import { computed, ref } from 'vue';

const email = ref('')
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const isEmailValid = computed(() => emailPattern.test(email.value));

const isRegisteringEmail = ref(false)
const successEmailRegistered = ref(false)
async function registerEmail() {
    isRegisteringEmail.value = true
    addEmail(email.value)
        .then(response => { console.log(response); successEmailRegistered.value = true })
        .catch(console.log)
        .finally(() => isRegisteringEmail.value = false)
}

</script>

<template>
    <div class="flex flex-col border border-white p-5 rounded-md">
        <div class="flex items-start">
            <div class="w-16 mr-5 relative">
                <!-- This is hidden in order to give the container the sameheight of the transitioned logos -->
                <LogoOrange class="w-full opacity-0" />
                <Transition name="fade">
                    <LogoOrange v-if="!successEmailRegistered" class="absolute top-0" />
                    <Logo v-else class="absolute top-0" />
                </Transition>
            </div>
            <div class="min-w-0 flex-1 relative">
                <Transition name="fade">
                    <div v-if="!successEmailRegistered" class="absolute size-full">
                        Iscriviti alla nostra Newsletter, ti avviseremo quando sarà possibile accedere alle selezioni di
                        Luciofuoco.
                    </div>
                    <div v-else class="absolute size-full">
                        Grazie per esserti iscritto, riceverai aggiornamenti sulle nostre selezioni e sulle modalità di
                        acquisto di Luciofuoco.
                    </div>
                </Transition>
            </div>
        </div>
        <div class="flex overflow-hidden rounded-md transition-[background-color,_margin,_opacity] duration-500"
            :class="[isEmailValid ? 'bg-white' : 'bg-zinc-800', successEmailRegistered ? '-mt-10 opacity-0' : 'mt-7 opacity-100']">
            <input type="email" placeholder="Inserisci Email" v-model="email" class="h-10 px-2 flex-1 transition-all bg-transparent outline-none 
                    placeholder:transition-colors placeholder-neutral-700 hover:placeholder-white"
                :disabled="isRegisteringEmail" :class="[isEmailValid ? 'text-black' : 'text-white']" />
            <div class="flex-center w-10">
                <Transition name="to-from-right">
                    <button v-if="isEmailValid"
                        :disabled="!isEmailValid || isRegisteringEmail || successEmailRegistered" @click="registerEmail"
                        class="text-white px-3 bg-orange-dark size-full !duration-200">
                        <ArrowIcon class="fill-transparent size-full stroke-white" />
                    </button>
                </Transition>
            </div>
        </div>
    </div>
</template>