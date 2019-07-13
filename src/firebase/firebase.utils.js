import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyDvNrPmcyl8q2AeiCCyLtRuCKYevNWtaXA",
        authDomain: "jwel-db.firebaseapp.com",
        databaseURL: "https://jwel-db.firebaseio.com",
        projectId: "jwel-db",
        storageBucket: "",
        messagingSenderId: "615316912711",
        appId: "1:615316912711:web:00deaca7a3ddc707"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
        if (!userAuth) return;
        const userRef = firestore.doc(`users/${userAuth.uid}`);
        const snapShot = await userRef.get()
        console.log(snapShot);

        if (!snapShot.exists) {
                const { displayName, email } = userAuth;
                const createdAt = new Date();

                try {
                        await userRef.set({
                                displayName,
                                email,
                                createdAt,
                                ...additionalData
                        })
                } catch (error) {
                        console.log('error creating user', error.message);
                }
        }

        return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;
