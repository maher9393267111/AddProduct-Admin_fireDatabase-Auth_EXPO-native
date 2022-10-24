import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

// add firebase config
const firebaseConfig = {

    apiKey: "AIzaSyA1aPqjHTrPxoFlVxF-lLiAI3cy2i3SR5k",
    authDomain: "maher-vue.firebaseapp.com",
    databaseURL: "https://maher-vue-default-rtdb.firebaseio.com",
    projectId: "maher-vue",
    storageBucket: "maher-vue.appspot.com",
    messagingSenderId: "694861415607",
    appId: "1:694861415607:web:269a6d6a8d2d4b755c7932"
  



};

// initialize firebase
initializeApp(firebaseConfig);

// initialize auth
const auth = getAuth();
const db = getDatabase();
const storage = getStorage();
export { auth, db, storage };
