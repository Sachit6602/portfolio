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
  SiDocker
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
        <div className="tech-text">ROS2</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Gazebo />
        <div className="tech-text">Gazebo</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MatLab />
        <div className="tech-text">MATLAB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecolab />
        <div className="tech-text">Google Colab</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm />
        <div className="tech-text">PyCharm</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
        <div className="tech-text">Jupyter</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
        <div className="tech-text">Docker</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiArduino />
        <div className="tech-text">Arduino</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <div className="tech-text">VS Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio />
        <div className="tech-text">Android Studio</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUnity />
        <div className="tech-text">Unity</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
        <div className="tech-text">Linux</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBlender />
        <div className="tech-text">Blender</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop />
        <div className="tech-text">Photoshop</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobepremierepro />
        <div className="tech-text">Premiere Pro</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TfiMicrosoftAlt />
        <div className="tech-text">Microsoft</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
