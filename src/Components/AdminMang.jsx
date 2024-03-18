import React, { useState, useEffect } from 'react';
import { getDatabase, ref, get, remove } from 'firebase/database';
import { getAuth, onAuthStateChanged, signOut, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { LoginForm } from './Login-Form.jsx';
import '../App.css';
import { initializeApp } from "firebase/app";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL, listAll, deleteObject } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { NavbarSignedIn } from './Top-Nav.jsx';
import Form from 'react-bootstrap/Form';

const firebaseConfig = {
    apiKey: "AIzaSyBgTlxGlidVt_EpjVfXcxsji1trkcMTtQ4",
    authDomain: "esm-auto.firebaseapp.com",
    databaseURL: "https://esm-auto-default-rtdb.firebaseio.com",
    projectId: "esm-auto",
    storageBucket: "esm-auto.appspot.com",
    messagingSenderId: "646405515422",
    appId: "1:646405515422:web:afc778cbecfc0008fc738f",
    measurementId: "G-LS5H0N68BE"
  };


const app = initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth(app);
const dbref = ref(db);
const storage = getStorage(app); 

export  function AdminCon(){
  const [user, setUser] = useState(null);

  
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });
        return () => unsubscribe();
    }, []);



    if(user){
      return(
        <div>
        <input style={{marginTop:"8%", }} type="file" onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
        />
        <p></p>
        <button className="btn btn-primary" onClick={() => uploadFile(dropdown.value)} > Upload Image</button>
          </div>
      );
    }else{
        return(<p></p>);
    }
}