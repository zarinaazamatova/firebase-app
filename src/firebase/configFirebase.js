import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDXQcCcLcNRd2mxSHpbv1C1euuMtePMnHs",
  authDomain: "react-firebase-69975.firebaseapp.com",
  projectId: "react-firebase-69975",
  storageBucket: "react-firebase-69975.appspot.com",
  messagingSenderId: "291139786839",
  appId: "1:291139786839:web:a8c992427217a631f02b12"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app)
export const storage = getStorage(app)

