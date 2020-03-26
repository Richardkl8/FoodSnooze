import Vue from 'vue';
import App from './App.vue';
import router from './router';
import getApiService from './services/ApiService';


import endPoints from './services/support/endPoints';
// This is a separate file to keep main.js clean
import './global/globalComponents';

const api = getApiService(endPoints);

new Vue({
    router,
    provide: () => ({
        apiService: api,
    }),
    render: (h) => h(App),
}).$mount('#app');
