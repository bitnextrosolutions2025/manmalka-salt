import React, { useState } from 'react';
import { Factory, TrendingUp, Award, Users, MapPin, Package } from 'lucide-react';
import a from "../assets/a.jpeg"
import b from "../assets/b.jpeg"
import c from "../assets/c.jpg"
import d from "../assets/d.jpeg"
import e from "../assets/e.jpeg"
import f from "../assets/f.jpeg"
import g from "../assets/g.jpeg"
import i from "../assets/i.jpeg"
import j from "../assets/j.jpeg"
const Infrastructure = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const stats = [
    { icon: Factory, label: 'Manufacturing Units', value: '1', color: 'blue' },
    { icon: TrendingUp, label: 'Years of Growth', value: '13+', color: 'green' },

    { icon: Users, label: 'Team Members', value: '200+', color: 'orange' }
  ];

  const facilities = [
    {
      title: 'Production Facility',
      description: 'State-of-the-art salt processing units with automated machinery ensuring consistent quality and high output capacity.',
      icon: Factory
    },
    {
      title: 'Storage & Warehousing',
      description: 'Climate-controlled warehouses with strategic locations across India for efficient distribution and inventory management.',
      icon: Package
    },
    {
      title: 'Quality Control Lab',
      description: 'Advanced testing laboratories ensuring every batch meets stringent quality standards for both industrial and edible salt.',
      icon: Award
    },
    {
      title: 'Distribution Network',
      description: 'We operate a robust and reliable distribution network built on timely delivery, strict quality assurance, and a proactive understanding of customer requirements. Manufacturing operations are managed by the Manmalka Manufacturing Unit, while nationwide distribution is efficiently handled by MS Manmalka Salt Private Limited.',
      icon: MapPin
    }
  ];

  const images = [
    { id: 1, alt: 'Salt storage facility', image: a, },
    { id: 2, alt: 'Warehouse inventory', image: b },
    { id: 3, alt: 'Processing unit', image: c },
    { id: 4, alt: 'Storage warehouse', image: d },
    { id: 5, alt: 'Salt packaging', image: e },
    { id: 6, alt: 'Distribution center', image: f },
    { id: 7, alt: 'Quality control', image: g },
    { id: 8, alt: 'Inventory management', image: i }
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative h-96 bg-linear-to-r from-blue-600 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="mt-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
              Infrastructure
            </h1>
            <div className="h-1 w-24 bg-orange-500 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid grid-cols-2 lg:flex lg:justify-center gap-4 lg:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className=" lg:w-[calc(25%-1.5rem)] bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >

                <div className={`inline-flex p-3 rounded-lg mb-4 ${stat.color === 'blue' ? 'bg-blue-50' :
                    stat.color === 'green' ? 'bg-green-50' :
                      stat.color === 'purple' ? 'bg-purple-50' : 'bg-gray-50'
                  }`}>
                  <Icon className={`w-6 h-6 ${stat.color === 'blue' ? 'text-blue-600' :
                      stat.color === 'green' ? 'text-green-600' :
                        stat.color === 'purple' ? 'text-purple-600' : 'text-gray-600'
                    }`} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Company Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold bg-linear-to-r from-orange-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent ">
            Building Excellence Since 2011
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            From the time we started our way, our one and only goal was to produce, supply, and distribute high-grade but cost-effective industrial and edible salt to our consumers. We, MS MANMALKA SALT PVT.LTD, glad to announce that we have reached our goal efficaciously. Our journey has started in the year 2011 as a small salt trading company and today, we are renowned as one of the largest salt manufacturing and distributing firms in India.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start space-x-4">
                  <div className="shrink-0">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {facility.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {facility.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Image Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Facilities
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image) => (
              <div
                key={image.id}
                className="group relative aspect-square bg-gray-200 rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedImage(image.image)}
              >
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm font-medium px-4 py-2 bg-black/50 rounded-lg backdrop-blur-sm">
                    View Image
                  </span>
                </div>
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <img src={image.image} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-linear-to-r from-blue-600 to-blue-800 rounded-2xl shadow-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Experience the quality and reliability that has made us one of India's leading salt manufacturers
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Contact Us Today
          </button>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full bg-white rounded-xl p-2">
            <button
              className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              {/* <Package className="w-16 h-16 text-gray-400" /> */}
              <img src={selectedImage} alt="" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Infrastructure;