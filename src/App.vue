<script setup lang="ts">
import { RouterView } from 'vue-router';
import { toastContainerId } from './services/toast/toast';
</script>

<template>
    <div class="size-full font-app">
        <div :id="toastContainerId" class="fixed w-full top-0 left-0 z-50"></div>
        <div class="size-full relative">
            <RouterView class="size-full" />
        </div>
    </div>
</template>
