import { NavbarSignedIn } from '../Components/Top-Nav';
import Carousel from "react-bootstrap/Carousel";
import img2 from "../assets/esm2.jpg";
import imgPac1 from "../assets/Pacifica.jpg";
import imgPac2 from "../assets/Pacifica2.jpg";
import img4 from "../assets/esm4.jpg";
import React, {useEffect, useState} from "react";
import FadeIn from "react-fade-in";

export default function CompletedWork(){

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const opacity = 1 - scrollY / window.innerHeight;



    return(
        <div>
            <NavbarSignedIn/>
            <FadeIn delay={1000} transitionDuration={800} style={{ opacity }}>

            <h1 style={{color:"white", fontSize:"100%"}}>2020 Pacifica - Full Interior and Exterior</h1>
            <Carousel
            style={{ textAlign: 'center', zIndex:0}}
            nextIcon={<span className="carousel-control-next-icon" aria-hidden="true" />}
            prevIcon={<span className="carousel-control-prev-icon" aria-hidden="true" />}

        >

            <Carousel.Item interval={5000}>
                <img
                    className="d-block mx-auto"
                    src={img2}
                    alt="Image Two"
                    style={{ maxWidth: "500px", height: "300px" }}
                />
            </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block mx-auto"
                        src={imgPac2}
                        alt="Image Two"
                        style={{ maxWidth: "500px", height: "300px" }}
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block mx-auto"
                        src={imgPac1}
                        alt="Image Two"
                        style={{ maxWidth: "500px", height: "300px" }}
                    />
                </Carousel.Item>

        </Carousel>

            </FadeIn>


        </div>


    );
}