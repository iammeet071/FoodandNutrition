import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDtX4Gl46SRNhDr9HVKxu7JiaMKdFMHI2Y",
    authDomain: "foodapp-5de9d.firebaseapp.com",
    projectId: "foodapp-5de9d",
    storageBucket: "foodapp-5de9d.appspot.com",
    messagingSenderId: "367795177862",
    appId: "1:367795177862:web:5d26365f6ce44dd421c407"
  };
  firebase.initializeApp(firebaseConfig);

  const auth=firebase.auth();

  const provider=new firebase.auth.GoogleAuthProvider();
  export {auth,provider}

 