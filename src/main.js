import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import App from './App.vue';
import store from './store';
import VueGtag  from 'vue-gtag';
import i18n from './i18n';

library.add(fas, fab);

const app = createApp(App);

app.component('fa', FontAwesomeIcon);
app.use(store);

app.use(VueGtag, {
  config: { id: "G-DTBPB2X24E" }
});

app.use(i18n);

app.mount('#app');