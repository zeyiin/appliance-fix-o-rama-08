
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    applianceType: "",
    zipCode: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleApplianceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, applianceType: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would send the form data to your backend
    alert("Thanks! We'll contact you shortly to schedule your repair.");
    setFormData({
      name: "",
      phone: "",
      applianceType: "",
      zipCode: ""
    });
  };

  return (
    <div className="relative bg-gradient-to-r from-repair-blue to-blue-700 text-white">
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Fast & Reliable Appliance Repairs
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-lg">
              Expert technicians ready to fix your appliances. Same-day service available!
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <div className="bg-white/20 rounded-full p-2">✓</div>
                <span>Licensed Technicians</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-white/20 rounded-full p-2">✓</div>
                <span>90-Day Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-white/20 rounded-full p-2">✓</div>
                <span>Upfront Pricing</span>
              </div>
            </div>
          </div>

          <Card className="bg-white text-repair-dark shadow-xl">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold text-center mb-6">
                Book a Service Call
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="appliance">Appliance Type</Label>
                  <Select value={formData.applianceType} onValueChange={handleApplianceChange}>
                    <SelectTrigger id="appliance">
                      <SelectValue placeholder="Select appliance" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="refrigerator">Refrigerator</SelectItem>
                      <SelectItem value="washer">Washing Machine</SelectItem>
                      <SelectItem value="dryer">Dryer</SelectItem>
                      <SelectItem value="dishwasher">Dishwasher</SelectItem>
                      <SelectItem value="oven">Oven / Range</SelectItem>
                      <SelectItem value="microwave">Microwave</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zipCode">Zip Code</Label>
                  <Input
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    placeholder="Enter your zip code"
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-repair-orange hover:bg-repair-orange/90">
                  Schedule Repair
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
