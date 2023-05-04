import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore' 
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCFhlLIEVU6AZ2nKuzY2SNNXjPjwkzl6Ho",
    authDomain: "calling-system-a8e35.firebaseapp.com",
    projectId: "calling-system-a8e35",
    storageBucket: "calling-system-a8e35.appspot.com",
    messagingSenderId: "791017562361",
    appId: "1:791017562361:web:570217e4a1f2e1774b4228",
    measurementId: "G-PCVDGENS4B"
  };

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };
