// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAo447rFWZaeRrkm5NDucWIMXxS1AsEAkU",
  authDomain: "theecom-8d5e5.firebaseapp.com",
  projectId: "theecom-8d5e5",
  storageBucket: "theecom-8d5e5.appspot.com",
  messagingSenderId: "364759030254",
  appId: "1:364759030254:web:1688bc66381edd820f56ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
