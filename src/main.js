import '@/style.css';
import './css/app.scss';
import 'animate.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {createBootstrap} from 'bootstrap-vue-next';

import 'bootstrap/dist/css/bootstrap.css'; // This line brings in the main styles from Bootstrap (like buttons, grids, forms, and other basic designs).
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'; // This line brings in extra styles for the Vue components provided by bootstrap-vue-next (like <BButton>, <BModal>).

import App from './App.vue'
import router from './router'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2uYCHev9rS6tsQkZYrQ0hihVu2vHZWAo",
  authDomain: "e-commerce-itc-d2-f1a7d.firebaseapp.com",
  projectId: "e-commerce-itc-d2-f1a7d",
  storageBucket: "e-commerce-itc-d2-f1a7d.firebasestorage.app",
  messagingSenderId: "109249399189",
  appId: "1:109249399189:web:1dc3ba66b3e5bae4450e9c"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(createBootstrap()) 
app.mount('#app')
