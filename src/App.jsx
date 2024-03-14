import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { WelcomeDesktop, WelcomeMobile } from './Pages/WelcomePage';
import ContactEsm  from './Pages/ContactPage.jsx';
import ShowServices from './Pages/Services.jsx';
import CompletedWork from './Pages/Completed.jsx';
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
          <Route path="/Contact" element={<ContactEsm/>}/>
          <Route path="/Completed" element={<CompletedWork/>}/>
          <Route path="/Services" element={<ShowServices/>}/>

        </Routes>
      </Router>
    </>
  );
}

export default App;
