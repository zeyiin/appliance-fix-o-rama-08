
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";

type ServicePageProps = {
  serviceType: string;
  description: string;
  benefits: string[];
  image: string;
};

const ServicePage = ({ serviceType, description, benefits, image }: ServicePageProps) => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl font-bold text-repair-dark mb-6">
              Professional {serviceType} Service
            </h1>
            <p className="text-repair-gray text-lg mb-6">
              {description}
            </p>
            
            <h2 className="text-2xl font-bold text-repair-dark mb-4">
              Why Choose Our Services
            </h2>
            <ul className="list-disc pl-5 mb-8 space-y-2">
              {benefits.map((benefit, index) => (
                <li key={index} className="text-repair-gray">
                  {benefit}
                </li>
              ))}
            </ul>
            
            <div className="rounded-lg overflow-hidden mb-8">
              <img 
                src={image} 
                alt={`${serviceType} Service`}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <div>
            <BookingForm serviceType={serviceType} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicePage;
