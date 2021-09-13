import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

// we need to somehow seed the database

// we need a config here
const config = { 
  apiKey: "AIzaSyDw4xcgB52KEAMB0lbevAWb4y_NTW2ZfNA",
  authDomain: "netflix-react-fa355.firebaseapp.com",
  projectId: "netflix-react-fa355",
  storageBucket: "netflix-react-fa355.appspot.com",
  messagingSenderId: "289794403489",
  appId: "1:289794403489:web:4d3266919f0aabfe9b94e0"
};

const firebase = Firebase.initializeApp(config);   

// seedDatabase(firebase);

export { firebase };