// src/lib/firebase.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBUMhi8ZjKip7ALwR9kqzIEcx5LouPiZXw",
    authDomain: "kayak-fb4b5.firebaseapp.com",
    projectId: "kayak-fb4b5",
    storageBucket: "kayak-fb4b5.appspot.com",
    messagingSenderId: "1005268524770",
    appId: "1:1005268524770:web:7ec2a86e70e6fb4e6ec8bb"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
