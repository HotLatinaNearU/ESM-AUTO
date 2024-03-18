import React, { useState, useEffect } from 'react';
import { NavbarSignedIn } from '../Components/Top-Nav';
import '../App.css';
import { CarouselComponentMobile, CarouselComponentDesktop } from '../Components/Carousel.jsx';
import FadeIn from "react-fade-in";
import {CardComponentMob, CardComponentDesk} from '../Components/Cards.jsx';
import {useNavigate} from "react-router-dom";
import { NavLink } from 'react-bootstrap';
import {getStorage, getDownloadURL, ref as storageRef } from 'firebase/storage';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set } from "firebase/database";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, updateProfile  } from "firebase/auth";
import ReviewSection from "../Components/Reviews.jsx"

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


//https://blog.logrocket.com/9-ways-deploy-react-app-free/

//Accordion on Bootstrap

export function WelcomeMobile() {
  const navigateTo = useNavigate();

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const opacity = 1 - scrollY / window.innerHeight;


    const [imageUrl, setImageUrl] = useState(null);
  
    useEffect(() => {
      const imagePath = '/service1'; 
      const imageRef = storageRef(storage, imagePath);
  
      getDownloadURL(imageRef)
        .then((url) => {
          setImageUrl(url);
        })
        .catch((error) => {
          console.error('Error getting download URL:', error);
        });
    }, []);

  return (
    <div>
      <NavbarSignedIn />
      <FadeIn delay={1000} transitionDuration={800} style={{ opacity }}>
        <div style={{ marginTop: "15%" }}>
          <div className="bg-slate-1000 p-6 items-center text-white mr-6" style={{ height: "330px", padding: "5%" }}>
            <div className="text-center mb-7">
              <h1 >ESM AUTO</h1>
              <h2 style={{fontSize:"110%"}}>"We Do The Dirty Job For You"</h2>
              <div style={{ backgroundColor: "white", height: "5px", margin: "5px" }}></div>
              <div style={{ margin: "auto", width: "100%" }}>
                <CarouselComponentMobile />
              </div>
              <button type="button" onClick={() => navigateTo('/Contact')} className="btn btn-light" style={{ marginTop: "10%", width: "70%", height: "70px", borderRadius:"50px" }}>Contact Us</button>
            </div>
            <p></p>
            <p>⭐️⭐️⭐️⭐️⭐ quality </p>
          </div>
          <p></p>
        </div>

        <div style={{ paddingBottom: '5%', marginTop: '380px' }}>
          <h1 style={{color:"white", fontSize:"250%"}}>About Us</h1>
          <p>ESM was created by three enthusiasts who have a passion for cars. We want to help people find enjoyment in driving their vehicles by providing a great range of services and a great clean for everyone.</p>
        </div>

        <div style={{ paddingTop: '5%', paddingBottom: '5%' }}>
          <h1 style={{color:"white"}} >Our Services</h1>

          <CardComponentMob/>
        </div>



        <NavLink onClick={() => navigateTo('/back')} style={{color:"white"}}>admin</NavLink>

      </FadeIn>
    </div>
  );
}

export function WelcomeDesktop() {
  const navigateTo = useNavigate();

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  

  const opacity = 1 - scrollY / window.innerHeight;

  const dividerStyle = { 
    backgroundColor: "white", 
    height: "5px", 
    margin: "5px 0", 
  }; 
  

  return (
    <div>
      <NavbarSignedIn />
      <FadeIn delay={1000} transitionDuration={800} style={{ opacity }}>

      <div className="d-flex" style={{ marginTop:"5%"}}>
        <div className="bg-slate-1000 p-6 items-center text-white mr-6" style={{height:"330px", marginLeft:"8%"}}> 
          <div className="text-center mb-7" style={{marginTop:"45%"}}>
            <h1 style={{fontFamily: 'Rubik'}}>ESM AUTO</h1>
            <h2>"We Do The Dirty Job For You"</h2>
            <div style={dividerStyle}></div> 
            <button type="submit" className="btn btn-light" style={{marginTop:"10%", width:"70%", height:"80px"}}>Contact Us</button>
          </div>
          <p></p>
          <p>⭐️⭐️⭐️⭐️⭐️ Service</p>

        </div>

        <CarouselComponentDesktop />

      </div>


      <div style={{marginTop:"60px"}}>
    
      <h1 style={{color:"white"}}>About Us</h1>
      <p style={{fontSize:"130%"}}>ESM was created by three enthusiasts who have a passion for cars. We want to help people find enjoyment in driving there vehicles by providing a great range of services and a great clean for everyone.</p>



      </div>


      <h1 style={{color:"white", marginTop:"8%"}}>Services</h1>


        
      <CardComponentDesk />

        
     

      </FadeIn>

      <NavLink onClick={() => navigateTo('/back')} style={{color:"white"}}>admin</NavLink>

      
    </div>

    
  );
}
