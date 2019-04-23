 import firebase from 'firebase';
 import firestore from 'firebase/firestore';

 // Initialize Firebase
 const config = {
   apiKey: "AIzaSyARemN3DyS7aUAV3v817HWKZ-LnCvuwbDE",
   authDomain: "live-chat-app-aad35.firebaseapp.com",
   databaseURL: "https://live-chat-app-aad35.firebaseio.com",
   projectId: "live-chat-app-aad35",
   storageBucket: "live-chat-app-aad35.appspot.com",
   messagingSenderId: "184382164601"
 };

 const firebaseApp = firebase.initializeApp(config);

 export default firebaseApp.firestore();
