import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCEL74fI2SOus0yKlWA1Ixl1w4MnRY2P0I",
  authDomain: "bestie-673df.firebaseapp.com",
  databaseURL: "https://bestie-673df-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bestie-673df",
  storageBucket: "bestie-673df.firebasestorage.app",
  messagingSenderId: "161395655353",
  appId: "1:161395655353:web:aecae683880affe1471168",
  measurementId: "G-S17X9HYY0F"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
