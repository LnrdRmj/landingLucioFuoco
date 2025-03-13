<script setup lang="ts">

import { firebaseAuth } from '@/services/firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const router = useRouter()

const isSigningIn = ref(false)
function signin() {
    isSigningIn.value = true
    signInWithEmailAndPassword(firebaseAuth, email.value, password.value)
        .then(userCredential => {
            console.log(userCredential)
            router.push({ name: 'admin' })
        })
        .catch(console.log)
        .finally(() => isSigningIn.value = false)
}

</script>

<template>
    <div class="size-full flex-center">
        <form class="flex space-x-4 w-full justify-center">
            <div class="flex flex-col mb-4 ">
                <label class="block text-gray-700 font-bold mb-2 w-1/3" for="username">
                    Username
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username" type="text" v-model="email">
            </div>
            <div class="flex flex-col mb-6 transition-[opacity,_transform] duration-500"
                :class="email.length > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'">
                <label class="block text-gray-700 font-bold mb-2 w-1/3" for="password">
                    Password
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password" type="password" v-model="password">
            </div>
            <div class="flex items-center transition-[opacity,_transform] duration-500"
                :class="email.length > 0 && password.length > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'">
                <button
                    class="bg-blue-500 hover:bg-blue-700 disabled:bg-blue-300 text-white font-bold py-2 px-4 rounded focus:outline-2"
                    :disabled="isSigningIn" @click="signin()" type="button">
                    Sign In
                </button>
            </div>
        </form>
    </div>
</template>