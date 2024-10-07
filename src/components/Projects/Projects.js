// Projects.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dock from "../../Assets/Projects/dock.png";
import dock1 from "../../Assets/Projects/dock1.png";
import dock2 from "../../Assets/Projects/dock2.png";
import dock3 from "../../Assets/Projects/dock3.png";
import pol from "../../Assets/Projects/pol1.jpeg";
import pol1 from "../../Assets/Projects/pol.png";
import apple1 from "../../Assets/Projects/apple1.png";
import apple2 from "../../Assets/Projects/apple2.png";
import apple3 from "../../Assets/Projects/apple3.png";
import apple4 from "../../Assets/Projects/apple4.png";
import meta from "../../Assets/Projects/meta.png";
import meta1 from "../../Assets/Projects/meta1.png";
import meta2 from "../../Assets/Projects/meta2.png";
import meta3 from "../../Assets/Projects/meta3.png";
import meta4 from "../../Assets/Projects/meta4.png";
import man from "../../Assets/Projects/man.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dock}
              isBlog={false}
              title="Autonomous Rendezvous, Docking, and Berthing in Space"
              description=" Designed an autonomous docking system with advanced controls and sensors, with safety system in a 
Gazebo-ROS simulation for space missions, achieving 97% accuracy in trajectory planning, using Python
and C++"
              extendedDescription={ <>"The development of autonomous systems for rendezvous, docking, and berthing in space is essential for
               developing space mission capabilities, particularly in solving challenges like docking operations and space debris maintenance. 
               This research explores the design, implementation, and evaluation of a completely <b className="purple">autonomous docking</b> system that utilizes advanced 
               control algorithms and integrated sensor technologies in a high-fidelity simulation environment. The work uses <b className="purple">Gazebo</b> and the <b className="purple">Robot Operating SYstem(ROS)</b> to replicate space conditions, with Velodyne LiDAR and depth cameras added to improve spatial awareness. 
               Three <b className="purple">control systems</b> are used and evaluated for their effectiveness in moving spacecraft during docking operations: 
               proportional-integral-derivative (PID), linear quadratic regulator (LQR), and non-linear control. Optimizing 
               Hill-Clohessy-Wiltshire (HCW) equations increases trajectory planning accuracy. The system's performance is examined under a 
               variety of conditions, including debris avoidance, docking with orientation changes and docking on different planes, to prove
                its durability and accuracy. The findings develop autonomous space technology and provide better methods for 
                future space missions."  
                <br />
                <br /> 
                <b className="purple">My work has been initially accepted as a book chapter to publish in a book titled "Algorithms for Machine Vision in Navigation and Control" to be published by Springer, and the acceptance process is "peer-reviewed".</b>
                </>}
              screenshots={[dock, dock1, dock2, dock3]} // Pass multiple screenshots
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pol}
              isBlog={false}
              title="Indoor Spatial Understanding with Pololu Robot"
              description=" Enhanced functionality of bump sensor for room dimension analysis and indoor navigation in robotics, 
employing algorithms developed in embedded C using Arduino to estimate contact angles, with 95%
accuracy"
              extendedDescription={ <>"The goal of this work is to maximize sensor utility over traditional mapping as it explores the usage of 
              bump sensors in robotics for indoor space understanding. We challenge the conventional dependence on broad spatial mapping by 
              introducing a method to estimate the angle of obstacle contact using bump sensor data. Initial evaluations examine this method's 
              efficiency and scope, exposing the boundaries of accuracy for obstacle placement. In a practical example, a robot traverses a small 
              environment(ex: rectangle box) and records the distances of edges, angles of corners to calculate the <b className="purple">dimensions of the environment</b> 
              In order to improve indoor navigation without requiring complex mapping, the research focuses on the analysis of sensor data, 
              including activation levels and calculations for the environment. Using innovative sensors and algorithms, this research highlights
               the fundamental potential of robots in environmental <b className="purple">analysis and automation.</b>"
               </>}
              screenshots={[pol, pol1,]} // Multiple screenshots
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={apple1}
              isBlog={false}
              title="Apple Counting in Orchards"
              description=" Developed machine vision algorithms using Python, OpenCV, and TensorFlow for automated apple counting, achieving 82% detection accuracy through CNNs and R-CNNs while integrating advanced camera systems for enhanced yield estimation and harvesting efficiency."
              extendedDescription={ <>"This research aims to enhance agricultural automation by developing a robust system for <b className="purple">detecting, counting,
               and localizing apples in orchards using visual sensors.</b> Two primary approaches are explored: a traditional machine vision technique 
               leveraging  <b className="purple">edge detection</b>, and a deep learning-based approach using the  <b className="purple">YOLOv7 model</b>. The performance of both methods is evaluated 
               against the MinneApple dataset, which includes diverse images of apples at various ripeness levels and orchard conditions. 
               The machine vision approach employs Canny edge detection for apple identification, achieving a count accuracy of 62.3%. 
               In contrast, the YOLOv7 deep learning model demonstrates superior performance with a count accuracy of 82.46%, precision of 92.6%, 
               and recall of 84.7%. The results indicate that while traditional methods are effective in certain scenarios, deep learning models
                provide a more accurate and adaptable solution for apple counting in complex orchard environments. Future work will focus on 
                refining the model, expanding the dataset, and improving detection accuracy under diverse conditions."
                 </>}
                screenshots={[apple1, apple2, apple3, apple4]}       />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={meta}
              isBlog={false}
              title="Metaverse-induced E-Commerce Web Application"
              description="Developed and enhanced an e-commerce web application with Metaverse features to simulate an in-store 
environment, using Blender, AI, Cryptocurrency, Three.js, Blockchain, Next.js, and CSS"
extendedDescription={ <>"The construction of this e-commerce website is made possible by the introduction of the <b className="purple">Metaverse era</b>. 
The gap between online and offline purchasing experiences could be filled by the metaverse. In a recent Shopkick study, 70% of consumers 
said that being able to try, touch, and physically view things was their favorite part of shopping in stores. E-commerce has not yet been 
adopted in the Metaverse, which is still on the edge of development. Only common e-commerce applications are being used and developed. Using 
the Metaverse means having access to a higher level of immersive and entertaining experience. This means more attention and more income for the
 E-Commerce applications.  This project implies that consumers will be able to virtually experience the real world through the metaverse, adding 
 a distinctive touch to online buying. The Metaverse, which combines <b className="purple">big data, AI, Blender, Three.js, Cryptocurrency, blockchain, and other digital technologies,</b> enables people to 
 explore virtual worlds, evaluate items, and select the ones they need."
    </>}
              screenshots={[meta, meta1, meta2, meta3, meta4]} // Multiple screenshots
              videoLink="https://www.youtube.com/embed/wNQocHTgSxY?si=3bEuq2Z6NnPMJ8f_" // Example video link
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={man}
              isBlog={false}
              title="Photo Manipulation"
              description="Experimented with various photo manipulation techniques in Adobe Photoshop."
              extendedDescription="This project involved transforming and altering images to create surreal effects using advanced Photoshop techniques.
              It included layering, masking, and color correction to achieve the desired results. Some of the works were showcased in local art galleries."
              demoLink="https://drive.google.com/drive/folders/105ZYXbLZfuphz_K7euDmnQMvPW_iOAED?usp=sharing"
              screenshots={[man]} // Multiple screenshots
            />
          </Col>

          {/* Add more projects as needed */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
