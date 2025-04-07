
import React from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="bg-repair-orange py-16">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Need Your Appliance Fixed Fast?
        </h2>
        <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
          Don't wait! Our expert technicians are ready to help you today.
          Same-day service available in most areas.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-white hover:bg-gray-100 text-repair-orange font-semibold px-8 py-6 text-lg h-auto flex items-center gap-2">
            <Phone className="h-5 w-5" />
            Call (555) 123-4567
          </Button>
          <Button className="bg-repair-blue hover:bg-repair-blue/90 text-white font-semibold px-8 py-6 text-lg h-auto">
            Book Online Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
