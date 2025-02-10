//import firebase from 'firebase/app';
import { createApp } from 'vue';
import App from './App.vue';
import setupRouter from './router';

document.addEventListener('DOMContentLoaded', async function () {
  console.log('script loaded');

  try {
    let app = firebase.app();
  } catch (e) {
    console.error(e);
  }

  const vueApp = createApp(App);
  const router = await setupRouter();
  vueApp.use(router);
  vueApp.mount('#app');
});
