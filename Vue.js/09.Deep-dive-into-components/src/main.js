import { createApp } from 'vue';

import App from './App.vue';
// import TheHeader from './components/TheHeader.vue';
import BaseBadge from './components/UI/BaseBadge.vue';
import BaseCard from './components/UI/BaseCard.vue';
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';

const app = createApp(App);

// app.component('the-header', TheHeader);
app.component('base-badge', BaseBadge);
app.component('base-card', BaseCard);
// app.component('badge-list', BadgeList);
// app.component('user-info', UserInfo);

app.mount('#app');
