import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { WelcomeDesktop, WelcomeMobile } from './Pages/WelcomePage';
import BackEnd from './Pages/Back'; 
import {ContactEsmMob, ContactEsmDesk}  from './Pages/ContactPage.jsx';
import {ShowServicesMobile, ShowServicesDesk} from './Pages/Services.jsx';
import { getDatabase, ref } from 'firebase/database';


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

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={isMobile ? <WelcomeMobile /> : <WelcomeDesktop />} />
          <Route path="/Contact" element={isMobile ? <ContactEsmMob /> : <ContactEsmDesk />}/>
          <Route path="/Services" element={isMobile ? <ShowServicesMobile /> : <ShowServicesDesk />}/>
          <Route path="/Back" element={<BackEnd/>}/> 
        </Routes>
      </Router>
    </>
  );
}

export default App;
