import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
      apiKey: "AIzaSyBkimGbD_H2nmqL1E8d9s5bD09ugPHNtI0",
      authDomain: "facebook-clone-4342b.firebaseapp.com",
      projectId: "facebook-clone-4342b",
      storageBucket: "facebook-clone-4342b.appspot.com",
      messagingSenderId: "459066037639",
      appId: "1:459066037639:web:a3b15076a2c0929915ef22",
      measurementId: "G-CYWF32SRCC"
};

const firebaseApp=firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore()
const auth=firebase.auth()
const provider=new firebase.auth.GoogleAuthProvider()


export {auth,provider};
export default db;