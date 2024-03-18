import React, { useState, useEffect } from 'react';
import { NavbarSignedIn } from '../Components/Top-Nav';
import FadeIn from "react-fade-in";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export function ContactEsmMob() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const opacity = 1 - scrollY / window.innerHeight;

    return (
        <div style={{ width: '100%', zIndex: 1, padding: '10px' }} className='shadow-lg'>
        <NavbarSignedIn />
        <FadeIn delay={1000} transitionDuration={800} style={{ opacity }}>
            <div style={{ marginBottom: '47%', marginTop:"22%" }}> 
                <Form style={{ backgroundColor: "white", padding: '15px', borderRadius: '20px', fontSize: "100%", height: "100%" }}>
                <h1 style={{color:"black", fontSize:"220%"}}>Contact us.</h1>
                    <Form.Group className="mb-3">
                        <Form.Label style={{fontSize:"125%", fontWeight:"normal"}}>First Name</Form.Label>
                        <Form.Control style={{borderColor:"black", borderRadius:"20px", borderWidth:"2px", fontSize:"110%"}} type="text" placeholder="Enter first name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label style={{fontSize:"125%", fontWeight:"normal"}}>Last Name</Form.Label>
                        <Form.Control style={{borderColor:"black", borderRadius:"20px", borderWidth:"2px", fontSize:"110%"}} type="text" placeholder="Enter last name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label style={{fontSize:"125%", fontWeight:"normal"}}>Email address</Form.Label>
                        <Form.Control style={{borderColor:"black", borderRadius:"20px", borderWidth:"2px", fontSize:"110%"}} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label style={{fontSize:"125%", fontWeight:"normal"}}>Phone Number</Form.Label>
                        <Form.Control style={{borderColor:"black", borderRadius:"20px", borderWidth:"2px", fontSize:"110%"}}  type="tel" id="phone" name="phone" placeholder="Phone #" required/>
                    </Form.Group>
                    <Form.Label style={{fontSize:"125%", fontWeight:"normal"}}>Service</Form.Label>

                    <Form.Select aria-label="Default select example" style={{borderColor:"black", borderRadius:"20px", borderWidth:"2px", fontSize:"110%"}}   >
                        <option value="1">Basic interior</option>
                        <option value="2">Basic wash</option>
                        <option value="3">Basic package</option>
                        <option value="4">Deep interior</option>
                        <option value="5">Wash, Decontamination, Clay and Seal</option>
                        <option value="6">One step polish</option>
                        <option value="7">2 step paint correction</option>
                        <option value="8">1 year ceramic coating</option>
                        <option value="9">3-5 year ceramic coating</option>
                    </Form.Select>
                    <p></p>
                    <Button variant="light" type="submit" style={{borderColor:"black", borderRadius:"20px", width:"100%", borderWidth:"2px", marginTop:"2%", fontSize:"120%", fontWeight:"normal", color:"white", backgroundColor:"black"}}>
                        Submit
                    </Button>

                </Form>

                </div>

            </FadeIn>
        </div>
    );
}



export function ContactEsmDesk() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const opacity = 1 - scrollY / window.innerHeight;

    return (
        <div style={{ width: '100%', padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} className='shadow-lg'>
          <NavbarSignedIn />
          <FadeIn delay={1000} transitionDuration={800} style={{ opacity }}>
            <div style={{ width: '1000%', maxWidth: '800px', backgroundColor: 'white', padding: '30px', borderRadius: '20px', fontSize: '1.2rem', marginLeft:"-40%" }}>
              <h1 style={{ color: 'black', fontSize: '2.5rem', marginBottom: '30px', textAlign: 'center' }}>Contact us</h1>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label style={{ fontSize: '1.2rem', fontWeight: 'normal' }}>First Name</Form.Label>
                  <Form.Control style={{ borderColor: 'black', borderRadius: '20px', borderWidth: '2px' }} type="text" placeholder="Enter first name" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label style={{ fontSize: '1.2rem', fontWeight: 'normal' }}>Last Name</Form.Label>
                  <Form.Control style={{ borderColor: 'black', borderRadius: '20px', borderWidth: '2px' }} type="text" placeholder="Enter last name" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label style={{ fontSize: '1.2rem', fontWeight: 'normal' }}>Email address</Form.Label>
                  <Form.Control style={{ borderColor: 'black', borderRadius: '20px', borderWidth: '2px' }} type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label style={{ fontSize: '1.2rem', fontWeight: 'normal' }}>Phone Number</Form.Label>
                  <Form.Control style={{ borderColor: 'black', borderRadius: '20px', borderWidth: '2px' }} type="tel" id="phone" name="phone" placeholder="Phone #" required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label style={{ fontSize: '1.2rem', fontWeight: 'normal' }}>Service</Form.Label>
                  <Form.Select aria-label="Service" style={{ borderColor: 'black', borderRadius: '20px', borderWidth: '2px' }}>
                    <option value="1">Basic interior</option>
                    <option value="2">Basic wash</option>
                    <option value="3">Basic package</option>
                    <option value="4">Deep interior</option>
                    <option value="5">Wash, Decontamination, Clay and Seal</option>
                    <option value="6">One step polish</option>
                    <option value="7">2 step paint correction</option>
                    <option value="8">1 year ceramic coating</option>
                    <option value="9">3-5 year ceramic coating</option>
                  </Form.Select>
                </Form.Group>
                <Button variant="light" type="submit" style={{ borderColor: 'black', borderRadius: '20px', width: '100%', marginTop: '20px', fontSize: '1.4rem', fontWeight: 'normal', color: 'white', backgroundColor: 'black' }}>
                  Submit
                </Button>
              </Form>
            </div>
          </FadeIn>
        </div>
      );
      
}
