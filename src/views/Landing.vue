<script setup lang="ts">
import Header from '@/components/header/Header.vue';
import VideoSection from '@/components/landing/VideoSection/VideoSection.vue';

</script>

<template>

    <div class="flex flex-col">
        <Header class="fixed top-0 text-white z-20 w-full backdrop-filter backdrop-blur-md bg-black/70" />
        <VideoSection class="h-screen" />
        <div class="h-screen">
            some other section
        </div>
    </div>

</template>