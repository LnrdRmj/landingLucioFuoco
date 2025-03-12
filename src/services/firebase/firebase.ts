// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: 'AIzaSyAAOYEzRgqOiZS12WQCyKeUEG52S98mXqg',
    authDomain: 'luciofuoco.firebaseapp.com',
    projectId: 'luciofuoco',
    storageBucket: 'luciofuoco.firebasestorage.app',
    messagingSenderId: '49440064294',
    appId: '1:49440064294:web:0938fd9796682dd27ff7e7',
}

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)
export const fireStore = getFirestore(firebaseApp)
