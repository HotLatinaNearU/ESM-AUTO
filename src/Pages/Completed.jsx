import { NavbarSignedIn } from '../Components/Top-Nav';
import Carousel from "react-bootstrap/Carousel";
import img2 from "../assets/esm2.jpg";
import ImgPac1 from "../assets/Pacifica.jpg";
import ImgPac2 from "../assets/Pacifica2.jpg";
import img4 from "../assets/esm4.jpg";
import React, { useEffect, useState } from "react";
import FadeIn from "react-fade-in";

export default function CompletedWork() {
    const [scrollY, setScrollY] = useState(0);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const opacity = 1 - scrollY / window.innerHeight;

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
            <NavbarSignedIn />
            <FadeIn delay={1000} transitionDuration={800} style={{ opacity }}>
                <div>
                <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
                    <Carousel.Item>
                        <img src={ImgPac1} alt="Pacifica 1" style={{ width: "350px", height: "400px", objectFit: "cover" }} />
                        <Carousel.Caption>
                            <h3>Basic package</h3>
                            <p>This Chrysler Pacifica ordered our basic package.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={ImgPac2} alt="Pacifica 2" style={{ width: "350px", height: "400px", objectFit: "cover" }} />
                        <Carousel.Caption>
                            <h3>Basic package</h3>
                            <p>This Chrysler Pacifica ordered our basic package.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={img2} alt="Image 2" style={{ width: "350px", height: "400px", objectFit: "cover" }} />
                        <Carousel.Caption>
                            <h3>Basic package</h3>
                            <p>This Chrysler Pacifica ordered our basic package.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </div>
                
            </FadeIn>
        </div>
    );
}
