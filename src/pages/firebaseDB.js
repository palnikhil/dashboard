import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

 const firebaseConfig = {
   apiKey: "AIzaSyB1MH7cN72sDyMYITc2k7muW7yXebspfu0",
   authDomain: "mazed-3b6ec.firebaseapp.com",
   projectId: "mazed-3b6ec",
   storageBucket: "mazed-3b6ec.appspot.com",
   databaseURL: "https://mazed-3b6ec-default-rtdb.firebaseio.com/",
   messagingSenderId: "9477031392",
   appId: "1:9477031392:web:f6b7edc6c60394d1191785"
 };
	
// firebase.initializeApp(firebaseConfig);
// var database = firebase.database();

// export default database;
const fdb = initializeApp(firebaseConfig);
const database = getDatabase(fdb);

export default database;

