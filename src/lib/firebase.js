import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const config = {
    apiKey: "AIzaSyAvHfuQitnQSjLszquBHC1w_mcJZ47KMWw",
    authDomain: "social-ntwk.firebaseapp.com",
    projectId: "social-ntwk",
    storageBucket: "social-ntwk.appspot.com",
    messagingSenderId: "206483686099",
    appId: "1:206483686099:web:4d37b65e992b2729c04a26"};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore; 



export {firebase, FieldValue};