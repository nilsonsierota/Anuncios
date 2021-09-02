const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBhtu6us45hYCeGY9IV2BRjBq1eUUdQjBI",
  authDomain: "projeto-anuncios-e90fc.firebaseapp.com",
  databaseURL: "https://projeto-anuncios-e90fc.firebaseio.com",
  projectId: "projeto-anuncios-e90fc",
  storageBucket: "projeto-anuncios-e90fc.appspot.com",
  messagingSenderId: "228898841529",
  appId: "1:228898841529:web:7a5774083898ae4825cc68"
};

firebase.initializeApp(firebaseConfig);

export const database = firebase.firestore();
export const auth = firebase.auth();