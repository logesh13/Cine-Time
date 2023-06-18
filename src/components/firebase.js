import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from '@firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAF8rh5zPGavp5uZF-bZZ_avfhHulB_sXw",
  authDomain: "cine--book.firebaseapp.com",
  projectId: "cine--book",
  storageBucket: "cine--book.appspot.com",
  messagingSenderId: "631955218603",
  appId: "1:631955218603:web:7dc6609f89c9c06cbe17ee",
  measurementId: "G-Y353C26TLX"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);