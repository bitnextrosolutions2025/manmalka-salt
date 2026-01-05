import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import saltpic3 from "../assets/saltpic3.jpeg"
const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contactData = {
    corporate: {
      title: "CORPORATE/MARKETING OFFICE",
      company: "MS MANMALKA SALT PVT LTD.",
      address: "156A LENIN SARANI, KAMALALAYA CENTRE, ROOM NO 514, 5TH FLOOR, KOL - 700013, WEST BENGAL",
      phone: "033 4601 2461",
      whatsapp: "9830866994",
      emails: ["info@msmsalt.com", ""]
    },
    factories: [
      {
        id: 1,
        type: "work",
        title: "FACTORY WORK",
        company: "MANMALKA SALT INDUSTRY",
        address: "TRAVEL NO 200, CITY/VILLAGE - PADANA, Plot no. 3, TALUKA - GANDHIDHAM, 370201 DISTT KACHH, GUJARAT",
        phone: "9331166994",
        email: "info@msmsalt.com"
      },
      {
        id: 2,
        type: "office",
        title: "FACTORY OFFICE",
        company: "MANMALKA SALT INDUSTRY",
        address: "OFFICE NO 102, CHETNA CHEMBER, SECTOR 9, PLOT NO 38, 1ST FLOOR, GANDHIDHAM KACHH 370201.",
        phone: "9595733555",
        email: "info@msmsalt.com"
      },
     
    ]
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Hero Section */}
      <div 
        className={`relative h-80 md:h-96 bg-cover bg-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
        style={{
          backgroundImage:saltpic3
        }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-blue-900/80 to-slate-900/80"></div>
        <div className="relative h-full flex flex-col justify-center items-start px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h1 className='text-5xl font-bold text-white mb-7'>Contact Us</h1>
            <div className="w-20 h-1 bg-yellow-400"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Corporate Office Section */}
        <div className={`mb-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-full bg-linear-to-b from-blue-600 to-blue-400"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 pl-4">
              {contactData.corporate.title}
            </h2>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-slate-100">
            <div className="bg-linear-to-r from-blue-600 to-blue-700 p-6">
              <h3 className="text-xl md:text-2xl font-bold text-white flex items-center">
                <MapPin className="mr-3 shrink-0" size={28} />
                {contactData.corporate.company}
              </h3>
            </div>
            <div className="p-6 md:p-8 space-y-6">
              <div className="flex items-start group">
                <MapPin className="text-blue-600 mr-4 mt-1 shrink-0 group-hover:scale-110 transition-transform" size={24} />
                <p className="text-slate-700 leading-relaxed">{contactData.corporate.address}</p>
              </div>
              <div className="flex items-center group cursor-pointer hover:bg-blue-50 p-3 rounded-lg transition-all">
                <Phone className="text-blue-600 mr-4 shrink-0 group-hover:rotate-12 transition-transform" size={24} />
                <p className="text-slate-800 font-semibold text-lg">{contactData.corporate.phone}</p>
              </div>
              <div className="flex items-center group cursor-pointer hover:bg-green-50 p-3 rounded-lg transition-all">
                <MessageCircle className="text-green-600 mr-4 shrink-0 group-hover:scale-110 transition-transform" size={24} />
                <p className="text-slate-800 font-semibold text-lg">{contactData.corporate.whatsapp}</p>
              </div>
              <div className="flex items-start group">
                <Mail className="text-blue-600 mr-4 mt-1 shrink-0 group-hover:scale-110 transition-transform" size={24} />
                <div className="space-y-2">
                  {contactData.corporate.emails.map((email, idx) => (
                    <p key={idx} className="text-blue-700 hover:text-blue-900 cursor-pointer transition-colors font-medium">
                      {email}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Factory Locations Section */}
        <div className={`transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <div className="relative mb-8">
            <div className="absolute -left-4 top-0 w-1 h-full bg-linear-to-b from-slate-600 to-slate-400"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 pl-4">
              Factory Locations
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {contactData.factories.map((factory, index) => (
              <div
                key={factory.id}
                className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-slate-100 group ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${800 + index * 100}ms` }}
              >
                <div className={`p-4 ${
                  factory.type === 'work' 
                    ? 'bg-linear-to-r from-slate-700 to-slate-800' 
                    : 'bg-linear-to-r from-blue-700 to-blue-800'
                }`}>
                  <h3 className="text-lg font-bold text-white">{factory.title}</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start">
                    <MapPin className="text-slate-600 mr-3 mt-1 shrink-0 group-hover:scale-110 transition-transform" size={20} />
                    <div>
                      <p className="font-bold text-slate-800 mb-1">{factory.company}</p>
                      <p className="text-slate-600 text-sm leading-relaxed">{factory.address}</p>
                    </div>
                  </div>
                  <div className="flex items-center group/item cursor-pointer hover:bg-slate-50 p-2 rounded-lg transition-all">
                    <Phone className="text-blue-600 mr-3 shrink-0 group-hover/item:rotate-12 transition-transform" size={20} />
                    <p className="text-slate-800 font-semibold">{factory.phone}</p>
                  </div>
                  <div className="flex items-center group/item cursor-pointer hover:bg-blue-50 p-2 rounded-lg transition-all">
                    <Mail className="text-blue-600 mr-3 shrink-0 group-hover/item:scale-110 transition-transform" size={20} />
                    <p className="text-blue-700 hover:text-blue-900 font-medium transition-colors">
                      {factory.email}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <div className="bg-linear-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Connect?
            </h3>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
              We're here to answer your questions and discuss how we can support your salt industry needs.
            </p>
            <button className="bg-white text-blue-700 px-8 py-3 rounded-full font-bold hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;