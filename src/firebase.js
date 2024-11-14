import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {createUserWithEmailAndPassword,
        getAuth,
        signInWithEmailAndPassword,
        signOut} from "firebase/auth";
import {addDoc, 
        collection, 
        getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyAff7onpknEb4tppYTaN8y3Ap86PnwURsc",
  authDomain: "netflix-demo-2e278.firebaseapp.com",
  projectId: "netflix-demo-2e278",
  storageBucket: "netflix-demo-2e278.firebasestorage.app",
  messagingSenderId: "80069525093",
  appId: "1:80069525093:web:87eba05d9c7acfab4f108c",
  measurementId: "G-8EXYMSE56N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password)=>{
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "user"),{
        uid: user.uid,
        name,
        atuhprovider: "local",
        email,
      })
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
    
}

const login = async (email, password)=>{
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout = ()=>{
    signOut(auth);
}

export {auth, db, login, signup, logout};