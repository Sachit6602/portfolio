import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "motion/react";
import myImg from "../../Assets/dp3.jpg";
import Tilt from "react-parallax-tilt";
import { reveal } from "../Reveal";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} as={motion.div} className="home-about-description" {...reveal()}>
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              🚀 I've always been drawn to the point where
              <i><b className="purple"> intelligent systems meet real-world problems</b></i>; that's where the
              interesting work happens. An
              <i><b className="purple"> M.Sc. in Robotics from the University of Bristol </b></i>
              and a
              <i><b className="purple"> B.Eng. in Computer Science and Engineering </b></i>
              gave me the foundation to chase that intersection seriously, but the real learning started once I moved
              from theory into systems that had to work, live, under real constraints.
              <br />
              <br />
              That pull has taken me across
              <i><b className="purple"> robotics, computer vision, </b></i>
              and most recently
              <i><b className="purple"> agentic AI systems</b></i>, currently building
              <i><b className="purple"> real-time voice pipelines </b></i>
              and the tool-routing logic that lets an AI agent take real action across a business's systems. What ties
              it all together isn't the domain, it's the problem: figuring out where a system should reason like an
              LLM, and where it should just be deterministic and reliable instead.
              <br />
              <br />
              I'm not attached to any one corner of AI, I'm drawn to wherever intelligent systems are being built to
              actually solve something. Always glad to connect with people working in this space, or thinking hard
              about where it's headed next. Let's inspire positive change together.📊
            </p>
          </Col>
          <Col md={4} as={motion.div} className="myAvtar" {...reveal(0.2)}>
            <Tilt>
              <img src={myImg} className="img-fluid avatar-circle" alt="Sachit Ravikumar at his graduation" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
