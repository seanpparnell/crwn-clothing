import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDVz7X_0jRHCSnXI-z68SL0Kykykm-XMPM",
  authDomain: "crwn-clothing-db-4d1e2.firebaseapp.com",
  projectId: "crwn-clothing-db-4d1e2",
  storageBucket: "crwn-clothing-db-4d1e2.appspot.com",
  messagingSenderId: "794165853147",
  appId: "1:794165853147:web:d8c008fcc5b5cb612c85fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  // console.log(userDocRef)

  const userSnapshot = await getDoc(userDocRef)
  // console.log(userSnapshot)
  // console.log(userSnapshot.exists());

// if user does NOT exist

  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch (error) {
      console.log('error creating the user', error.message )
    }
  }

  return userDocRef;

  // if user data exists

  // create / set the document with the data from userAuth in my collection

  // if user data does NOT exist

  // return userDocRef
}
