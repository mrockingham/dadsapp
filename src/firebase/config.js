import * as firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB2wafhrHG8sm9ZHCYaOVHYb3OpPyEEKeo",
    authDomain: "dadfire-3e125.firebaseapp.com",
    databaseURL: "https://dadfire-3e125.firebaseio.com",
    projectId: "dadfire-3e125",
    storageBucket: "dadfire-3e125.appspot.com",
    messagingSenderId: "145476826199",
    appId: "1:145476826199:web:e52dc7eefaa6647a999f12"
  };

  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export {projectStorage, projectFirestore, timestamp };