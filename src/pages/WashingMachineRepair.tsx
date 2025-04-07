
import React from "react";
import ServicePage from "./ServicePage";

const WashingMachineRepair = () => {
  return (
    <ServicePage
      serviceType="Washing Machine Repair"
      description="From strange noises to leaks or failure to start, our experienced technicians can diagnose and repair all washing machine problems quickly. We service all major brands and models of both top-loading and front-loading washers."
      benefits={[
        "Same-day service in many cases",
        "Transparent pricing provided upfront",
        "Genuine replacement parts for lasting repairs",
        "Highly skilled and background-checked technicians",
        "Comprehensive diagnostic service",
        "Preventative maintenance options available"
      ]}
      image="/washing-machine-repair.jpg"
    />
  );
};

export default WashingMachineRepair;
