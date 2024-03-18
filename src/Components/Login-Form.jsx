import React, { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set } from "firebase/database";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, updateProfile  } from "firebase/auth";



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


export function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log(userCredential);

        } catch (error) {
            alert(error.message);

        }
    };

    return (
        <form  className="container mx-auto p-6 rounded-lg shadow-lg "  onSubmit={handleSubmit} style={{color: 'white', width:"100%", backgroundColor:"black" }}>
            <h2 className="mb-3">Login User</h2>
            <div className="form-floating mb-3">
                <input style={{backgroundColor: '#1B1B3A', color: 'white'}} type="email" className="form-control" id="emailInput" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="emailInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
                <input style={{backgroundColor: '#1B1B3A'}} type="password" className="form-control" id="passwordInput" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <label htmlFor="passwordInput">Password</label>
            </div>
            <button type="submit" className="btn btn-primary" style={{float: 'right'}}>Login</button>
        </form>
    );
}