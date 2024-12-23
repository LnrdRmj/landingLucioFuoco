<script setup lang="ts">
import Header from '@/components/header/Header.vue';
import CompanyBackground from '@/components/landing/companyBackground/CompanyBackground.vue';
import Contacts from '@/components/landing/contacts/Contacts.vue';
import Footer from '@/components/landing/footer/Footer.vue';
import VideoSection from '@/components/landing/VideoSection/VideoSection.vue';
import WhereToFindUs from '@/components/landing/whereToFindUs/WhereToFindUs.vue';
import { useTemplateRef } from 'vue';

const contacts = useTemplateRef('contacts')
const companyBackground = useTemplateRef('companyBackground')
const whereToFindUs = useTemplateRef('whereToFindUs')

function tmp() {
    console.log(contacts.value?.root)
    contacts.value?.root?.scrollIntoView({ behavior: 'smooth' })
}

const headerRoutes = [
    { title: 'Territori', onClick: () => companyBackground.value?.root?.scrollIntoView({ behavior: 'smooth' }) },
    { title: 'Luoghi', onClick: () => whereToFindUs.value?.root?.scrollIntoView({ behavior: 'smooth' }) },
    { title: 'Contatti', onClick: () => contacts.value?.root?.scrollIntoView({ behavior: 'smooth' }) },
]

</script>

<template>
    <div class="flex flex-col">
        <Header class="fixed top-0 text-white z-20 w-full" :routes="headerRoutes" />
        <VideoSection class="h-screen" @discoverProduct="tmp" />
        <CompanyBackground @discoverProduct="tmp" ref="companyBackground" />
        <WhereToFindUs ref="whereToFindUs" />
        <Contacts ref="contacts" />
        <Footer />
    </div>
</template>