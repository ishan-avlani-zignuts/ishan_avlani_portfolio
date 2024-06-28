import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCfjJbtKX1f0T6wnq_M8ex0OIJF6jj6i9k",
  authDomain: "portfolio-3b430.firebaseapp.com",
  projectId: "portfolio-3b430",
  storageBucket: "portfolio-3b430.appspot.com",
  messagingSenderId: "268544940903",
  appId: "1:268544940903:web:c83c56d6a88fd23ab9edc2",
  measurementId: "G-WHGE9MEL21",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };