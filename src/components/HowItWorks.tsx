
import React from "react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "1",
    title: "Schedule a Service",
    description: "Book online or call us to schedule a repair visit at a time that works for you."
  },
  {
    number: "2",
    title: "Diagnosis",
    description: "Our expert technician will diagnose the problem and provide an upfront quote."
  },
  {
    number: "3",
    title: "Quick Repair",
    description: "We fix the issue, often on the same visit, with quality parts and workmanship."
  },
  {
    number: "4",
    title: "Guarantee",
    description: "All repairs are backed by our 90-day parts and labor warranty."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-repair-dark mb-4">
            How It Works
          </h2>
          <p className="text-repair-gray max-w-2xl mx-auto">
            Getting your appliance repaired is easy with our simple four-step process.
            We're committed to making your repair experience fast and hassle-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-repair-blue text-white text-2xl font-bold mb-4">
                {step.number}
              </div>
              
              {/* Connecting line between steps */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gray-200"></div>
              )}
              
              <h3 className="text-xl font-bold text-repair-dark mb-2">{step.title}</h3>
              <p className="text-repair-gray">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-repair-orange hover:bg-repair-orange/90 text-white px-8 py-2">
            Schedule Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
