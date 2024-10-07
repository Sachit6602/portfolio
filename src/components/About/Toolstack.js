import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiBlender,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiAdobephotoshop,
  SiCanva,
  SiAdobelightroom,
  SiAdobepremierepro,
  SiAndroidstudio,
  SiVisualstudio,
  SiUnity,
  SiGooglecolab,
  SiPycharm,
  SiJupyter,
  SiArduino,
} from "react-icons/si";
import { ReactComponent as MatLab } from '../../Icons/matlab.svg';
import { ReactComponent as Gazebo } from '../../Icons/gazebo.svg';
import { ReactComponent as ROS } from '../../Icons/ros.svg';
import { TfiMicrosoftAlt } from "react-icons/tfi";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <ROS />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Gazebo />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MatLab />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiArduino />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecolab />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUnity />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBlender />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobepremierepro />
      </Col>
     <Col xs={4} md={2} className="tech-icons">
     <TfiMicrosoftAlt />
      </Col>
    </Row>
  );
}

export default Toolstack;
