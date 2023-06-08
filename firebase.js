// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  onSnapshot, 
  deleteDoc,
  doc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8wjGdbeF4dG--REtkKGbyW7vBWi7kbiA",
  authDomain: "crud-firebase-c6880.firebaseapp.com",
  projectId: "crud-firebase-c6880",
  storageBucket: "crud-firebase-c6880.appspot.com",
  messagingSenderId: "239122251683",
  appId: "1:239122251683:web:eae20e73b720eb2afea416"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

export const saveTask = (title, description) => {
  addDoc(collection(db, 'tasks'), {
    title, description
  });
}

export const getTasks = () => getDocs( collection(db, 'task') )

export const onGetTasks = (callback) => onSnapshot( collection(db,'tasks'), callback)

export const deleteTask = id => deleteDoc( doc(db, 'tasks', id) );

export const getTask = id => getDoc( doc(db, 'tasks', id) );

export const updateTask = (id, newsFields) => updateDoc(doc(db,'tasks',id), newsFields)