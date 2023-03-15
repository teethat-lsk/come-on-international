// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAoJ7DesH-S47z9posFo7QvSiCxvjbxXKc',
  authDomain: 'come-on-international.firebaseapp.com',
  projectId: 'come-on-international',
  storageBucket: 'come-on-international.appspot.com',
  messagingSenderId: '982227222902',
  appId: '1:982227222902:web:f2038b47c5771136397a57',
  measurementId: 'G-5B0M8JCG3Z',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const storage = getStorage(app);
const pdfRef = ref(storage, 'Come-On International.pdf');

export const downloadURL = () =>
  getDownloadURL(pdfRef)
    .then((url) => {
      return url

      // `url` is the download URL for 'images/stars.jpg'
      // This can be downloaded directly:
      //  const xhr = new XMLHttpRequest();
      //  xhr.responseType = 'blob';
      //  xhr.onload = (event) => {
      //    const blob = xhr.response;
      //  };
      //  xhr.open('GET', url);
      //  xhr.send();
    })
    .catch((error) => {
      // Handle any errors
    });
