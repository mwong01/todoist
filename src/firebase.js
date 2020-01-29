import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCSMsdO3Pk0C2x8Pm91Y-9X-_6X3tJeio4",
  authDomain: "todoist-clone-bb5c6.firebaseapp.com",
  databaseURL: "https://todoist-clone-bb5c6.firebaseio.com",
  projectId: "todoist-clone-bb5c6",
  storageBucket: "todoist-clone-bb5c6.appspot.com",
  messagingSenderId: "755272973361",
  appId: "1:755272973361:web:0c455ce0cbccb2fe3fe910",
  measurementId: "G-5MMY4GWPDQ"
});

export { firebaseConfig as firebase };

