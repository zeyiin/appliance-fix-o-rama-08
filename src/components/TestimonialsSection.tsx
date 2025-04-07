
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    testimonial: "The technician arrived on time and fixed my refrigerator in less than an hour. Very professional service!",
    location: "Denver, CO",
    stars: 5
  },
  {
    name: "Michael Thompson",
    testimonial: "I was impressed with how quickly they diagnosed the problem with my washing machine. Great service at a fair price.",
    location: "Austin, TX",
    stars: 5
  },
  {
    name: "Jennifer Wilson",
    testimonial: "They repaired my dishwasher when another company said it needed to be replaced. Saved me hundreds of dollars!",
    location: "Chicago, IL",
    stars: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="bg-repair-blue py-16 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="max-w-2xl mx-auto opacity-90">
            Don't just take our word for it. Here's what our satisfied customers have to say about our appliance repair services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white text-repair-dark border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
                  ))}
                </div>
                <p className="mb-4 italic">"{testimonial.testimonial}"</p>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-repair-gray text-sm">{testimonial.location}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
