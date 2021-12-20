import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyCmZp8iMCTpbqQIvp0XtSdN4IgyYTYcjqo",
    authDomain: "auth-project-kt.firebaseapp.com",
    projectId: "auth-project-kt",
    storageBucket: "auth-project-kt.appspot.com",
    messagingSenderId: "950689349437",
    appId: "1:950689349437:web:84292cec678d001dd6cf54",
    measurementId: "G-6THXTTQELW"
  };

  const app = initializeApp(firebaseConfig)

  export  const authentication = getAuth(app)