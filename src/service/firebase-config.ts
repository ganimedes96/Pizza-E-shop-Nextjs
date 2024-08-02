import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZMmsIWNWReCIPG0WHuZ8eU06zu_fWHN0",
  authDomain: "pizzadrua-ffa15.firebaseapp.com",
  projectId: "pizzadrua-ffa15",
  storageBucket: "pizzadrua-ffa15.appspot.com",
  messagingSenderId: "271345613595",
  appId: "1:271345613595:web:772398cc76b686d209f1be",
  measurementId: "G-2RBGN2WBGX"
};

const app = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export const handleSignInGoogle = async () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log(user);
      
    }).catch((error) => {
      console.log(error);
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // const email = error.customData.email;
      // const credential = GoogleAuthProvider.credentialFromError(error);
    });

}