import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAxwCM7ZQuSQmMlGqFtQwWSBPSpR0UvB6Y",
    authDomain: "otp-res11.firebaseapp.com",
    projectId: "otp-res11",
    storageBucket: "otp-res11.appspot.com",
    messagingSenderId: "130651622427",
    appId: "1:130651622427:web:a30aea47d87ab1f3b6bcbe",
    measurementId: "G-369397PS6D"
};
firebase.initializeApp(firebaseConfig);

export default firebase