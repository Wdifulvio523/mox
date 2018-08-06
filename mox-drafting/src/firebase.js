import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyDYNBLn6HbVMmOjgDM7QNZFYiaEwvLHlIg",
    authDomain: "mox-drafting.firebaseapp.com",
    databaseURL: "https://mox-drafting.firebaseio.com",
    projectId: "mox-drafting",
    storageBucket: "mox-drafting.appspot.com",
    messagingSenderId: "977400971186"
  };
  firebase.initializeApp(config);
  export default firebase;