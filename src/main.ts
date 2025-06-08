import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
// @ts-ignore
import router from './router/index';
import './assets/variables.css'

const app = createApp(App)
app.use(router)
app.mount('#app')