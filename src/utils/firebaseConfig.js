import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "newshunt-9eef1.firebaseapp.com",
  projectId: "newshunt-9eef1",
  storageBucket: "newshunt-9eef1.appspot.com",
  messagingSenderId: "545155340988",
  appId: "1:545155340988:web:40460713f5641b653b8eb9",
  measurementId: "G-SLWVYFG3QZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);