import { initializeApp } from "firebase/app";
import { getFirestone } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDsMyfN_TkqGa-p9nzI06aiEE2V0A99XuQ",
  authDomain: "calzado-cotidiano.firebaseapp.com",
  projectId: "calzado-cotidiano",
  storageBucket: "calzado-cotidiano.appspot.com",
  messagingSenderId: "760955874412",
  appId: "1:760955874412:web:b11569f2abbe36588d7c49",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestone(app);
