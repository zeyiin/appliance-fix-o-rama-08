
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, Zap, Clock } from "lucide-react";

const servicesList = [
  {
    title: "Refrigerator Repair",
    description: "Not cooling? Ice maker broken? Strange noises? Our experts can fix all refrigerator brands and models.",
    icon: <Settings className="h-10 w-10 text-repair-blue mb-4" />,
    common: ["Not cooling properly", "Water leaking", "Ice maker issues", "Strange noises", "Temperature fluctuations"]
  },
  {
    title: "Washing Machine Repair",
    description: "Fix leaks, drainage issues, strange noises, and other common washing machine problems.",
    icon: <Settings className="h-10 w-10 text-repair-blue mb-4" />,
    common: ["Won't drain", "Leaking water", "Won't spin", "Makes loud noises", "Door won't lock"]
  },
  {
    title: "Dryer Repair",
    description: "Is your dryer not heating or taking too long? Our technicians can diagnose and fix the issue quickly.",
    icon: <Zap className="h-10 w-10 text-repair-blue mb-4" />,
    common: ["Not heating", "Takes too long to dry", "Drum not turning", "Makes loud noises", "Shuts off too soon"]
  },
  {
    title: "Dishwasher Repair",
    description: "From drainage problems to cleaning issues, we'll get your dishwasher working efficiently again.",
    icon: <Settings className="h-10 w-10 text-repair-blue mb-4" />,
    common: ["Not cleaning dishes properly", "Not draining", "Leaking", "Strange noises", "Door not latching"]
  },
  {
    title: "Oven & Range Repair",
    description: "Having trouble with your oven temperature, burners, or controls? Our technicians can help.",
    icon: <Zap className="h-10 w-10 text-repair-blue mb-4" />,
    common: ["Not heating to temperature", "Burners not working", "Self-cleaning issues", "Control panel not responding", "Door issues"]
  },
  {
    title: "Same-Day Service",
    description: "Emergency repairs available. Our technicians are ready to solve your appliance issues today.",
    icon: <Clock className="h-10 w-10 text-repair-orange mb-4" />,
    common: ["Fast response times", "Live technician support", "Evening appointments available", "Weekend service", "No extra charge for same-day"]
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-repair-dark mb-4">
            Our Repair Services
          </h2>
          <p className="text-repair-gray max-w-2xl mx-auto">
            We provide expert repair services for all major home appliances. 
            Our technicians are factory-trained and ready to solve any issue quickly and efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <Card key={index} className="border border-gray-200 transition-shadow hover:shadow-lg">
              <CardHeader className="text-center">
                <div className="flex justify-center">{service.icon}</div>
                <CardTitle className="text-xl font-bold text-repair-dark">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-repair-gray">
                  {service.description}
                </CardDescription>
                <div>
                  <h4 className="font-semibold mb-2 text-repair-dark">Common Issues We Fix:</h4>
                  <ul className="space-y-1">
                    {service.common.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-repair-gray">
                        <span className="text-repair-orange">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-repair-blue hover:bg-repair-blue/90 text-white px-8 py-6 text-lg h-auto">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
