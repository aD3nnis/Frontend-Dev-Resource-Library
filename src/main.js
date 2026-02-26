import './assets/main.css';
import '@/assets/global.css';
import VueAwesomePaginate from 'vue-awesome-paginate';
import 'vue-awesome-paginate/dist/style.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

createApp(App).use(router).use(VueAwesomePaginate).mount('#app');
