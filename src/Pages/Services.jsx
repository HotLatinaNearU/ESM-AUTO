import { NavbarSignedIn } from '../Components/Top-Nav';
import {useEffect, useState} from "react";
import FadeIn from "react-fade-in";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
export default function ShowServices(){
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

                <div style={{backgroundColor:"white", width:"100%", borderRadius:"20px"}} id={"services1"}>
                        <h1 style={{marginTop:"20%", fontSize:"200%"}}>Services</h1>

                    <div >
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
                        <p style={{color:"black"}}>3-4 hour service</p>
                    </div>


                </div>

                <div style={{backgroundColor:"white", width:"100%", borderRadius:"20px"}} id={"services2"}>
                    <h1 style={{marginTop:"10%", fontSize:"200%"}}>Services</h1>

                    <div >
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
                        <p style={{color:"black"}}>3-4 hour service</p>
                    </div>


                </div>

                <ButtonToolbar aria-label="Toolbar with button groups">
                    <ButtonGroup className="me-2" aria-label="First group">
                        <Button style={{color:"black", backgroundColor:"white", borderColor:"white"}} /*onClick={() => }*/>1</Button>
                        <Button style={{color:"black", backgroundColor:"white", borderColor:"white"}} /*onClick={() => }*/>2</Button>
                    </ButtonGroup>
                </ButtonToolbar>

            </FadeIn>
        </div>


    );
}