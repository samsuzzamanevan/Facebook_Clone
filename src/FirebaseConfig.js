// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"; 

const firebaseConfig = {
  apiKey: "AIzaSyCP9IpAKKnhTcyT4wr44nhDTnKN1npkFzQ",
  authDomain: "facebook-public-database.firebaseapp.com",
  projectId: "facebook-public-database",
  storageBucket: "facebook-public-database.firebasestorage.app",
  messagingSenderId: "177872098496",
  appId: "1:177872098496:web:d07471f9371291ea830925",
  measurementId: "G-5PR6GVBF6T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig