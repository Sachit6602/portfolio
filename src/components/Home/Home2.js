import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/dp1.png";
import Tilt from "react-parallax-tilt";
import { FaArrowRight } from "react-icons/fa";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              🚀 Embarking on a captivating journey in robotics and software technology, I've transformed my curiosity into a dedicated quest for innovation. With an
              <i>
                <b className="purple"> M.Sc. in Robotics from the University of Bristol </b>
              </i>
              and a
              <i>
                <b className="purple"> B.Eng. in Computer Science and Engineering, </b>
              </i>
              my academic endeavors have been about pushing the boundaries of what's possible, crafting intelligent systems that think, learn, and interact in groundbreaking ways.
              <br />
              <br />
              As a Front End Developer and AR Intern, I've leveraged my skills to develop responsive websites, augmented reality applications, and contributed to projects that bridge technology with real-world applications. My work in freelance design and content creation showcases my versatility and commitment to excellence across various platforms.
              <br />
              <br />
              With hands-on experience in
              <i>
                <b className="purple"> software development, robotics, machine learning, AI, </b>
              </i>
              and a proven track record of
              <i>
                <b className="purple"> academic achievements, </b>
              </i>
              including publications and awards, I am poised to contribute to the future of technology. My journey is marked by a relentless pursuit of knowledge, innovation, and the creation of solutions that make the impossible possible.
              <br />
              <br />
              Currently open to networking and exploring opportunities in the dynamic fields of
              <i>
                <b className="purple"> robotics </b> and
              </i>
              <i>
                <b className="purple"> software engineering, </b>
              </i>
              I am eager to discuss how my skills can contribute to the success of your organization. Let's connect and inspire positive change together. 📊
            </p>
            <div className="view-projects-container">
              <li className="social-icons">
              <h3>View My Skillset</h3>
              <a href="/about" to="/about" className="icon-colour home-social-icons"> <FaArrowRight />
              </a>
              </li>
            </div>
            {/* View Projects Button */}
            <div className="view-projects-container">
              <li className="social-icons">
              <h3>View My Projects</h3>
              <a href="/projects" to="/project" className="icon-colour home-social-icons"> <FaArrowRight />
              </a>
              </li>
            </div>

           
            
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
