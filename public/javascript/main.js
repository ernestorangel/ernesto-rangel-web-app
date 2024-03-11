document.addEventListener('DOMContentLoaded', function () {
  console.log('script loaded');
  try {
    let app = firebase.app();
  } catch (e) {
    console.error(e);
  }
});
