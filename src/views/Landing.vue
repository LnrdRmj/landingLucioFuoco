<script setup lang="ts">
import Header from '@/components/header/Header.vue';
import CompanyBackground from '@/components/landing/companyBackground/CompanyBackground.vue';
import Contacts from '@/components/landing/contacts/Contacts.vue';
import VideoSection from '@/components/landing/VideoSection/VideoSection.vue';
import WhereToFindUs from '@/components/landing/whereToFindUs/WhereToFindUs.vue';

</script>

<template>

    <div class="flex flex-col">
        <Header class="fixed top-0 text-white z-20 w-full" />
        <VideoSection class="h-screen" />
        <CompanyBackground />
        <WhereToFindUs />
        <Contacts />
        <div class="h-screen">
        </div>
    </div>

</template>