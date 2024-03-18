import Carousel from 'react-bootstrap/Carousel';
import React, { useState, useEffect } from 'react';
import '../App.css';
import {getStorage, getDownloadURL, ref as storageRef } from 'firebase/storage';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set } from "firebase/database";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, updateProfile  } from "firebase/auth";
import AdminCon from '../Components/Admin-Con.jsx';


export function CarouselComponentMobile() {

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
    
    
    const [imageUrl1, setImageUrl1] = useState(null);
    const [imageUrl2, setImageUrl2] = useState(null);
    const [imageUrl3, setImageUrl3] = useState(null);
    const [imageUrl4, setImageUrl4] = useState(null);
    const [imageUrlSer1, setImageUrlSer1] = useState(null);
    const [imageUrlSer2, setImageUrlSer2] = useState(null);
    const [imageUrlSer3, setImageUrlSer3] = useState(null);


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
    

    return (
        <Carousel
            style={{ textAlign: 'center', zIndex:0}} 
            nextIcon={<span className="carousel-control-next-icon" aria-hidden="true" />} 
            prevIcon={<span className="carousel-control-prev-icon" aria-hidden="true" />} 
            
        > 
            <Carousel.Item interval={5000}> 
                <img 
                    className="d-block mx-auto" 
                    src={imageUrl1}
                    alt="Image One"
                    style={{ maxWidth: "100%", height: "400px" }}
                /> 
                <Carousel.Caption><AdminCon imageClicked={0}/></Carousel.Caption>
            </Carousel.Item> 
            <Carousel.Item interval={5000}> 
                <img 
                    className="d-block mx-auto" 
                    src={imageUrl2}
                    alt="Image Two"
                    style={{ maxWidth: "100%", height: "400px" }}
                /> 
            <Carousel.Caption><AdminCon imageClicked={1}/></Carousel.Caption>

            </Carousel.Item> 
            <Carousel.Item interval={5000}> 
                <img 
                    className="d-block mx-auto" 
                    src={imageUrl3}
                    alt="Image Two"
                    style={{ maxWidth: "100%", height: "400px" }}
                /> 
                <Carousel.Caption><AdminCon imageClicked={2}/></Carousel.Caption>

            </Carousel.Item> 
            <Carousel.Item interval={5000}> 
                <img 
                    className="d-block mx-auto" 
                    src={imageUrl4}
                    alt="Image Two"
                    style={{ maxWidth: "100%", height: "400px" }}
                /> 
                <Carousel.Caption><AdminCon imageClicked={3}/></Carousel.Caption>

            </Carousel.Item> 
        </Carousel> 
    ); 
}





export function CarouselComponentDesktop() {
    
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
    
    

    const [imageUrl1, setImageUrl1] = useState(null);
    const [imageUrl2, setImageUrl2] = useState(null);
    const [imageUrl3, setImageUrl3] = useState(null);
    const [imageUrl4, setImageUrl4] = useState(null);
    const [imageUrlSer1, setImageUrlSer1] = useState(null);
    const [imageUrlSer2, setImageUrlSer2] = useState(null);
    const [imageUrlSer3, setImageUrlSer3] = useState(null);


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
    
    return (
        <div style={{ display: 'block', width: "50%", padding: 30 }}> 
            <Carousel
                style={{ textAlign: 'center' }} 
                nextIcon={<span className="carousel-control-next-icon" aria-hidden="true" />} 
                prevIcon={<span className="carousel-control-prev-icon" aria-hidden="true" />} 
            > 
                <Carousel.Item interval={5000}> 
                    <img 
                        className="d-block"
                        src={imageUrl1}
                        alt="Image One"
                        style={{ width: "420px", height: "600px", margin: "auto" }}
                    />
                    <Carousel.Caption><AdminCon imageClicked={4}/></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}> 
                    <img 
                        className="d-block"
                        src={imageUrl2}
                        alt="Image Two"
                        style={{ width: "420px", height: "600px", margin: "auto" }}
                    />
                    <Carousel.Caption><AdminCon imageClicked={5}/></Carousel.Caption>
                </Carousel.Item> 
                <Carousel.Item interval={5000}> 
                    <img 
                        className="d-block"
                        src={imageUrl3}
                        alt="Image Two"
                        style={{ width: "420px", height: "600px", margin: "auto" }}
                    />
                    <Carousel.Caption><AdminCon imageClicked={4}/></Carousel.Caption>
                </Carousel.Item> 
                <Carousel.Item interval={5000}> 
                    <img 
                        className="d-block"
                        src={imageUrl4}
                        alt="Image Two"
                        style={{ width: "420px", height: "600px", margin: "auto" }}
                    /> 
                </Carousel.Item> 
            </Carousel> 
        </div> 
    ); 
}
