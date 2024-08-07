import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDj73Z-y_FiqRpRs9hd73yTTKJyVxr0cbg",
  authDomain: "fir-5d92a.firebaseapp.com",
  projectId: "fir-5d92a",
  storageBucket: "fir-5d92a.appspot.com",
  messagingSenderId: "909830740192",
  appId: "1:909830740192:web:f4069620bd24a027d7d885",
  measurementId: "G-NGLH7VHM4D"
};


export default firebase.initializeApp(firebaseConfig)