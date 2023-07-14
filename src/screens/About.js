import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import logo from "./about.jpg";

export default function About() {
  const [imgIndex, setImgIndex] = useState(0);

  console.log(imgIndex);
  return (
    <main>
      <Navbar />

      {/* Main container */}
      <Container className="containers main-container">
        {/* Row for content */}
        <Row className="text-center mt-3">
          {/* Column for logo */}
          <Col sm={12} md={6}>
            <a className="navbar-brand ms-3" href="/" style={{ alignItems: "center" }}>
              {/* Responsive logo image */}
              <img src={logo} alt="logo" className="img-fluid" style={{ maxWidth: "100%", height: "auto", marginBottom: "20px" }} />
            </a>
          </Col>

          {/* Column for text */}
          <Col sm={12} md={6} className="my-auto">
            <h1 className="mt-3">Big Bites</h1>
            <p>
              {/* Description of the restaurant */}
              Welcome to our food company where we provide delicious and affordable food to our customers. Our mission is to make sure that everyone has access to good food, no matter where they are. We take pride in offering a wide variety of dishes that cater to everyone's taste buds, carefully curated by our chefs who use only the freshest ingredients to prepare the food. We believe that great food should be accompanied by great service, and that's why our friendly and knowledgeable staff will go out of their way to make sure that you have an enjoyable dining experience. Whether you're ordering online or using our catering services for your special events, we can work with you to create a menu that suits your needs and preferences. Thank you for choosing our restaurant, and we hope to see you soon!
            </p>
          </Col>
        </Row>
      </Container>

      <Footer />
    </main>
  );
}
