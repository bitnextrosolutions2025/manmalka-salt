import React, { useState, useEffect } from 'react';
import { Factory, TrendingUp, Award, Users, MapPin, Package, Building2, Shield, Truck, Zap } from 'lucide-react';
import saltpic1 from "../assets/saltpic1.jpg"
const AssociatedConcerns = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedConcern, setSelectedConcern] = useState(null);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  const concerns = [
    {
      id: 1,
      name: 'MS MANMALKA SALT PVT. LTD',
      location: 'KOLKATA, WEST BENGAL',
      description: 'Headquartered operations managing nationwide distribution and corporate affairs',
      icon: Building2,
      color: 'blue',
      features: ['Corporate Headquarters', 'Distribution Hub', 'Administrative Center']
    },
    {
      id: 2,
      name: 'MANMALKA SALT INDUSTRY',
      location: 'GANDHIDHAM, GUJARAT',
      description: 'Primary manufacturing facility with state-of-the-art salt processing infrastructure',
      icon: Factory,
      color: 'green',
      features: ['Manufacturing Unit', 'Quality Control Lab', 'Processing Facility']
    },
   
  ];

  const capabilities = [
    {
      icon: Factory,
      title: 'Advanced Manufacturing',
      description: 'Cutting-edge processing technology with automated quality control systems',
      color: 'blue'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'ISO-certified processes ensuring consistent product excellence',
      color: 'green'
    },
    {
      icon: Truck,
      title: 'Logistics Network',
      description: 'Pan-India distribution with real-time tracking and delivery',
      color: 'orange'
    },
    {
      icon: Zap,
      title: 'Rapid Production',
      description: 'High-capacity output meeting large-scale industrial demands',
      color: 'red'
    }
  ];

  const stats = [
    { label: 'Production Facilities', value: '1', suffix: '' },
    { label: 'States Covered', value: '2', suffix: '' },
    { label: 'Annual Capacity', value: '50K', suffix: ' MT' },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-blue-50 to-gray-50">
      {/* Hero Section with Animation */}
      <div className="relative h-125 bg-linear-to-r from-blue-900 via-blue-700 to-blue-900 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-45">
          {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div> */}
          <img src={saltpic1} alt="" />
        </div>

        {/* Animated linear Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">


          {/* Title with Staggered Animation */}
          <div className="mt-8 space-y-6">
            <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Associated Concerns
            </h1>
            <div className={`flex items-center space-x-4 transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div className="h-1 w-32 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full"></div>
              <div className="h-1 w-16 bg-linear-to-r from-yellow-500 to-orange-500 rounded-full"></div>
              <div className="h-1 w-8 bg-orange-500 rounded-full"></div>
            </div>
            <p className={`text-xl text-blue-100 max-w-2xl transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Powering India's salt industry through strategic locations and world-class infrastructure
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-gray-50 to-transparent"></div>
      </div>

      {/* Stats Bar with Animation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-700 delay-${(index + 1) * 100} ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
              >
                <div className="text-4xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Network</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Strategically positioned facilities across key locations ensuring seamless production and distribution
          </p>
        </div>

        {/* Concerns Cards with Hover Effects */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {concerns.map((concern, index) => {
            const Icon = concern.icon;
            const colorClasses = {
              blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
              green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
              purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700'
            };
            
            return (
              <div
                key={concern.id}
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer transform hover:-translate-y-2 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                onClick={() => setSelectedConcern(concern)}
              >
                {/* linear Header */}
                <div className={`bg-linear-to-r ${colorClasses[concern.color]} p-8 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 opacity-10 transform translate-x-8 -translate-y-8">
                    <Icon className="w-48 h-48" />
                  </div>
                  <div className="relative z-10">
                    <div className="inline-flex p-4 bg-white/20 backdrop-blur-sm rounded-xl mb-4">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                      {concern.name}
                    </h3>
                    <div className="flex items-center text-white/90 text-sm">
                      <MapPin className="w-4 h-4 mr-2" />
                      {concern.location}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {concern.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2">
                    {concern.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <div className={`w-2 h-2 rounded-full bg-linear-to-r ${colorClasses[concern.color]} mr-3`}></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* View Details Button */}
                  <button className={`mt-6 w-full py-3 px-4 bg-linear-to-r ${colorClasses[concern.color]} text-white rounded-lg font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0`}>
                    View Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Capabilities Section */}
        <div className={`bg-linear-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl p-12 mb-20 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Core Capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              const colorClasses = {
                blue: 'from-blue-500 to-blue-600',
                green: 'from-green-500 to-green-600',
                orange: 'from-orange-500 to-orange-600',
                red: 'from-red-500 to-red-600'
              };
              
              return (
                <div
                  key={index}
                  className="text-center group"
                >
                  <div className={`inline-flex p-6 bg-linear-to-br ${colorClasses[capability.color]} rounded-2xl mb-4 transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {capability.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`relative overflow-hidden rounded-3xl transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="absolute inset-0 bg-linear-to-r from-blue-600 via-purple-600 to-blue-600 animate-pulse"></div>
          <div className="relative bg-linear-to-r from-blue-600/95 to-purple-600/95 backdrop-blur-sm p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-4">
                Partner With Excellence
              </h2>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Join hands with India's most trusted salt manufacturing network. Experience quality, reliability, and innovation at every step.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                  Contact Us Today
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-xl">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Concern Details */}
      {selectedConcern && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedConcern(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full p-8 shadow-2xl transform animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {selectedConcern.name}
                </h3>
                <p className="text-gray-600 flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {selectedConcern.location}
                </p>
              </div>
              <button
                onClick={() => setSelectedConcern(null)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              {selectedConcern.description}
            </p>
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900">Key Features:</h4>
              {selectedConcern.features.map((feature, idx) => (
                <div key={idx} className="flex items-center text-gray-700">
                  <Award className="w-5 h-5 text-blue-600 mr-3" />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default AssociatedConcerns;