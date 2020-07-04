import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC45kLcZ7BIPfedCa-8LTW8ye6e-Gu8MoE",
    authDomain: "clothing-db-26d0c.firebaseapp.com",
    databaseURL: "https://clothing-db-26d0c.firebaseio.com",
    projectId: "clothing-db-26d0c",
    storageBucket: "clothing-db-26d0c.appspot.com",
    messagingSenderId: "386078802909",
    appId: "1:386078802909:web:d2215bbd1f2d88a301ec34",
    measurementId: "G-MFLSN0JZFL"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const fireStore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promp: 'select_account'});

export const signInWithGoogle = () => (auth.signInWithPopup(provider));

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = fireStore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch(error){
            console.log('error creating user ', error.message);
        }
    }

    return userRef;
}

export default firebase;