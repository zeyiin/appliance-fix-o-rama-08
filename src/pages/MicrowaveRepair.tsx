
import React from "react";
import ServicePage from "./ServicePage";

const MicrowaveRepair = () => {
  return (
    <ServicePage
      serviceType="Microwave Repair"
      description="Don't replace your microwave when it can be repaired! Our technicians are equipped to handle all common microwave issues including power problems, turntable malfunctions, heating issues, or unusual noises. We repair countertop and built-in models."
      benefits={[
        "Cost-effective alternative to replacement",
        "Expert diagnosis of complex electrical issues",
        "Repairs for all major microwave brands",
        "Prompt, professional service",
        "Full testing after repair completion",
        "Safety-first approach to all repairs"
      ]}
      image="/microwave-repair.jpg"
    />
  );
};

export default MicrowaveRepair;
