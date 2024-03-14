import React from 'react';
import Card from 'react-bootstrap/Card';
import img1 from "../assets/exterior.jpg";
import img2 from "../assets/interior.jpg";
import img3 from "../assets/Ceramic.jpg";

export default function CardComponent() {
  return (
    <div>
      <Card style={{  width: '90%', backgroundColor:'white', marginBottom: '10px', fontSize:"70%", marginLeft:'5%' }}>
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          <Card.Title style={{ color: 'black' }}>Exterior</Card.Title>
          <Card.Text style={{ color: 'black' }}>
            Experience the ultimate car detailing service with ESM's Exterior package. Choose from our Basic Wash, Clay and Seal, or One/Two Step paint correction options to find the perfect solution for your car's needs.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '90%', backgroundColor:'white', marginBottom: '10px', fontSize:"70%", marginLeft:'5%' }}>
        <Card.Img variant="top" src={img2} />
        <Card.Body>
          <Card.Title style={{ color: 'black' }}>Interior</Card.Title>
          <Card.Text style={{ color: 'black' }}>
            At ESM Auto, we understand that your car is not just a means of transportation; it’s an extension of your personality. That’s why we offer a range of mobile car detailing services to suit your needs.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '90%', backgroundColor:'white', marginBottom: '10px', fontSize:"70%", marginLeft:'5%' }}>
        <Card.Img variant="top" src={img3} />
        <Card.Body>
          <Card.Title style={{ color: 'black' }}>Ceramic Coating</Card.Title>
          <Card.Text style={{ color: 'black' }}>
            Upgrade your car's protection from the outside world with our ceramic coating service. We offer one and three-year options so you can choose the level of protection that suits your needs.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
