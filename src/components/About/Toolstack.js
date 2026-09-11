import React from "react";
import {
  SiLinux,
  SiVisualstudiocode,
  SiBlender,
  SiVercel,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAndroidstudio,
  SiUnity,
  SiGooglecolab,
  SiPycharm,
  SiJupyter,
  SiArduino,
  SiRailway,
  SiSupabase,
  SiDocker,
  SiGooglecloud,
  SiCloudflare,
  SiNginx,
  SiGrafana,
  SiPrisma,
  SiVite,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { TfiMicrosoftAlt } from "react-icons/tfi";
import { ReactComponent as MatLab } from "../../Icons/matlab.svg";
import { ReactComponent as Gazebo } from "../../Icons/gazebo.svg";
import { ReactComponent as ROS } from "../../Icons/ros.svg";
import { IconGrid } from "./Techstack";

const tools = [
  // Cloud & DevOps
  [SiDocker, "Docker"],
  [FaAws, "AWS"],
  [SiGooglecloud, "Google Cloud"],
  [SiCloudflare, "Cloudflare"],
  [SiNginx, "Nginx"],
  [SiGrafana, "Grafana"],
  [SiVercel, "Vercel"],
  [SiRailway, "Railway"],
  [SiLinux, "Linux"],
  // Data & build
  [SiSupabase, "Supabase"],
  [SiPrisma, "Prisma"],
  [SiVite, "Vite"],
  // Robotics
  [ROS, "ROS2"],
  [Gazebo, "Gazebo"],
  [MatLab, "MATLAB"],
  [SiArduino, "Arduino"],
  // Dev environments
  [SiVisualstudiocode, "VS Code"],
  [SiJupyter, "Jupyter"],
  [SiGooglecolab, "Google Colab"],
  [SiPycharm, "PyCharm"],
  [SiAndroidstudio, "Android Studio"],
  [SiUnity, "Unity"],
  // Design & office
  [SiBlender, "Blender"],
  [SiAdobephotoshop, "Photoshop"],
  [SiAdobepremierepro, "Premiere Pro"],
  [TfiMicrosoftAlt, "Microsoft"],
];

function Toolstack() {
  return <IconGrid items={tools} />;
}

export default Toolstack;
