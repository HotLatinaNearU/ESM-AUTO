import { NavbarSignedIn } from '../Components/Top-Nav';
import { useEffect, useState } from "react";
import FadeIn from "react-fade-in";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

export default function ShowServices() {
    const [scrollY, setScrollY] = useState(0);
    const [activeButton, setActiveButton] = useState(1); 

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const opacity = 1 - scrollY / window.innerHeight;

    const handleButtonClick = (buttonNumber) => {
        setActiveButton(buttonNumber);
    };

    return (
        <div>
            <NavbarSignedIn />
            <FadeIn delay={1000} transitionDuration={800} style={{ opacity }}>
                <div style={{ backgroundColor: "white", width: "100%", borderRadius: "20px", maxWidth:"100%" }} id={"services" + activeButton}>
                    
                    <h1 style={{ marginTop: "20%", fontSize: "200%", padding:"6%" }}>Services</h1>

                    <div>
                        <ButtonToolbar aria-label="Toolbar with button groups">
                        <ButtonGroup className="me-2" aria-label="First group" style={{width:"100%", marginLeft:"2%", marginTop:"0%" }}>
                            <Button
                                style={{ color: "black", backgroundColor: "white", zIndex:"0", borderColor:"black", width:"50%"}}
                                onClick={() => handleButtonClick(1)}
                                active={activeButton === 1}
                            >
                                Base
                            </Button>
                            <Button
                                style={{ color: "black", backgroundColor: "white", zIndex:"0", borderColor:"black",width:"50%" }}
                                onClick={() => handleButtonClick(2)}
                                active={activeButton === 2}
                            >
                                Advanced
                            </Button>
                        </ButtonGroup>
                    </ButtonToolbar>

                        {activeButton === 1 && (
                        <>


                            <FadeIn delay={1000} transitionDuration={800} style={{ opacity }}>
                                <form style={{marginTop:"8%"}}>
                                    <h2 style={{fontSize:"120%"}}>Basic interior</h2>
                                    <p style={{color:"black"}}>Vacuum, entire interior scrub down, window clean, finished with a UV and dust protection coating for all surface </p>
                                    <p style={{color:"black"}}>1-2 hours</p>

                                    <h2 style={{fontSize:"120%"}}>Basic wash</h2>
                                    <p style={{color:"black"}}>Power washer rinse, snow foam, hand clean, wheel clean, dry, spray wax</p>
                                    <p style={{color:"black"}}>1+ hours</p>

                                    <h2 style={{fontSize:"120%"}}>Basic package</h2>
                                    <p style={{color:"black"}}>Combines both basic washes</p>
                                    <p style={{color:"black"}}>2+ hours</p>

                                    <h2 style={{fontSize:"120%"}}>Deep interior clean</h2>
                                    <p style={{color:"black"}}>The basic interior package but with stain extraction and a deep scrub of plastic</p>
                                    <p style={{color:"black"}}>3-4 hours</p>

                                    <h2 style={{fontSize:"120%"}}>Wash, Decontamination, Clay and Seal</h2>
                                    <p style={{color:"black"}}>Our basic wash with a complete decontamination of the paint using a clay bar and iron remover finished with a paint sealant too keep your car looking good</p>
                                    <p style={{color:"black"}}>3+ hours</p>
                                </form>
                            </FadeIn>

                           





                        </>
                        )}
                        {activeButton === 2 && (
                            <>
                            <FadeIn delay={1000} transitionDuration={800} style={{ opacity }}>

                                <form style={{marginTop:"8%"}}>
                                    <h2 style={{fontSize:"120%"}}>One set polish</h2>
                                    <p style={{color:"black"}}>Includes a complete wash along with a complete clay bar and decontamination of the paint. Finished with one step polish</p>
                                    <p style={{color:"black"}}>3-4 hours</p>

                                    <h2 style={{fontSize:"120%"}}>2-step paint correction</h2>
                                    <p style={{color:"black"}}>An entire interior wash with an iron decontamination followed by an entire clay bar to remove any extra contamination. after that we cut the paint with a cutting paste using a random orbital DA polisher finally we finish with polish</p>
                                    <p style={{color:"black"}}>5+ hours</p>

                                    <h2 style={{fontSize:"120%"}}>1 year ceramic coating</h2>
                                    <p style={{color:"black"}}>paint protection lasting 1 year this will include our entire two step paint correction followed by the ceramic coating application leaving your paint with 1 year of permanent protection</p>
                                    <p style={{color:"black"}}>6+ hours</p>

                                    <h2 style={{fontSize:"120%"}}>3-5 year ceramic coating</h2>
                                    <p style={{color:"black"}}>Our best paint protection lasting 5+ years this will include our entire two step paint correction followed by the ceramic coating application leaving your paint with 5+ years of permanent protection</p>
                                    <p style={{color:"black"}}>6+ hours</p>
                                </form>
                            </FadeIn>

                            </>
                        )}
                    </div>
                </div>

            </FadeIn>
        </div>
    );
}
