import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import img2 from "../assets/lhis.jpg"
import img3 from "../assets/cs.jpg"
import img4 from "../assets/vacuum-salt.jpg"
import img5 from "../assets/Raw_Salt.jpg"
import img6 from "../assets/refined.jpg"
import img7 from "../assets/rffs.webp"
import img8 from "../assets/superfinesalt.jpg"
import img1 from "../assets/bspic.jpg"
import img9 from "../assets/rspic.jpeg"
const TestimonialCarousel = () => {

  const testimonials = [
    {
      id: 2,
      name: "Low Hardness Industrial Salt",
      role: "Marketing Director",
      image: img2,
      text: "Working with this company has been transformative for our business. Their expertise is unmatched.",
      rating: 5
    },
    {
      id: 3,
      name: "Crystal salt",
      role: "Product Manager",
      image: img3,
      text: "Incredible attention to detail and customer service. They truly care about their clients' success.",
      rating: 5
    },
    {
      id: 4,
      name: "Vacuum Salt",
      role: "Founder, StartupXYZ",
      image: img4,
      text: "Professional, reliable, and results-driven. This is the partner you want on your team.",
      rating: 5
    },
    {
      id: 5,
      name: "Raw Salt",
      role: "Operations Manager",
      image: img5,
      text: "Exceptional quality and service. They exceeded all our expectations and delivered on time.",
      rating: 5
    },
    {
      id: 6,
      name: "Refined Salt",
      role: "CTO, InnovateLabs",
      image: img6,
      text: "Their technical expertise and innovative solutions have been game-changing for our projects.",
      rating: 5
    },
    {
      id: 7,
      name: "Refined Free Flow Salt",
      role: "CTO, InnovateLabs",
      image: img7,
      text: "Their technical expertise and innovative solutions have been game-changing for our projects.",
      rating: 5
    },
    {
      id: 8,
      name: "Superfine Salt",
      role: "CTO, InnovateLabs",
      image: img8,
      text: "Their technical expertise and innovative solutions have been game-changing for our projects.",
      rating: 5
    },
    {
      id: 9,
      name: "Black Salt (Launching Soon)",
      role: "CTO, InnovateLabs",
      image: img1,
      text: "Their technical expertise and innovative solutions have been game-changing for our projects.",
      rating: 5
    },
    {
      id: 10,
      name: "Rock Salt (Launching Soon)",
      role: "CTO, InnovateLabs",
      image: img9,
      text: "Their technical expertise and innovative solutions have been game-changing for our projects.",
      rating: 5
    }
  ];

  // Duplicate testimonials for infinite scroll effect
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="w-full md:min-h-[75vh]  min-h-[60vh] bg-linear-to-br from-orange-400 to-orange-500 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-center items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
           Our Product
          </h2>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative overflow-hidden"
        >
          <div
            className={`flex gap-4 animate-scroll`}
            style={{
              width: 'fit-content'
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="shrink-0 w-72 md:w-80"
              >
                <div className="bg-white rounded-lg shadow-xl overflow-hidden h-full">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-2">
                    <h3 className="font-bold text-lg text-blue-900 text-center">
                      {testimonial.name}
                    </h3>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .animate-scroll {
    animation: scroll 50s linear infinite;
  }

  .animate-scroll:hover {
    animation-play-state: paused;
  }
`}</style>
    </div>
  );
};

export default TestimonialCarousel;