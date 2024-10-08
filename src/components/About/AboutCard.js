import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I'm <span className="purple">Sachit Ravikumar,</span> 
            a robotics enthusiast and software engineer with a drive to transform technology into impactful solutions. 
            <br />
            <br />
            My journey began with a <span className="purple">B.Eng. Computer Science and Engineering</span> at <span className="purple"> Anna University</span> and evolved into an 
            <span className="purple"> M.Sc. Robotics</span> at <span className="purple">The University of Bristol</span>,  where I honed my skills in robotics systems, AI, and 
            machine vision.
            <br />
            <br />
             I've worked on projects like autonomous space docking, AR-based educational tools for special needs students, 
            and smart navigation systems using ROS, Unity, and Python. With hands-on experience in<span className="purple"> robotics, </span> and  
            <span className="purple"> software development, </span>
            I'm excited to connect and innovate within the fields of robotics and technology to bridge the gap
             between digital advancements and real-world needs.
            <br />
            <br />
            In addition to my technical expertise, I've delved into the field of<span className="purple"> machine learning,</span> applying 
            AI-driven solutions to healthcare, such as predicting heart disease using advanced classifiers. This has reinforced my belief 
            in the power of technology to address critical challenges in multiple domains, and I am eager to bring this interdisciplinary 
            approach to my <span className="purple">future endeavors.</span>
          </p>

          <br />
          <br />
          <p style={{ textAlign: "justify" }}> 
            <b>Here are my Professional <span className="purple">Skillset</span> and <span className="purple">Tools</span> that I Use:</b></p>

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
