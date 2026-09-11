import React from "react";
import { Col, Row } from "react-bootstrap";
import { motion } from "motion/react";
import { TbAugmentedReality2 } from "react-icons/tb";
import { AiFillAndroid } from "react-icons/ai";
import { BsFiletypeSql } from "react-icons/bs";
import { GiArtificialIntelligence } from "react-icons/gi";
import { DiJavascript1, DiReact, DiPython, DiJava, DiHtml5 } from "react-icons/di";
import { FaProjectDiagram } from "react-icons/fa";
import {
  SiFlask,
  SiOpencv,
  SiPytorch,
  SiTensorflow,
  SiKeras,
  SiNextdotjs,
  SiHiveBlockchain,
  SiC,
  SiCsharp,
  SiLangchain,
  SiCplusplus,
  SiTypescript,
  SiNodedotjs,
  SiFastapi,
  SiWebrtc,
  SiPostgresql,
  SiTailwindcss,
  SiGooglegemini,
  SiOpenai,
} from "react-icons/si";
import { RiRobot2Line, RiVoiceprintLine } from "react-icons/ri";
import { MdGraphicEq } from "react-icons/md";
import { ReactComponent as CV } from "../../Icons/cv.svg";
import { ReactComponent as ML } from "../../Icons/ml.svg";
import { staggerParent, staggerChild } from "../Reveal";

const techs = [
  // Languages
  [DiPython, "Python"],
  [SiTypescript, "TypeScript"],
  [DiJavascript1, "JavaScript"],
  [SiC, "C Language"],
  [SiCplusplus, "C++"],
  [SiCsharp, "C#"],
  [DiJava, "Java"],
  // AI
  [RiRobot2Line, "Agentic AI"],
  [RiVoiceprintLine, "Voice AI (Pipecat)"],
  [MdGraphicEq, "Speech (STT / TTS)"],
  [SiLangchain, "LangChain"],
  [FaProjectDiagram, "LangGraph"],
  [SiGooglegemini, "Gemini"],
  [SiOpenai, "OpenAI"],
  [GiArtificialIntelligence, "AI"],
  [ML, "Machine Learning"],
  [CV, "Computer Vision"],
  [SiOpencv, "OpenCV"],
  [SiPytorch, "PyTorch"],
  [SiTensorflow, "Tensorflow"],
  [SiKeras, "Keras"],
  // Backend
  [SiNodedotjs, "Node.js"],
  [SiFastapi, "FastAPI"],
  [SiFlask, "Flask"],
  [SiWebrtc, "WebRTC"],
  [SiPostgresql, "PostgreSQL"],
  [BsFiletypeSql, "SQL"],
  // Frontend & other
  [DiReact, "React"],
  [SiNextdotjs, "Next.js"],
  [SiTailwindcss, "Tailwind CSS"],
  [DiHtml5, "HTML5"],
  [AiFillAndroid, "Android"],
  [TbAugmentedReality2, "Augmented Reality"],
  [SiHiveBlockchain, "Blockchain"],
];

// Shared by Toolstack.
export function IconGrid({ items }) {
  return (
    <Row as={motion.div} style={{ justifyContent: "center", paddingBottom: "50px" }} {...staggerParent}>
      {items.map(([Icon, name]) => (
        <Col xs={4} md={2} className="tech-icons" key={name} as={motion.div} {...staggerChild} whileHover={{ scale: 1.08 }}>
          <Icon />
          <div className="tech-text">{name}</div>
        </Col>
      ))}
    </Row>
  );
}

function Techstack() {
  return <IconGrid items={techs} />;
}

export default Techstack;
