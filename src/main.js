import { createApp } from 'vue'
import App from './App.vue'
import './style.css'; // Importa Tailwind CSS
import router from './router'

createApp(App)
.use(router)
.mount('#app')
