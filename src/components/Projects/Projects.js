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
import hdd from "../../Assets/Projects/hdd.jpg";
import hdd1 from "../../Assets/Projects/hdd1.png";
import hn from "../../Assets/Projects/hn.png";
import hn1 from "../../Assets/Projects/hn1.png";
import hn2 from "../../Assets/Projects/hn2.png";
import hn3 from "../../Assets/Projects/hn3.png";
import hn4 from "../../Assets/Projects/hn4.png";
import hri from "../../Assets/Projects/hri.jpg";
import hri1 from "../../Assets/Projects/hri1.jpg";
import hri2 from "../../Assets/Projects/hri2.png";
import ar1 from "../../Assets/Projects/ar1.png";
import ar2 from "../../Assets/Projects/ar2.png";
import ar3 from "../../Assets/Projects/ar3.png";
import ar4 from "../../Assets/Projects/ar4.png";


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
 <br />
 <br />
 <b className="purple">Presented paper titled "Metaverse Induced E-Commerce Website" at IConIC 2K23 (6th International 
  Conference on Intelligent Computing) and secured publication in Scopus-indexed journal.</b>
    </>}
              screenshots={[meta, meta1, meta2, meta3, meta4]} // Multiple screenshots
              videoLink="https://www.youtube.com/embed/wNQocHTgSxY?si=3bEuq2Z6NnPMJ8f_" // Example video link
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hdd}
              isBlog={false}
              title="Heart Disease Detection"
              description=" This project analyzed and predicted possible heart diseases in people from their body
symptoms with a various machine learning algorithm and deployed it as a web application using Flask
with a score of 90.5%. "
              extendedDescription={ <>"This project is designed to predict potential heart diseases using a variety of <b className="purple">machine learning algorithms,</b>
               providing early diagnostic insights to assist healthcare professionals in making informed decisions. It includes a comparative 
               analysis of commonly used classifiers, such as <b className="purple">decision tree, logistic regression, SVM, and random forest,</b> assessing their 
               effectiveness in medical predictions. To enhance accuracy and prediction performance, an ensemble classifier combining <b className="purple">AdaBoost 
               and XGBoost</b> is proposed, leveraging both strong and weak learners. This hybrid classification approach is capable of handling 
               larger datasets for improved training and validation, ultimately outperforming individual classifiers. The project is deployed 
               using <b className="purple">Flask,</b> enabling real-time interaction through a user-friendly web interface, making it easier for healthcare practitioners 
               to incorporate machine learning predictions into their diagnostic process, offering a more data-driven approach to predicting 
               heart disease risk."
                <br />
                <br />
                
                 </>}
                screenshots={[hdd, hdd1]}       />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hn}
              isBlog={false}
              title="Home Nurse Calling System"
              description=" This project developed a GUI application that sends automated notifications and calls to nurses during abnormal states, while also tracking their response to ensure the fastest care for home ICU patients."
              extendedDescription={ <>"The <b className="purple">Home Nurse Calling IoT System </b> was developed to address the issue of ICU patients not receiving timely 
              medical attention. This system continuously monitors patients' vital signs and sends an SOS 
              signal to nearby nurses when a patient's condition becomes critical, such as when heart rate fluctuations occur. All available 
              nurses in the area receive the alert, and the first to accept the request is assigned to the patient. The system enables real-time 
              tracking, allowing patients, their families, and caregivers to monitor the nurse’s movements, while the nurse can view the patient’s 
              location and current health status. Developed using <b className="purple">Android Studio, Arduino IDE, and Java,</b> the app ensures efficient communication 
              between patients and nurses, enhancing response times and potentially saving lives. This system offers a transparent, rapid, and 
              life-saving solution for home ICU patients, benefiting both the healthcare system and society.
                "
                 </>}
                screenshots={[hn, hn1, hn2, hn3, hn4]}       />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hri}
              isBlog={false}
              title="Can robots that incorporate music influence relaxation more effectively than robots without music?"
              description="This study explores how music-integrated robots can enhance relaxation more effectively than non-musical robots, showing that participants interacting with music-equipped robots experienced deeper relaxation and better physiological responses. The findings highlight the potential of multi-sensory Human-Robot Interaction (HRI) for improved therapeutic outcomes."
              extendedDescription={ <>"This study investigates the potential of music-integrated robots to enhance relaxation more effectively 
              than robots without musical features, utilizing the <b className="purple">humanoid robot NAO and the Choregraphe software</b> for interaction design. 
              Given the growing interest in <b className="purple">Human-Robot Interaction (HRI)</b> for therapeutic purposes and the well-documented soothing effects 
              of music, the research was conducted through a controlled experiment involving participants who engaged with the NAO robot in 
              conversational and game-based interactions. Participants were divided into two groups: one experienced these interactions with 
              background music, while the other interacted without music. Measures of relaxation were assessed through subjective questionnaires 
              and physiological indicators, such as heart rate variability. The analysis of results revealed that the presence of music 
              significantly enhanced relaxation effects during robotic interactions; those exposed to music reported higher relaxation scores 
              and exhibited improved physiological responses, including greater muscle relaxation and lower heart rates compared to their 
              counterparts who interacted with the robot alone. This study underscores the <b className="purple">importance of integrating music</b> into robotic
               interactions as a novel therapeutic technique, suggesting promising avenues for future robot design and therapeutic interventions 
               aimed at improving user engagement and overall effectiveness in relaxation therapies."
                 </>}
                screenshots={[hri1, hri2]}       />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ar1}
              isBlog={false}
              title="Assistive robots for elderly people with dementia"
              description="The project focuses on designing assistive robots, Pepper and TurtleBot3, to help elderly individuals with dementia by providing emotional support, exercise guidance, and mobility assistance. These robots enhance safety and independence within home environments while addressing the unique challenges of dementia care."
              extendedDescription={ <>"The project investigates the application of assistive robotics to improve the quality of life for elderly 
              individuals suffering from dementia, using a persona named Phyllis as a case study. It focuses on two distinct 
              robotic systems: <b className="purple">Pepper, a socially assistive robot, and TurtleBot3, a physically assistive robot.</b> Pepper is designed to engage
               Phyllis in a seated exercise routine while providing emotional support, safety monitoring, and motivation to adhere to her exercise
                regimen. Through personalized interactions, Pepper addresses Phyllis's emotional well-being by assessing her mood, offering
                 encouragement, and utilizing calming techniques when necessary. On the other hand, TurtleBot3 is integrated with a walking 
                 cane to assist Phyllis with mobility within her home, ensuring she can navigate safely and maintain her independence. 
                 The study highlights the robots' capabilities in providing not only physical assistance but also essential social interaction, 
                 emphasizing the importance of addressing both the emotional and physical needs of elderly individuals with dementia. 
                 Overall, the findings demonstrate the potential of assistive robots to enhance safety, autonomy, and quality of life for 
                 this vulnerable population while identifying key areas for future improvement in robotic technology and user experience."
                 </>}
                screenshots={[ar1, ar2, ar3, ar4]}
                videoLink="https://www.youtube.com/embed/Tndyo_MYapw?si=7344ojn6aLeIALqq"     />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={man}
              isBlog={false}
              title="Photo Manipulation"
              description="Experimented with various photo manipulation techniques in Adobe Photoshop."
              extendedDescription="This project involved transforming and altering images to create surreal effects using advanced Photoshop techniques.
              It included layering, masking, and color correction to achieve the desired results. Some of the works are in the link."
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
