<script setup lang="ts">
import { RouterView } from 'vue-router';
import { toastContainerId } from './services/toast/toast';
</script>

<template>
    <div class="size-full font-app relative">
        <div :id="toastContainerId" class="absolute w-full top-0 left-0 z-10"></div>
        <RouterView class="size-full" />
    </div>
</template>
