import { createApp } from 'vue';

import App from './App.vue';
import logger from './mixins/logger.js';

const app = createApp(App)

app.mixin(logger)
app.mount('#app');
