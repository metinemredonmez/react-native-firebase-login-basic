// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAStuOkGGOMNGCD_ksBbbVBsLIEGWdEkrE",
  authDomain: "react-native-login-aac79.firebaseapp.com",
  projectId: "react-native-login-aac79",
  storageBucket: "react-native-login-aac79.appspot.com",
  messagingSenderId: "712190318107",
  appId: "1:712190318107:web:804e49644410c6fa7c8abe"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();

export { auth };