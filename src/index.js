// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDAnucB0qQZ4XtZ10UMoRvB3WGN7_yezS0',
  authDomain: 'ernesto-rangel-website.firebaseapp.com',
  projectId: 'ernesto-rangel-website',
  storageBucket: 'ernesto-rangel-website.appspot.com',
  messagingSenderId: '1077193388939',
  appId: '1:1077193388939:web:d576fc4badc4a033e7f58e',
  measurementId: 'G-FZ8GCLNRZR',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
