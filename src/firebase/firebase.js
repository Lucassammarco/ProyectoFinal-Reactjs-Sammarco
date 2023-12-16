import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBRigyR_McTf8e0j1M3-yGD8zeO5Dvb6U",
  authDomain: "ecommerce-coder-13217.firebaseapp.com",
  projectId: "ecommerce-coder-13217",
  storageBucket: "ecommerce-coder-13217.appspot.com",
  messagingSenderId: "95323912886",
  appId: "1:95323912886:web:692c752544bfbc05ca0417"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)