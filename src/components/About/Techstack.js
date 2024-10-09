import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { TbPhotoEdit, TbAugmentedReality2 } from "react-icons/tb";
import { AiOutlineVideoCameraAdd, AiFillAndroid } from "react-icons/ai";
import { MdDesignServices } from "react-icons/md";
import { IoLogoGameControllerB } from "react-icons/io";
import {BsFiletypeSql} from "react-icons/bs";
import { SiFlask } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiHtml5,
} from "react-icons/di";
import {
  SiHiveBlockchain,
  SiC,
  SiCsharp,
  SiCplusplus,
  
  
} from "react-icons/si";
import { ReactComponent as CV } from '../../Icons/cv.svg';
import { ReactComponent as ML } from '../../Icons/ml.svg';

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    <Col xs={4} md={2} className="tech-icons">
      <SiC />
      <span className="tech-text">C Language</span>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiCplusplus />
      <span className="tech-text">C++</span>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiCsharp />
      <span className="tech-text">C#</span>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <DiPython />
      <span className="tech-text">Python</span>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <DiJavascript1 />
      <span className="tech-text">JavaScript</span>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <DiJava />
      <span className="tech-text">Java</span>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <DiHtml5 />
      <span className="tech-text">HTML5</span>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <GiArtificialIntelligence />
      <span className="tech-text">AI</span>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <ML />
      <span className="tech-text">Machine Learning</span>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <CV />
      <span className="tech-text">Computer Vision</span>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiHiveBlockchain />
      <span className="tech-text">Blockchain</span>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiFlask />
      <span className="tech-text">Flask</span>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <BsFiletypeSql />
      <span className="tech-text">SQL</span>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <AiFillAndroid />
      <span className="tech-text">Android</span>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <TbAugmentedReality2 />
      <span className="tech-text">Augmented Reality</span>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <DiReact />
      <span className="tech-text">React</span>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiNextdotjs />
      <span className="tech-text">Next.js</span>
    </Col>
  </Row>
  );
}

export default Techstack;
