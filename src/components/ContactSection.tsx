
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, Clock, Home } from "lucide-react";

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted");
    alert("Thanks for reaching out! We'll get back to you shortly.");
  };

  return (
    <section className="py-16 bg-gray-50" id="contact">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-repair-dark mb-4">
            Contact Us
          </h2>
          <p className="text-repair-gray max-w-2xl mx-auto">
            Have questions or need to schedule a service? Reach out to us and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <Card className="border border-gray-200 shadow-sm h-full">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-repair-dark mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="(555) 123-4567" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your appliance issue..."
                    className="min-h-[120px]"
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-repair-orange hover:bg-repair-orange/90 text-white">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-repair-dark mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-repair-orange mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-repair-dark">Phone</h4>
                      <p className="text-repair-gray">(555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-repair-orange mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-repair-dark">Email</h4>
                      <p className="text-repair-gray">service@fixitpro.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Home className="h-5 w-5 text-repair-orange mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-repair-dark">Location</h4>
                      <p className="text-repair-gray">
                        123 Repair Street<br />
                        Denver, CO 80202
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-repair-orange mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-repair-dark">Business Hours</h4>
                      <p className="text-repair-gray">
                        Monday - Friday: 8am - 7pm<br />
                        Saturday: 9am - 5pm<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-repair-dark mb-4">Service Areas</h3>
                <p className="text-repair-gray mb-4">
                  We provide appliance repair services in the following areas:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-gray-100 rounded px-3 py-2 text-center text-repair-dark">Denver</div>
                  <div className="bg-gray-100 rounded px-3 py-2 text-center text-repair-dark">Aurora</div>
                  <div className="bg-gray-100 rounded px-3 py-2 text-center text-repair-dark">Lakewood</div>
                  <div className="bg-gray-100 rounded px-3 py-2 text-center text-repair-dark">Arvada</div>
                  <div className="bg-gray-100 rounded px-3 py-2 text-center text-repair-dark">Boulder</div>
                  <div className="bg-gray-100 rounded px-3 py-2 text-center text-repair-dark">Fort Collins</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
