import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDhyH1SPVfBW_do_wAZCwj5vm02I7zmD9M',
  authDomain: 'colorbone-db.firebaseapp.com',
  projectId: 'colorbone-db',
  storageBucket: 'colorbone-db.appspot.com',
  messagingSenderId: '844695608788',
  appId: '1:844695608788:web:dddaf6d5f18e7996e3ca41',
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log('from Firebase ', userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log('snap shot ', userSnapshot.exists());

  // if userSnapshot does not exist
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log('Error creating user', error);
    }
  }
  return userDocRef;
};
