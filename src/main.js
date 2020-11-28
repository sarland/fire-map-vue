import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'leaflet/dist/leaflet.css'
import '@/assets/reset.scss'

createApp(App).use(store).use(router).mount('#app')
