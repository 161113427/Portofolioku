import * as firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyDnky5Ed6YMTbYnEcNvjSgrRwhT2AfcWaI",
    authDomain: "ismail-portfolio-b1dd1.firebaseapp.com",
    databaseURL: "https://ismail-portfolio-b1dd1.firebaseio.com",
    projectId: "ismail-portfolio-b1dd1",
    storageBucket: "ismail-portfolio-b1dd1.appspot.com",
    messagingSenderId: "553459398128",
    appId: "1:553459398128:web:f202de041bc564c0d89935",
    measurementId: "G-V8NY2WWKSR"
  }

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : ''

export default firebase