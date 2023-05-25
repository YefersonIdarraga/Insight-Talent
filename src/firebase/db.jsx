import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAO6NaPHfn6G0ZkUNxDexJd7seC1Rg2Pus",
  authDomain: "insighttalent-fbc39.firebaseapp.com",
  projectId: "insighttalent-fbc39",
  storageBucket: "insighttalent-fbc39.appspot.com",
  messagingSenderId: "637173219584",
  appId: "1:637173219584:web:381dec99ccc293c497b3e5",
  measurementId: "G-WSEB85GGD6"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);