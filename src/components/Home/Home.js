import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Spline from "@splinetool/react-spline";
import { AiFillGithub, AiOutlineWhatsApp, AiFillInstagram, AiOutlineArrowRight } from "react-icons/ai";
import { IoCloudDownload } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";


function Home() {
  function closePopup() {
    document.getElementById("mobilePopup").style.display = "none";
  }
  
  useEffect(() => {
    // If it's a mobile device, show the popup
    if (window.innerWidth <= 1000) {
      document.getElementById("mobilePopup").style.display = "flex";
    }
  }, []);
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
        <Row className="full-width-row">
  <Col md={7} className="home-header">
    <h1 style={{ paddingBottom: 15 }} className="heading" >
      Hi There!{" "}
      <span className="wave" role="img" aria-labelledby="wave">
        👋🏻
      </span>
    </h1>

    <h1 className="heading-name">
      I'M
      <strong className="main-name"> Sachit Ravikumar</strong>
    </h1>
    <h1 style={{ paddingLeft:"50px", paddingTop: "100px" }}>Turning ideas into reality as</h1>
    <div style={{ paddingLeft: 50, textAlign: "left" }}>
      <Type />
    </div>
  </Col>

  

  <Col md={5} className="spline-container" style={{ paddingBottom: "100px", textAlign: "right", paddingLeft: "50px", overflow: "hidden", height: "650px" }}>
    <Spline scene="https://prod.spline.design/nzTQrHmwHUmTO8GW/scene.splinecode" />
  </Col>

  <Col md={5} className="home-header2">
  <h1>Download My CV</h1>
<div className="cv-download-container">
  <li className="social-icons">
    <a
      href="sachitcv.pdf" 
      download
      className="icon-colour home-social-icons"
    >
      <IoCloudDownload /> 
    </a>
  </li>

  

</div>
    <h2 style={{ paddingTop: '125px' }}>
      Feel free to <span className="purple">connect </span>with me
    </h2>
    <li className="social-icons">
        <a
          href="mailto:sachit.exe@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="icon-colour home-social-icons"
        >
          <MdEmail />
        </a>
      </li>
    <li className="social-icons">
        <a
          href="https://www.linkedin.com/in/sachit-ravikumar/"
          target="_blank"
          rel="noreferrer"
          className="icon-colour home-social-icons"
        >
          <FaLinkedinIn />
        </a>
      </li>
    <ul className="home-about-social-links">
      <li className="social-icons">
        <a
          href="https://github.com/Sachit6602"
          target="_blank"
          rel="noreferrer"
          className="icon-colour  home-social-icons"
        >
          <AiFillGithub />
        </a>
      </li>
      <li className="social-icons">
        <a
          href="https://wa.me/447393104748"
          target="_blank"
          rel="noreferrer"
          className="icon-colour home-social-icons"
        >
          <AiOutlineWhatsApp />
        </a>
      </li>
      
      <li className="social-icons">
        <a
          href="https://www.instagram.com/sachit_official/"
          target="_blank"
          rel="noreferrer"
          className="icon-colour home-social-icons"
        >
          <AiFillInstagram />
        </a>
      </li>
    </ul>
  </Col>
</Row>

<div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "50px" }}>
  {/* About Button */}
  <div style={{ display: "flex", alignItems: "center", marginRight: "50px" }}> {/* Added marginRight to create gap */}
    <span style={{ fontSize: "1.5rem", marginRight: "1px", color: "#c770f0" }}>Explore my background and skills</span>
    <li className="social-icons">
      <Link
        to="/about#techstack" // Navigate smoothly without reload
        className="icon-colour home-social-icons"
      >
        <AiOutlineArrowRight style={{ fontSize: "2rem" }} />
      </Link>
    </li>
  </div>

  {/* Projects Button */}
  <div style={{ display: "flex", alignItems: "center" }}>
    <span style={{ fontSize: "1.5rem",marginLeft: "50px", marginRight: "1px", color: "#c770f0" }}>Check out my projects</span>
    <li className="social-icons">
      <Link
        to="/project" // Navigate smoothly without reload
        className="icon-colour home-social-icons"
      >
        <AiOutlineArrowRight style={{ fontSize: "2rem" }} />
      </Link>
    </li>
  </div>
</div>








        </Container>
      </Container>
      {/* Modal Popup */}
      <div id="mobilePopup" className="mobile-popup">
        <div className="popup-content">
          <h2>Use PC for a better experience!</h2>
          <button onClick={closePopup} className="close-btn">
            OK
          </button>
        </div>
      </div>
      
      <Home2 />
    </section>
  );
}



export default Home;
