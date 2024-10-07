import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Robotics Software Engineer",
          "Software Developer",
          "Artificial Intelligence Engineer",
          "Computer Vision Engineer",
          "Full-Stack Developer",
          "Freelancer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
