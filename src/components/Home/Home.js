import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "motion/react";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Spline from "@splinetool/react-spline";
import { AiFillGithub, AiOutlineWhatsApp, AiFillInstagram, AiOutlineArrowRight } from "react-icons/ai";
import { IoCloudDownload } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { reveal, heroDelay } from "../Reveal";

const socials = [
  ["mailto:sachit.exe@gmail.com", <MdEmail />, "Email"],
  ["https://www.linkedin.com/in/sachit-ravikumar/", <FaLinkedinIn />, "LinkedIn"],
  ["https://github.com/Sachit6602", <AiFillGithub />, "GitHub"],
  ["https://wa.me/447393104748", <AiOutlineWhatsApp />, "WhatsApp"],
  ["https://www.instagram.com/sachit_official/", <AiFillInstagram />, "Instagram"],
];

function Home() {
  const d = heroDelay();
  // Spline is heavy and hidden on small screens anyway, so don't load it there.
  const isDesktop = window.matchMedia("(min-width: 1001px)").matches;

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="full-width-row">
            <Col md={7} className="home-header">
              <motion.h1 className="heading" {...reveal(d)}>
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </motion.h1>

              <motion.h1 className="heading-name" {...reveal(d + 0.15)}>
                I'M
                <strong className="main-name"> Sachit Ravikumar</strong>
              </motion.h1>

              <motion.div {...reveal(d + 0.3)}>
                <h1 className="home-tagline">Turning ideas into reality as</h1>
                <div className="home-type">
                  <Type />
                </div>
              </motion.div>
            </Col>

            {isDesktop && (
              <Col md={5} className="spline-container">
                <Spline scene="https://prod.spline.design/nzTQrHmwHUmTO8GW/scene.splinecode" />
              </Col>
            )}

            <Col md={5} as={motion.div} className="home-header2" {...reveal(d + 0.45)}>
              <h1>Download My CV</h1>
              <div className="cv-download-container">
                <li className="social-icons">
                  <a href="sachitcv.pdf" download className="icon-colour home-social-icons" aria-label="Download CV">
                    <IoCloudDownload />
                  </a>
                </li>
              </div>

              <h2 className="connect-heading">
                Feel free to <span className="purple">connect </span>with me
              </h2>
              <ul className="home-about-social-links">
                {socials.map(([href, icon, label]) => (
                  <li className="social-icons" key={label}>
                    <a href={href} target="_blank" rel="noreferrer" className="icon-colour home-social-icons" aria-label={label}>
                      {icon}
                    </a>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>

          <motion.div className="home-cta-row" {...reveal(d + 0.6)}>
            <Link to="/about#techstack" className="home-cta">
              Explore my background and skills <AiOutlineArrowRight />
            </Link>
            <Link to="/project" className="home-cta">
              Check out my projects <AiOutlineArrowRight />
            </Link>
          </motion.div>
        </Container>
      </Container>

      <Home2 />
    </section>
  );
}

export default Home;
