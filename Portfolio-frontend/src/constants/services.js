// Create constants which can be imported wherever it is needed for easy acess.

import React from "react"
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa"
export default [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "Webb Development",
    text: `I love to create applications and sites for the webb.`,
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "Backend developer",
    text: `Im also capable of creating backend systems that require a lot of planning and design.`,
  },
  {
    id: 3,
    icon: <FaAndroid className="service-icon" />,
    title: "Mobile app developer",
    text: `Any type of mobile application, I can develop that for you.`,
  },
]
