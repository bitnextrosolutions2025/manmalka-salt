import React from 'react';
import { Phone, Mail, Award, Target, Users, TrendingUp } from 'lucide-react';
import as1 from "../assets/as1.jpg"
import as2 from "../assets/as2.jpg"
import { Link } from 'react-router';
export default function About() {
  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Excellence",
      description: "Industry-standard quality with rigorous testing and certification processes"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Customer Focus",
      description: "Commitment to customer satisfaction through reliable delivery and service"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Innovation",
      description: "Leveraging cutting-edge technology and modern infrastructure"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Transparency",
      description: "Honesty and integrity in every business interaction"
    }
  ];

  const team = [
    {
      name: "Mr. Ram Gopal Agarwal",
      role: "Director",
      phone: "+91 9830266994",
      email: "director@manmalkasalt.com"
    },
    {
      name: "Manju Devi Agarwal",
      role: "Director",
      phone: "+91 9331166994",
      email: "director@manmalkasalt.com"
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="relative h-96 bg-linear-to-r from-blue-900 to-blue-700 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <img 
          src={as2}
          alt="Salt Production" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">About Us</h1>
          <p className="text-xl text-blue-100 max-w-2xl">Leading the salt industry with quality, integrity, and innovation</p>
        </div>
      </div>

      {/* Company Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Who We Are
            </h2>
            <div className="h-1 w-20 bg-orange-500 mb-6"></div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              MANMALKA SALT is a premier salt manufacturing company committed to delivering exceptional quality products to our valued customers. We maintain industry-standard quality protocols, ensuring safe packaging, fast-paced delivery, and unwavering adherence to our commitments.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Through innovative technology and leading infrastructure, we've built our reputation on three fundamental pillars: <span className="font-semibold text-blue-900">Honesty, Integrity, and Transparency</span>. These values guide every aspect of our business, from production to customer service, certifying our success and fostering lasting loyalty among our customers.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-linear-to-r from-blue-500 to-orange-500 rounded-2xl blur opacity-20"></div>
            <img 
              src={as1} 
              alt="Salt Crystals" 
              className="relative rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-linear-to-br from-blue-50 to-orange-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <div className="h-1 w-20 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that drive our success and guide our operations
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="text-blue-600 mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
          <div className="h-1 w-20 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Key persons contributing to the success of the company
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="bg-linear-to-r from-orange-500 to-orange-700 h-32"></div>
              <div className="p-8 -mt-12">
                <div className="w-24 h-24 bg-white rounded-full shadow-lg mb-6 flex items-center justify-center text-4xl font-bold text-blue-600 border-4 border-white">
                  {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-orange-600 font-semibold text-lg mb-6">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-linear-to-r from-blue-900 to-blue-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "15+", label: "Years Experience" },
              { number: "500+", label: "Happy Clients" },
              { number: "99%", label: "Quality Standard" },
              { number: "24/7", label: "Customer Support" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-200 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="bg-linear-to-r from-orange-500 to-orange-600 rounded-3xl p-8 md:p-16 text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Experience the difference of working with a trusted industry leader
          </p>
         <Link to="/contact"> <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg">
            Get In Touch
          </button></Link>
        </div>
      </div>
    </div>
  );
}