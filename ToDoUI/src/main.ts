import Vue from 'vue';
import App from './App.vue';
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue';
import PortalVue from 'portal-vue'

Vue.use(PortalVue);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = true;

new Vue({
    render: h => h(App)
}).$mount('#app');
