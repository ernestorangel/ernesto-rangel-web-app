//import firebase from 'firebase/app';
import { createApp } from 'vue';
import App from './App.vue';
import setupRouter from './router';

document.addEventListener('DOMContentLoaded', async function () {
  try {
    let app = firebase.app();
  } catch (e) {
    console.error(e);
  }

  const vueApp = createApp(App);
  const router = await setupRouter();
  vueApp.use(router);
  vueApp.mount('#app');

  //setAnchorOffset()
});

function setAnchorOffset() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      const offset = 55; // Ajuste o valor do offset aqui

      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    });
  });
}
