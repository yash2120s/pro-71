import firebase from 'firebase'
require("@firebase/firestore")


 //Add configuration here
 const firebaseConfig = {
  apiKey: "AIzaSyAAGkPx9kXogM09Vbx4O65dCkfZ1aKBGb0",
  authDomain: "complaint-forum-860d3.firebaseapp.com",
  projectId: "complaint-forum-860d3",
  storageBucket: "complaint-forum-860d3.appspot.com",
  messagingSenderId: "229785307890",
  appId: "1:229785307890:web:9e4838ba6856aff794de6b"
};


firebase.initializeApp(firebaseConfig)
export default firebase.firestore()
