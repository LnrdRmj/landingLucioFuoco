<script setup lang="ts">
import Header from '@/components/header/Header.vue';
import CompanyBackground from '@/components/landing/companyBackground/CompanyBackground.vue';
import Contacts from '@/components/landing/contacts/Contacts.vue';
import Footer from '@/components/landing/footer/Footer.vue';
import VideoSection from '@/components/landing/VideoSection/VideoSection.vue';
import WhereToFindUs from '@/components/landing/whereToFindUs/WhereToFindUs.vue';
import { useIntersectionObserver } from '@vueuse/core';
import { ref, useTemplateRef, watch } from 'vue';

const contacts = useTemplateRef('contacts')
const companyBackground = useTemplateRef('companyBackground')
const whereToFindUs = useTemplateRef('whereToFindUs')
const videoSection = useTemplateRef('videoSection')

function tmp() {
    console.log(contacts.value?.root)
    contacts.value?.root?.scrollIntoView({ behavior: 'smooth' })
}

const headerRoutes = [
    { title: 'Scopri', onClick: () => companyBackground.value?.root?.scrollIntoView({ behavior: 'smooth' }) },
    { title: 'Gusta', onClick: () => whereToFindUs.value?.root?.scrollIntoView({ behavior: 'smooth' }) },
    { title: 'Contatti', onClick: () => contacts.value?.root?.scrollIntoView({ behavior: 'smooth' }) },
]

const halfVideoIsVisible = ref(true)
const { stop } = watch(videoSection, () => {
    if (videoSection.value == null) return

    useIntersectionObserver(videoSection.value.root, ([entry]) => {
        halfVideoIsVisible.value = entry.intersectionRatio > 0.5
    }, {
        threshold: 0.5
    })

    stop()
})

</script>

<template>
    <div class="flex flex-col relative">
        <Header :halfVideoIsVisible="halfVideoIsVisible" class="fixed top-0 text-white z-20 w-full"
            :routes="headerRoutes" />
        <VideoSection class="h-screen" @discoverProduct="tmp" ref="videoSection" />
        <CompanyBackground @discoverProduct="tmp" ref="companyBackground" />
        <WhereToFindUs ref="whereToFindUs" />
        <Contacts ref="contacts" />
        <Footer />
    </div>
</template>