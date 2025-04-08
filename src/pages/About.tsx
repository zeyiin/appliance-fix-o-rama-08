
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Star, Rocket } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-repair-dark mb-6">About FixItPro</h1>
          <p className="text-repair-gray text-lg">Your trusted partner for all appliance repairs</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-10 mb-12">
          <h2 className="text-3xl font-bold text-repair-dark mb-6">Our Story</h2>
          <div className="flex flex-col md:flex-row gap-6 items-center mb-8">
            <div className="md:w-1/3">
              <img 
                src="/photo-1519389950473-47ba0277781c" 
                alt="FixItPro Team" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div className="md:w-2/3 space-y-4">
              <p className="text-repair-gray text-lg">
                FixItPro was founded in 2023 by three engineering students who shared a passion for fixing things and helping people. 
                What started as a dorm room side project has quickly grown into a trusted appliance repair service in the community.
              </p>
              <p className="text-repair-gray text-lg">
                Frustrated by the lack of transparent, affordable, and reliable repair services for common household appliances, 
                Alex, Jordan, and Taylor combined their technical expertise and entrepreneurial spirit to create a solution. 
                Today, we're proud to offer professional repair services with upfront pricing, skilled technicians, and a 
                customer-first approach.
              </p>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-repair-dark mb-6 mt-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-lg">
              <div className="bg-repair-blue/10 p-4 rounded-full mb-4">
                <Users className="h-8 w-8 text-repair-blue" />
              </div>
              <h3 className="text-xl font-bold text-repair-dark mb-2">Expert Team</h3>
              <p className="text-repair-gray">
                Our technicians are certified professionals with years of hands-on experience repairing all major appliance brands.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-lg">
              <div className="bg-repair-orange/10 p-4 rounded-full mb-4">
                <Star className="h-8 w-8 text-repair-orange" />
              </div>
              <h3 className="text-xl font-bold text-repair-dark mb-2">Quality Service</h3>
              <p className="text-repair-gray">
                We pride ourselves on transparent pricing, punctual service, and repairs done right the first time.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-lg">
              <div className="bg-repair-blue/10 p-4 rounded-full mb-4">
                <Rocket className="h-8 w-8 text-repair-blue" />
              </div>
              <h3 className="text-xl font-bold text-repair-dark mb-2">Fast Response</h3>
              <p className="text-repair-gray">
                We understand appliance emergencies happen, so we offer quick response times and 24/7 emergency services.
              </p>
            </div>
          </div>
          
          <div className="bg-repair-blue/5 p-6 rounded-lg border border-repair-blue/10">
            <h3 className="text-xl font-bold text-repair-dark mb-4">Our Mission</h3>
            <p className="text-repair-gray text-lg">
              At FixItPro, our mission is to provide reliable, affordable appliance repair solutions that extend the life of your 
              valuable home appliances. We believe in reducing waste through repair rather than replacement, saving you money while 
              also being environmentally conscious.
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-3xl font-bold text-repair-dark mb-6">Our Services</h2>
          <p className="text-repair-gray text-lg mb-8 max-w-2xl mx-auto">
            From refrigerators to washing machines, our team is equipped with the knowledge 
            and tools to handle repairs for all major household appliances.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/refrigerator-repair.jpg" 
                  alt="Refrigerator Repair" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-repair-dark mb-2">Refrigerator Repair</h3>
                <p className="text-repair-gray mb-4">
                  Expert repairs for all refrigerator types and brands, from cooling issues to ice maker problems.
                </p>
                <a href="/services/refrigerator" className="text-repair-blue hover:text-repair-blue/80 font-medium">Learn more →</a>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/washing-machine-repair.jpg" 
                  alt="Washing Machine Repair" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-repair-dark mb-2">Washing Machine Repair</h3>
                <p className="text-repair-gray mb-4">
                  Solutions for leaks, unusual noises, spin issues, and all other washing machine problems.
                </p>
                <a href="/services/washing-machine" className="text-repair-blue hover:text-repair-blue/80 font-medium">Learn more →</a>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/microwave-repair.jpg" 
                  alt="Microwave Repair" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-repair-dark mb-2">Microwave Repair</h3>
                <p className="text-repair-gray mb-4">
                  Professional fixes for heating issues, turntable problems, and electrical malfunctions.
                </p>
                <a href="/services/microwave" className="text-repair-blue hover:text-repair-blue/80 font-medium">Learn more →</a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
