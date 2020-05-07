import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

export const firebaseConfig = {
  apiKey: "AIzaSyAiHp3BjojL5YJVqYJDotRamQYB_ekNpDE",
  authDomain: "test-ukeess.firebaseapp.com",
  databaseURL: "https://test-ukeess.firebaseio.com",
  projectId: "test-ukeess",
  storageBucket: "test-ukeess.appspot.com",
  messagingSenderId: "773661622359",
  appId: "1:773661622359:web:22b59e9f0293e26b6ea312",
  measurementId: "G-GGDM2P2959",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
