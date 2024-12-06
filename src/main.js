import '@/style.css';
import './css/app.scss';
import 'animate.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// Import Bootstrap Grid CSS
// import 'bootstrap/dist/css/bootstrap-grid.min.css';

import App from './App.vue'
import router from './router'


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
