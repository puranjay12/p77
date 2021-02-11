import firebase from "firebase"
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAQixW1xro0wlzFGC1LdgrK4to_ZEhmVLg",
  authDomain: "barter-36143.firebaseapp.com",
  projectId: "barter-36143",
  storageBucket: "barter-36143.appspot.com",
  messagingSenderId: "434871705144",
  appId: "1:434871705144:web:ebe9d87d724c84700f90cd"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();