import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import pic1 from "../assets/pic1.jpg"
import pic2 from "../assets/pic2.jpg"
import { TypeAnimation } from 'react-type-animation';
export default function ManmalkaSalt() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-blue-50">

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-orange-50/50 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className={`text-center mb-8 sm:mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 h-25 sm:mb-6">
              <span className="bg-linear-to-r from-orange-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                {/* Welcome To Manmalka Salt */}
              </span>
              <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Welcome!',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Welcome To Manmalka Salt',
                1000
              ]}
              wrapper="span"
              speed={40}
              className="bg-linear-to-r from-orange-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent"
              repeat={Infinity}
              
            />
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-semibold mb-2 px-4">
              "One of the best salt  manufacturing & distribution firm India"
            </p>
            <div className="w-20 sm:w-24 h-1 bg-linear-to-r from-orange-500 to-yellow-500 mx-auto rounded-full"></div>
          </div>

          <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Content */}
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-orange-100 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  From the time we started our way, our one and only goal was to produce, supply, and distribute high-grade and cost-effective industrial and edible salt to our customers. We, <span className="font-semibold text-orange-600">MANMALKA SALT</span>, glad to announce that we have reached our goal efficaciously. Our journey has started in the year <span className="font-semibold">2011</span> as a small salt trading company and today, we are renowned as one of the best<span className="font-semibold text-orange-600"> salt manufacturing and distributing firms in India</span>.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <div className="bg-linear-to-br from-orange-500 to-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <p className="text-2xl sm:text-3xl font-bold">14+</p>
                  <p className="text-xs sm:text-sm opacity-90">Years Experience</p>
                </div>
                <div className="bg-linear-to-br from-blue-500 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <p className="text-2xl sm:text-3xl font-bold">Pan-India</p>
                  <p className="text-xs sm:text-sm opacity-90">Presence</p>
                </div>
                <div className="bg-linear-to-br from-green-500 to-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <p className="text-2xl sm:text-3xl font-bold">100%</p>
                  <p className="text-xs sm:text-sm opacity-90">Quality Assured</p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute inset-0 bg-linear-to-br from-orange-400 to-yellow-400 rounded-3xl blur-2xl opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
                <img 
                    src={pic1} 
                  alt="Salt Manufacturing" 
                  className="relative rounded-3xl shadow-2xl w-full h-64 sm:h-80 lg:h-96 object-cover transform group-hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="absolute inset-0 rounded-3xl bg-linear-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500" />
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-16">
            <span className="bg-linear-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent">
              Our Journey at Brief
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="absolute inset-0 bg-linear-to-br from-blue-400 to-purple-400 rounded-3xl blur-2xl opacity-20"></div>
              <img 
                src={pic2}
                alt="Salt Distribution" 
                className="relative rounded-3xl shadow-2xl w-full h-64 sm:h-80 lg:h-96 object-cover"
              />
            </div>

            <div className="space-y-4 sm:space-y-6 order-1 md:order-2">
              <div className="bg-linear-to-br from-orange-50 to-yellow-50 rounded-2xl p-6 sm:p-8 border-l-4 border-orange-500 hover:shadow-lg transition-shadow duration-300">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  MANMALKA SALT has successfully made its presence at a <span className="font-semibold text-orange-600">pan-Indian level</span> to date and set up  salt manufacturing plant  and regional offices all over India determinedly with the assurance to produce and supply only quality products.
                </p>
              </div>

              <div className="bg-linear-to-br from-blue-50 to-purple-50 rounded-2xl p-6 sm:p-8 border-l-4 border-blue-500 hover:shadow-lg transition-shadow duration-300">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  "Led by <span className="font-semibold">Mr. Ram Gopal Agarwal</span>, our group has overcome every challenge to become a leader in salt manufacturing and distribution. We are committed to constant growth, working hard every day to reach more customers across India and around the world."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-slate-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-6">
            <span className="bg-linear-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent">
              Core We Preserve Rigorously
            </span>
          </h2>
          <p className="text-center text-gray-600 mb-8 sm:mb-12 text-base sm:text-lg max-w-3xl mx-auto px-4">
            Our commitment to excellence drives everything we do
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {[
              { title: "Quality", icon: "✓", color: "from-orange-500 to-red-500" },
              { title: "Honesty", icon: "◆", color: "from-blue-500 to-cyan-500" },
              { title: "Integrity", icon: "★", color: "from-purple-500 to-pink-500" },
              { title: "Transparency", icon: "◈", color: "from-green-500 to-emerald-500" },
              { title: "Innovation", icon: "⚡", color: "from-yellow-500 to-orange-500" },
              { title: "Commitment", icon: "♦", color: "from-indigo-500 to-blue-500" }
            ].map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100"
              >
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-linear-to-br ${value.color} rounded-xl flex items-center justify-center text-white text-xl sm:text-2xl font-bold mb-4 shadow-lg`}>
                  {value.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">{value.title}</h3>
                <div className="w-12 h-1 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full"></div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl border border-orange-100">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
              MANMALKA SALT always sticks to industry-standard quality, safe packaging, fast-paced delivery, and adherence to commitment employed with innovative technology and leading infrastructure. Every business has its objective to follow and we partake too. <span className="font-semibold text-orange-600">Honesty, integrity, and transparency</span> – these are the three major pillars we conserve at every point of our business to certify success and loyalty to our customers.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              We have been fostering our core with <span className="font-semibold">loyalty, consistency, and perseverance</span>, and no doubt our core brings us results beyond everything. Our experience and a long list of consumers have been assisting us to lead the salt manufacturing and distribution domain and retain customer satisfaction that you can find hardly anywhere else. We assure <span className="font-semibold text-orange-600">quality above all and loyalty above profit</span> – these are the success mantras we follow whatever the circumstances we are pushed to get through.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
