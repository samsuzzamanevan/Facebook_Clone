import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA9zSA7zA4LumgHITEtAaHSpJMJ3pPxiQo",
  authDomain: "facebook-registration-dc744.firebaseapp.com",
  projectId: "facebook-registration-dc744",
  storageBucket: "facebook-registration-dc744.firebasestorage.app",
  messagingSenderId: "1068724412665",
  appId: "1:1068724412665:web:3cbcbf31bf8494913c0228",
  measurementId: "G-EHYWGREW1X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app