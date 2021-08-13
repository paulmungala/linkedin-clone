import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCzzdrtv9z122qteDkvW-y25sFMypfh1DQ",
    authDomain: "linkedin-cloneimbo.firebaseapp.com",
    projectId: "linkedin-cloneimbo",
    storageBucket: "linkedin-cloneimbo.appspot.com",
    messagingSenderId: "582046531116",
    appId: "1:582046531116:web:6e0cf0a12e104a4bc79b89",
    measurementId: "G-DB33M4L43C"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore( );
  const auth = firebase.auth( );
  const provider = new firebase.auth.GoogleAuthProvider( );
  const storage = firebase.storage( );

  export { auth, provider, storage };
  export default db;