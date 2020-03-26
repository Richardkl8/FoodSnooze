import Vue from 'vue';
import App from './App.vue';
import router from './router';
import '@/global/globalComponents';

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
