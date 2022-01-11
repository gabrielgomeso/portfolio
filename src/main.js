import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import i18n from './i18n';
import App from './App.vue';
import VueGtag  from 'vue-gtag';

library.add(fas, fab);



const app = createApp(App);

app.component('fa', FontAwesomeIcon);
app.use(i18n);
app.use(VueGtag, {
  config: { id: "G-DTBPB2X24E" }
});

app.mount('#app');