
import React from "react";
import ServicePage from "./ServicePage";

const RefrigeratorRepair = () => {
  return (
    <ServicePage
      serviceType="Refrigerator Repair"
      description="Our expert technicians specialize in all types of refrigerator repairs. Whether you have a side-by-side, French door, or compact refrigerator, our team has the knowledge and tools to fix it promptly and efficiently."
      benefits={[
        "24/7 emergency repair services available",
        "Certified technicians with years of experience",
        "Warranty on all parts and labor",
        "Honest pricing with no hidden fees",
        "Most repairs completed in a single visit",
        "Servicing all major brands and models"
      ]}
      image="/placeholder.svg"
    />
  );
};

export default RefrigeratorRepair;
