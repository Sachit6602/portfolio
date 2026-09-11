import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import Experience from "./Experience";
import Spline from '@splinetool/react-spline';
import { motion } from "motion/react";
import { reveal } from "../Reveal";


function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            as={motion.div}
            {...reveal()}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About <strong className="purple">Myself</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "1px", paddingBottom: "100px" }}
            className="about-img"
          >
             <Spline scene="https://prod.spline.design/WsoYDL8DhYLMznYE/scene.splinecode" />
          </Col>
        </Row>
        <motion.h1 className="project-heading" id="experience" {...reveal()}>
          <strong className="purple">Experience</strong>
        </motion.h1>
        <Experience />

        <motion.h1 className="project-heading" {...reveal()}>
          Professional <strong className="purple">Skillset </strong>
        </motion.h1>

        <div id="techstack">
        <Techstack />
        </div>

        <motion.h1 className="project-heading" {...reveal()}>
          <strong className="purple">Tools</strong> I use
        </motion.h1>
        <Toolstack />

        
      </Container>
    </Container>
  );
}

export default About;
