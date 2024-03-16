import React, { useState, useEffect } from 'react';
import { getDatabase, ref, get, remove } from 'firebase/database';
import { getAuth, onAuthStateChanged, signOut, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { LoginForm } from '../Components/Login-Form.jsx';
import '../App.css';
import { initializeApp } from "firebase/app";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL, listAll, deleteObject } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { NavbarSignedIn } from '../Components/Top-Nav';
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
 
  function BackEnd() {
    const [user, setUser] = useState(null);
    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });
        return () => unsubscribe();
    }, []);

    const handleLogOut = async () => {
        await signOut(auth);
        console.log('User signed out successfully');
    };

    const uploadFile = async (index) => {
        let IMAGES = ['slide1', 'slide2', 'slide3', 'slide4', 'service1', 'service2', 'service3']
        const folder = IMAGES[index];
        try {
            const folderRef = storageRef(storage, folder);
    
            const listResult = await listAll(folderRef);
            
            await Promise.all(listResult.items.map(async (item) => {
                await deleteObject(item);
                console.log("Deleted item:", item.fullPath);
            })); 
    
            // Upload the new image
            const imageRef = storageRef(storage, `${folder}/${uuidv4()}`);
            await uploadBytes(imageRef, imageUpload);
            const downloadURL = await getDownloadURL(imageRef);
            setImageUrls([downloadURL]);
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };
    

    if (user) {
        return (
            <div style={{}}>
                <NavbarSignedIn/>
                <h1 style={{ fontSize: "150%", color:"white", marginTop:"9%" }}>Welcome, {user.email}</h1>
                <button onClick={handleLogOut} className="btn btn-primary" >
                    Sign out
                </button>
                
                <div className="App" style={{marginTop:"10%"}}>
                    <Form.Select id='dropdown' aria-label="Default select example" style={{borderColor:"black", borderWidth:"2px",borderRadius:"50px", fontSize:"100%"}}  >
                        <option value="0">Slide1</option>
                        <option value="1">Slide2</option>
                        <option value="2">Slide3</option>
                        <option value="3">Slide4</option>
                        <option value="4">Service1</option>
                        <option value="5">Service2</option>
                        <option value="6">Service3</option>
                    </Form.Select>
                    <input 
                        style={{marginTop:"8%"}}
                        type="file"
                        onChange={(event) => {
                            setImageUpload(event.target.files[0]);
                        }}
                    />
                    <p></p>
                    <button className="btn btn-primary" onClick={() => uploadFile(dropdown.value)} > Upload Image</button>
                </div>
            </div>
        );
    } else {
        return(
            <div>
                <NavbarSignedIn/>
                <LoginForm />
            </div>
        );
    }
}

export default BackEnd;