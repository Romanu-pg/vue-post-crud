import { createApp } from 'vue';
// @ts-ignore: Vue SFC module without declaration
import App from './App.vue';
import router from './router';
import '@/assets/main.css';

const app = createApp(App);
app.use(router);
app.mount('#app');