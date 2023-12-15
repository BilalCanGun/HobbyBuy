import firebase from "firebase/compat/app"
import "firebase/compat/auth"


const firebaseConfig = {
    apiKey: "AIzaSyDEa88pkU7VUHSGm2JJ5wTtBBBuHhjwpsE",
    authDomain: "hobbybuy-1.firebaseapp.com",
    projectId: "hobbybuy-1",
    storageBucket: "hobbybuy-1.appspot.com",
    messagingSenderId: "127695650822",
    appId: "1:127695650822:web:1fdd50762b10d681aa4387"
  };

  firebase.initializeApp(firebaseConfig);
  const projectAuth=firebase.auth();
  export {projectAuth};