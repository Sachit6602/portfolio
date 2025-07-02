import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { TbPhotoEdit, TbAugmentedReality2 } from "react-icons/tb";
import { AiOutlineVideoCameraAdd, AiFillAndroid } from "react-icons/ai";
import { MdDesignServices } from "react-icons/md";
import { IoLogoGameControllerB } from "react-icons/io";
import { BsFiletypeSql } from "react-icons/bs";
import { SiFlask, SiOpencv, SiPytorch, SiTensorflow, SiKeras } from "react-icons/si";
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
        <div className="tech-text">C Language</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus />
        <div className="tech-text">C++</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
        <div className="tech-text">C#</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <div className="tech-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <div className="tech-text">JavaScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <div className="tech-text">Java</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpencv />
        <div className="tech-text">OpenCV</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
        <div className="tech-text">PyTorch</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
        <div className="tech-text">Tensorflow</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKeras />
        <div className="tech-text">Keras</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <div className="tech-text">HTML5</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiArtificialIntelligence />
        <div className="tech-text">AI</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <ML />
        <div className="tech-text">Machine Learning</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CV />
        <div className="tech-text">Computer Vision</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHiveBlockchain />
        <div className="tech-text">Blockchain</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask />
        <div className="tech-text">Flask</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsFiletypeSql />
        <div className="tech-text">SQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillAndroid />
        <div className="tech-text">Android</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbAugmentedReality2 />
        <div className="tech-text">Augmented Reality</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <div className="tech-text">React</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <div className="tech-text">Next.js</div>
      </Col>
    </Row>
  );
}

export default Techstack;
