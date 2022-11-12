import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js';
//global components
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';

const app = createApp(App);
app.use(router);


app.component('base-card', BaseCard);
app.component('base-button', BaseButton);

app.mount('#app');
