<script setup lang="ts">
import { getEmails } from '@/services/firebase/firestore/emailCollection/emailCollection';
import { ref } from 'vue';

const isDownloadingEmailCsv = ref(false);
async function downloadEmailCsv() {
    isDownloadingEmailCsv.value = true
    try {
        const emailContainers = await getEmails()

        // Create the csv file
        let csvContent = "data:text/csv;charset=utf-8,email\n" +
            emailContainers.docs
                .map(doc => doc.data())
                .map(emailContainer => emailContainer.email)
                .filter(email => email != null)
                .join("\n")

        var encodedUri = encodeURI(csvContent);
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "emails_newsletter.csv");
        document.body.appendChild(link); // Required for FF
        link.click();
        document.body.removeChild(link)
    }
    catch (e) {
        console.log(e)
    }
    finally {
        isDownloadingEmailCsv.value = false
    }
}

</script>

<template>
    <div class="size-full p-10">
        <div class="flex flex-col space-y-5">
            <button class="bg-blue-500 disabled:bg-blue-300 text-white w-fit py-2 px-4 rounded"
                @click="downloadEmailCsv()" :disabled="isDownloadingEmailCsv">
                Scarica le email
            </button>
        </div>
    </div>
</template>