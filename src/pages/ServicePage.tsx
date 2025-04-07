
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
            
            <Card className="rounded-lg overflow-hidden mb-8">
              <AspectRatio ratio={16/9}>
                <img 
                  src={image} 
                  alt={`${serviceType} Service`}
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
              <CardContent className="p-4 bg-slate-50">
                <p className="text-sm text-gray-500">Professional {serviceType} by our certified technicians</p>
              </CardContent>
            </Card>
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
