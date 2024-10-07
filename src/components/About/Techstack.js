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
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
       <GiArtificialIntelligence />
      </Col>  
      <Col xs={4} md={2} className="tech-icons">
       <ML />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CV />
      </Col>    
      <Col xs={4} md={2} className="tech-icons">
        <SiHiveBlockchain />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsFiletypeSql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillAndroid />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbAugmentedReality2 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
    </Row>
  );
}

export default Techstack;
