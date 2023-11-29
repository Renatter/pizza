import {
    initializeApp
} from "firebase/app";
import {
    getAuth
} from "firebase/auth";
import {
    getFirestore
} from "firebase/firestore";

import {
    getStorage
} from "firebase/storage";

const firebaseConfig = {

    apiKey: "AIzaSyBMwEYmKnxqE6D6JdZRZ4_bhm1oh7FZt9w",

    authDomain: "pizza-9bde2.firebaseapp.com",

    projectId: "pizza-9bde2",

    storageBucket: "pizza-9bde2.appspot.com",

    messagingSenderId: "442479900163",

    appId: "1:442479900163:web:de6f28bb171ae27458c036"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
//initialize firebase auth
const auth = getAuth(app);
const db = getFirestore(app)
const storage = getStorage(app);
export {
    auth,
    db,
    storage
}