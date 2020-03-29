import Vue from 'vue';
import App from './App.vue';
import router from './router';
import getApiService from './services/ApiService';
import endPoints from './services/support/endPoints';
import './global/globalComponents';

const apiService = getApiService(endPoints, process.env.VUE_APP_API_BASEURL);

new Vue({
    router,
    provide: {
        apiService,
    },
    render: (h) => h(App),
}).$mount('#app');
