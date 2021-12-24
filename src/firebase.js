import firebase from "firebase";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyD9Pd-ultXvz3AFIRQ4GcXfQyeuM_jnuwA",
    authDomain: "cart-e9a71.firebaseapp.com",
    projectId: "cart-e9a71",
    storageBucket: "cart-e9a71.appspot.com",
    messagingSenderId: "91925942558",
    appId: "1:91925942558:web:06aeb9a49d8dc4d7d7390f"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;