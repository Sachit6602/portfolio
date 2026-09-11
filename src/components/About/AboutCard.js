import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I'm <span className="purple">Sachit Ravikumar,</span> a robotics and AI engineer who turns ideas into
            working systems, from robots in simulation to AI agents in production.
            <br />
            <br />
            I started with a <span className="purple">B.Eng. in Computer Science and Engineering</span> at
            <span className="purple"> Anna University</span> and went on to complete an
            <span className="purple"> M.Sc. in Robotics</span> at <span className="purple">The University of Bristol</span>,
            where I specialised in robotic systems, AI and machine vision.
            <br />
            <br />
            Today I'm working at a <span className="purple">stealth-mode startup</span>, building AI-driven products
            end-to-end. Outside of work I keep shipping: <span className="purple">FixFlow</span>, an autonomous LangGraph
            quoting agent that won <span className="purple">1st place at AI London 2026</span>; a real-time sign language
            recognition model deployed on <span className="purple">AWS ECS</span>; and a full-stack AI nutrition coach.
            <br />
            <br />
            My research includes autonomous space docking (accepted as a <span className="purple">Springer book chapter</span>),
            AR learning tools for specially-abled students, and machine learning for healthcare. What ties it all together is a
            belief that technology should solve <span className="purple">real-world problems.</span>
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
