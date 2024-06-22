
import { initializeApp } from "firebase/app";

import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged 


 } from "firebase/auth";

 import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAWKf2hxVILA0hwbz43pDVXWKWKRhPGcQ4",
  authDomain: "crwn-colth-shop.firebaseapp.com",
  projectId: "crwn-colth-shop",
  storageBucket: "crwn-colth-shop.appspot.com",
  messagingSenderId: "1089452149580",
  appId: "1:1089452149580:web:ce38b16c9f520d98d89de9"
};
   
const firebaseApp = initializeApp(firebaseConfig);

const provider  = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () =>  signInWithPopup(auth, provider)


export const db = getFirestore()

export const createUserDocumentFromAuth = async (
  userAuth, additionalInformaiton = {}
)  =>  {
  const userDocRef=  doc(db, 'users' , userAuth.uid)
  
  const userSnappshot = await getDoc(userDocRef)

  if(!userSnappshot.exists()){
    const  {displayName, email } = userAuth;
    const createdAt = new Date();
    try{
        await setDoc(userDocRef,{
            displayName,
            email,
            createdAt,
            ...additionalInformaiton
        })
    }catch(error){
        console.error('error creating the user', error.message)
    }
  }
  return userDocRef
  
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email  || !password ) return;
 return await createUserWithEmailAndPassword(auth, email, password)
}
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email  || !password ) return;
 return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth);

export const     onAuthStateChangedListner 
=  (callback) =>  onAuthStateChanged(auth, callback);


/**
 * 
 * {
 * next: callback,
 * error: errorcallcackk,
 *  complete: completecallback
 * }
 */