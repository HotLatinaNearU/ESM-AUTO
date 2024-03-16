import Carousel from 'react-bootstrap/Carousel';
import React, { useState, useEffect } from 'react';
import '../App.css';
import {getStorage, getDownloadURL, ref as storageRef } from 'firebase/storage';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set } from "firebase/database";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, updateProfile  } from "firebase/auth";
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
const db = getDatabase(app);
const storage = getStorage(app);

export default function CardComponent() {
  const [imageUrlSer1, setImageUrlSer1] = useState(null);
  const [imageUrlSer2, setImageUrlSer2] = useState(null);
  const [imageUrlSer3, setImageUrlSer3] = useState(null);


  useEffect(() => {
    const imgRefs = [
      storageRef(storage, '/service1/service1'),
      storageRef(storage, '/service2/service2'),
      storageRef(storage, '/service3/service3'),
    ];

    const imgSetters = [
      setImageUrlSer1, setImageUrlSer2, setImageUrlSer3,
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
    <div>
      <Card style={{ width: '90%', backgroundColor: 'white', marginBottom: '10px', fontSize: "70%", marginLeft: '5%' }}>
        <Card.Img variant="top" src={imageUrlSer1} />
        <Card.Body>
          <Card.Title style={{ color: 'black' }}>Exterior</Card.Title>
          <Card.Text style={{ color: 'black' }}>
            Experience the ultimate car detailing service with ESM's Exterior package. Choose from our Basic Wash, Clay and Seal, or One/Two Step paint correction options to find the perfect solution for your car's needs.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '90%', backgroundColor: 'white', marginBottom: '10px', fontSize: "70%", marginLeft: '5%' }}>
        <Card.Img variant="top" src={imageUrlSer2} />
        <Card.Body>
          <Card.Title style={{ color: 'black' }}>Interior</Card.Title>
          <Card.Text style={{ color: 'black' }}>
            At ESM Auto, we understand that your car is not just a means of transportation; it’s an extension of your personality. That’s why we offer a range of mobile car detailing services to suit your needs.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '90%', backgroundColor: 'white', marginBottom: '10px', fontSize: "70%", marginLeft: '5%' }}>
        <Card.Img variant="top" src={imageUrlSer3} />
        <Card.Body>
          <Card.Title style={{ color: 'black' }}>Ceramic Coating</Card.Title>
          <Card.Text style={{ color: 'black' }}>
            Upgrade your car's protection from the outside world with our ceramic coating service. We offer one and three-year options so you can choose the level of protection that suits your needs.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}