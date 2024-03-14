import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../assets/esm1.jpg";
import img2 from "../assets/esm2.jpg";
import img3 from "../assets/esm3.jpg";
import img4 from "../assets/esm4.jpg";


export function CarouselComponentMobile() {
    return (
        <Carousel
            style={{ textAlign: 'center', zIndex:0}} 
            nextIcon={<span className="carousel-control-next-icon" aria-hidden="true" />} 
            prevIcon={<span className="carousel-control-prev-icon" aria-hidden="true" />} 
            
        > 
            <Carousel.Item interval={5000}> 
                <img 
                    className="d-block mx-auto" 
                    src={img1}
                    alt="Image One"
                    style={{ maxWidth: "100%", height: "400px" }}
                /> 
            </Carousel.Item> 
            <Carousel.Item interval={5000}> 
                <img 
                    className="d-block mx-auto" 
                    src={img2}
                    alt="Image Two"
                    style={{ maxWidth: "100%", height: "400px" }}
                /> 
            </Carousel.Item> 
            <Carousel.Item interval={5000}> 
                <img 
                    className="d-block mx-auto" 
                    src={img3}
                    alt="Image Two"
                    style={{ maxWidth: "100%", height: "400px" }}
                /> 
            </Carousel.Item> 
            <Carousel.Item interval={5000}> 
                <img 
                    className="d-block mx-auto" 
                    src={img4}
                    alt="Image Two"
                    style={{ maxWidth: "100%", height: "400px" }}
                /> 
            </Carousel.Item> 
        </Carousel> 
    ); 
}





export function CarouselComponentDesktop() {
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
                        src={img1}
                        alt="Image One"
                        style={{ width: "60%", height: "450px", margin: "auto" }}
                    /> 
                </Carousel.Item> 
                <Carousel.Item interval={5000}> 
                    <img 
                        className="d-block"
                        src={img2}
                        alt="Image Two"
                        style={{ width: "60%", height: "450px", margin: "auto" }} 
                    /> 
                </Carousel.Item> 
                <Carousel.Item interval={5000}> 
                    <img 
                        className="d-block"
                        src={img3}
                        alt="Image Two"
                        style={{ width: "60%", height: "450px", margin: "auto" }} 
                    /> 
                </Carousel.Item> 
                <Carousel.Item interval={5000}> 
                    <img 
                        className="d-block"
                        src={img4}
                        alt="Image Two"
                        style={{ width: "60%", height: "450px", margin: "auto" }} 
                    /> 
                </Carousel.Item> 
            </Carousel> 
        </div> 
    ); 
}
