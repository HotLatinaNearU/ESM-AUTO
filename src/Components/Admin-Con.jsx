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
import Carousel from 'react-bootstrap/Carousel';
import { Card } from 'react-bootstrap';



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
 
  export default function AdminCon({imageClicked}) {
    const [user, setUser] = useState(null);
    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);

    const [imageUrl1, setImageUrl1] = useState(null);
    const [imageUrl2, setImageUrl2] = useState(null);
    const [imageUrl3, setImageUrl3] = useState(null);
    const [imageUrl4, setImageUrl4] = useState(null);
    const [imageUrlSer1, setImageUrlSer1] = useState(null);
    const [imageUrlSer2, setImageUrlSer2] = useState(null);
    const [imageUrlSer3, setImageUrlSer3] = useState(null);


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });
        return () => unsubscribe();
    }, []);
    

    useEffect(() => {
        const imgRefs = [
            storageRef(storage, '/slide1'),
            storageRef(storage, '/slide2'),
            storageRef(storage, '/slide3'),
            storageRef(storage, '/slide4'),
            storageRef(storage, '/service1'),
            storageRef(storage, '/service2'),
            storageRef(storage, '/service3'),

        ];
    
        const imgSetters = [
            setImageUrl1,
            setImageUrl2,
            setImageUrl3,
            setImageUrl4,
            setImageUrlSer1,
            setImageUrlSer2,
            setImageUrlSer3,
        ];
    
        imgRefs.forEach((imageRef, index) => {
            getDownloadURL(imageRef)
                .then((url) => {
                    imgSetters[index](url);
                })
                .catch((error) => {
                    console.error('Error getting download URL:', error);
                });
        });


    }, []);


    const uploadFile = async (index) => {
        let IMAGES = ['slide1', 'slide2', 'slide3', 'slide4', 'service1', 'service2', 'service3'];
        const folder = IMAGES[index];
        try {
            const folderRef = storageRef(storage, folder);
    
            const listResult = await listAll(folderRef);
            
            await Promise.all(listResult.items.map(async (item) => {
                await deleteObject(item);
                console.log("Deleted item:", item.fullPath);
            }));
    
            const imageName = folder;
            const imageRef = storageRef(storage, `/${imageName}`);
            await uploadBytes(imageRef, imageUpload);
            const downloadURL = await getDownloadURL(imageRef);
            setImageUrls([downloadURL]);
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };


if(user){
    return(
            <div>
                <input style={{marginTop:"8%"}} type="file" onChange={(event) => {
                setImageUpload(event.target.files[0]);
                }}
                />
                <p></p>
                <button className="btn btn-primary" onClick={() => uploadFile(imageClicked)} > Upload Image</button>
            </div>
    );
    }else{
        return(
            <div></div>
    );
    }
}

