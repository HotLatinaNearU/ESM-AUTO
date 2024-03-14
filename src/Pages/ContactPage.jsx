import React, { useState, useEffect } from 'react';
import { NavbarSignedIn } from '../Components/Top-Nav';
import DropdownSel from '../Components/Dropdown.jsx';
import FadeIn from "react-fade-in";

export default function ContactEsm() {
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
        <div style={{ position: 'fixed', top: 110, left: '6%', width: '90%', zIndex: 1, padding: '20px',  }} className='shadow-lg'>
            <NavbarSignedIn />
            <FadeIn delay={1000} transitionDuration={800} style={{ opacity }}>
                <form style={{backgroundColor: "white", padding: '15px', borderRadius: '20px'}}>
                    <h1 style={{color:"black", fontSize:"250%"}}>Contact us.</h1>
                    <p></p>
                    <div className="mb-4">
                        <label htmlFor="firstName" className="block text-black text-sm font-bold">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder="Enter your first name"
                            className="w-full px-3 py-2 rounded-md bg-white text-black focus:outline-none focus:bg-white"
                            style={{ borderRadius: '50px', borderColor:"black", width:"100%" }}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lastName" className="block text-black text-sm font-bold">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            placeholder="Enter your last name"
                            className="w-full px-3 py-2 rounded-md bg-white text-black focus:outline-none focus:bg-white"
                            style={{ borderRadius: '50px', borderColor:"black", width:"100%" }}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lastName" className="block text-black text-sm font-bold">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            className="w-full px-3 py-2 rounded-md bg-white text-black focus:outline-none focus:bg-white"
                            style={{ borderRadius: '50px', borderColor:"black", width:"100%" }}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="service" className="block text-black text-sm font-bold">Select Service</label>
                        <DropdownSel />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-black text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                        style={{ borderRadius: '50px', width:"100%", marginTop:"10%" }}
                    >
                        Submit
                    </button>
                </form>
            </FadeIn>
        </div>
    );
}
