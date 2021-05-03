import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";
// need to somehow seed the database
// need a config here
const config = {
  apiKey: "AIzaSyBj3o0U4AsLOU00mwnrrl-5xrCy6JY35zA",
  authDomain: "netflix-notusp.firebaseapp.com",
  projectId: "netflix-notusp",
  storageBucket: "netflix-notusp.appspot.com",
  messagingSenderId: "341764408861",
  appId: "1:341764408861:web:cd571705d46ee708b1e8f4",
};

const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);

export { firebase };
