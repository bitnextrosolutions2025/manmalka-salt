import React from 'react';
import { BookOpen, Bell } from 'lucide-react';

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-400 flex flex-col items-center  p-6 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Inline styles for the first-time view animation. 
        Using a cubic-bezier timing function for a smooth, premium feel.
      */}
      <style>
        {`
          @keyframes fadeUp {
            0% { 
              opacity: 0; 
              transform: translateY(20px); 
            }
            100% { 
              opacity: 1; 
              transform: translateY(0); 
            }
          }
          
          .animate-fade-up {
            animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            opacity: 0; /* Ensures elements are hidden before the animation starts */
          }
          
          /* Staggered delays for a cascading effect */
          .delay-100 { animation-delay: 0.1s; }
          .delay-200 { animation-delay: 0.2s; }
          .delay-300 { animation-delay: 0.3s; }
          .delay-400 { animation-delay: 0.4s; }
          .delay-500 { animation-delay: 0.5s; }
        `}
      </style>

      <main className="max-w-3xl w-full text-center space-y-10">
        
        {/* Formal Icon */}
        <div className="flex justify-center animate-fade-up delay-100">
          <div className="p-5 bg-blue-50/50 rounded-2xl border border-blue-100/50 shadow-sm">
            <BookOpen className="w-10 h-10 text-blue-900" strokeWidth={1.2} />
          </div>
        </div>

        {/* Main Heading */}
        <div className="space-y-4 animate-fade-up delay-200">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-900 tracking-tight">
            Our blog page is coming soon.
          </h1>
        </div>

        {/* Elegant Divider */}
        <div className="flex justify-center animate-fade-up delay-300">
          <div className="w-12 h-px bg-blue-200"></div>
        </div>

        {/* Subtitle */}
        <p className="text-lg  font-bold md:text-xl text-blue-800/70  max-w-xl mx-auto leading-relaxed animate-fade-up delay-400">
          We are currently curating insightful articles and expert perspectives. 
          Please check back shortly for our inaugural publications.
        </p>
        
      </main>
    </div>
  );
}