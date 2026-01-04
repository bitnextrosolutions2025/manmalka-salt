import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Building2, Globe, User, MessageSquare } from 'lucide-react';
import saltpic2 from "../assets/saltpic2.jpg"
const Enquiry = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }, 2000);
  };

  const contactInfo = [
    { 
      icon: Phone,
      title: 'Phone',
      details: ['033 46012461', '+91 9830866994'],
      color: 'blue',
      link: 'tel:919830866994'
    },
    {

      icon: Mail,
      title: 'Email',
      details: ['info@msmsalt.com', ''],
      color: 'green',
      link: 'mailto:info@msmsalt.com'
    },
    {
      icon: MapPin,
      title: 'Head Office',
      details: [' KAMALALAYA CENTRE, 156A Lenin Sarani', 'Kolkata - 700013',],
      color: 'purple',
      link: '#'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Sat: 11:00 AM - 6:00 PM', 'Sunday: Closed'],
      color: 'orange',
      link: '#'
    }
  ];

  const offices = [
    {
      name: 'Corporate Office',
      location: 'Kolkata, West Bengal',
      icon: Building2,
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Manufacturing Unit',
      location: 'Gandhidham, Gujarat',
      icon: Building2,
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Production Facility',
      location: 'Santhalpur, Gujarat',
      icon: Building2,
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-blue-50 to-gray-50">
      {/* Hero Section */}
      <div className="relative h-64 bg-linear-to-r from-blue-900 via-blue-700 to-blue-900 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-45 ">
         <img className='w-screen h-125' src={saltpic2} alt="" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          {/* Breadcrumb */}
          
          {/* Title */}
          <div className="mt-8">
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
             Enquiry
            </h1>
            <div className={`flex items-center space-x-3 transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div className="h-1 w-24 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full"></div>
              <div className="h-1 w-12 bg-linear-to-r from-yellow-500 to-orange-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Contact Form - Left Side (2 columns) */}
          <div className="lg:col-span-2">
            <div className={`bg-white rounded-2xl shadow-xl p-8 lg:p-12 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">Contact With Us</h2>
                <div className="h-1 w-16 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full mb-4"></div>
                <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="relative">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Name *
                    </label>
                    <div className="relative">
                      <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${focusedField === 'name' ? 'text-blue-600' : 'text-gray-400'}`}>
                        <User className="w-5 h-5" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Your Name"
                        required
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:bg-white focus:outline-none transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${focusedField === 'email' ? 'text-blue-600' : 'text-gray-400'}`}>
                        <Mail className="w-5 h-5" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="your.email@example.com"
                        required
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:bg-white focus:outline-none transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Phone Field */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${focusedField === 'phone' ? 'text-blue-600' : 'text-gray-400'}`}>
                      <Phone className="w-5 h-5" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="+91 98765 43210"
                      required
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:bg-white focus:outline-none transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <div className={`absolute left-4 top-6 transition-colors ${focusedField === 'message' ? 'text-blue-600' : 'text-gray-400'}`}>
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Tell us about your requirements..."
                      required
                      rows="6"
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:bg-white focus:outline-none transition-all duration-300 resize-none"
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className={`w-full py-4 px-6 rounded-xl font-bold text-white text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-3 ${
                    isSuccess
                      ? 'bg-linear-to-r from-green-500 to-green-600'
                      : 'bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800'
                  } ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : isSuccess ? (
                    <>
                      <CheckCircle className="w-6 h-6" />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info - Right Side (1 column) */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Cards */}
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const colorClasses = {
                blue: 'from-blue-500 to-blue-600',
                green: 'from-green-500 to-green-600',
                purple: 'from-purple-500 to-purple-600',
                orange: 'from-orange-500 to-orange-600'
              };

              return (
                <a
                  key={index}
                  href={info.link}
                  className={`block bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                  style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`shrink-0 p-3 bg-linear-to-br ${colorClasses[info.color]} rounded-lg shadow-md`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-2">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-gray-600">{detail}</p>
                      ))}
                    </div>
                  </div>
                </a>
              );
            })}

            {/* Office Locations */}
            <div className={`bg-linear-to-br from-gray-900 to-gray-800 rounded-xl shadow-2xl p-6 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex items-center space-x-2 mb-4">
                <Globe className="w-5 h-5 text-blue-400" />
                <h3 className="font-bold text-white">Our Locations</h3>
              </div>
              <div className="space-y-3">
                {offices.map((office, index) => {
                  const Icon = office.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors">
                      <div className={`p-2 bg-linear-to-br ${office.color} rounded-lg`}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{office.name}</p>
                        <p className="text-xs text-gray-300">{office.location}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`mt-16 bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-12 text-center transition-all duration-1000 delay-900 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <h2 className="text-3xl font-bold text-white mb-4">Need Immediate Assistance?</h2>
          <p className="text-blue-100 text-lg mb-6">Our team is ready to help you with any queries</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919876543210"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 inline-flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
            <a
              href="mailto:msmsaltoffice@gmail.com"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-xl inline-flex items-center justify-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enquiry;