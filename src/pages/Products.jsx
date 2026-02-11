import React, { useState, useEffect } from 'react';
import { CheckCircle2, Package, Award, Sparkles } from 'lucide-react';
import TestimonialCarousel from '../components/ProductTestimoial';
import cp1k from "../assets/cp1k.jpg"
import cp5g from "../assets/cp5g.jpg"
import cp52g from "../assets/cp52g.jpg"

const Products = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const products = {
    salt: [
      "Crystal.",
      "Refined salt.",
      "Vacuum Salt.",
      "Super Fine Salt.",
      "Refine free Flow Iodised salt.",
      "Low Hardness salt."
    ],
    brands: [
      "MSM.",

    ],

    brandss: [
      "CITI COOK."
    ],



  };

  const brandImages = [
    {
      id: 1,
      name: "CITI COOK - Premium Salt",
      weight: "500g",
      image: cp5g
    },
    {
      id: 3,
      name: "CITI COOK - Family Pack",
      weight: "1 Kg",
      image: cp1k
    }
  ];
  const brandImagess = [
    {
      id: 2,
      name: "MSM Industrial Salt",
      weight: "50 KG",
      image: cp52g,
    },

  ];

  const categories = [
    { id: 'all', label: 'All Products', icon: Package },
    { id: 'salt', label: 'Salt Products', icon: Sparkles },
    { id: 'brands', label: 'Our Brands', icon: Award },

  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-orange-50 to-slate-100">
      {/* Hero Section */}
      <div className="relative bg-linear-to-r from-slate-800 via-slate-900 to-slate-800 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-linear(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
          }}></div>
        </div>

        <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
          <div className="text-center">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/20 text-orange-400 text-sm font-semibold border border-orange-500/30">
                <Sparkles className="w-4 h-4 mr-2" />
                Premium Quality Products
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Our Products
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover our comprehensive range of high-quality salt products and rice husk solutions
            </p>
            <div className="mt-8 flex justify-center">
              <div className="w-24 h-1.5 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-lg shadow-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${activeCategory === cat.id
                    ? 'bg-linear-to-r from-orange-500 to-orange-600 text-white shadow-lg'
                    : 'bg-white text-slate-700 hover:bg-slate-100 shadow border border-slate-200'
                    } ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                  style={{ transitionDelay: `${300 + idx * 100}ms` }}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">

        {/* Type of Salt Section */}
        {(activeCategory === 'all' || activeCategory === 'salt') && (
          <div className={`mb-20 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}>
            <div className="mb-10">
              <div className="flex items-center mb-4">
                <div className="w-2 h-12 bg-linear-to-b from-orange-500 to-yellow-500 rounded-full mr-4"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Type Of Salt</h2>
              </div>
              <p className="text-slate-600 text-lg ml-6">Premium quality salt products for every need</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.salt.map((item, index) => (
                <div
                  key={index}
                  className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-orange-300 transform hover:-translate-y-2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                    }`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <CheckCircle2 className="w-7 h-7 text-orange-500 group-hover:scale-125 transition-transform duration-300" />
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className="text-xl font-bold text-slate-800 group-hover:text-orange-600 transition-colors">
                        {item}
                      </h3>
                      <div className="mt-3 h-1 w-0 group-hover:w-full bg-linear-to-r from-orange-500 to-yellow-500 rounded-full transition-all duration-500"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Our Brand Section */}
        {(activeCategory === 'all' || activeCategory === 'brands') && (
          <div className={`mb-20 transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}>
            <div className="mb-10">
              <div className="flex items-center mb-4">
                <div className="w-2 h-12 bg-linear-to-b from-blue-500 to-blue-600 rounded-full mr-4"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Our Brand</h2>
              </div>
              <p className="text-slate-600 text-lg ml-6">Trusted brands delivering excellence</p>
            </div>

            {/* Brand List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {products.brands.map((brand, index) => (
                <div
                  key={index}
                  className={`bg-linear-to-br from-blue-600 to-blue-700 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                    }`}
                  style={{ transitionDelay: `${800 + index * 100}ms` }}
                >
                  <div className="flex items-center">
                    <Award className="w-10 h-10 text-yellow-400 mr-4" />
                    <h3 className="text-2xl md:text-3xl font-bold text-white">{brand}</h3>
                  </div>
                </div>

              ))}
            </div>

            {/* Brand Images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {brandImagess.map((product, index) => (
                <div
                  key={product.id}
                  className={`group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                    }`}
                  style={{ transitionDelay: `${1000 + index * 100}ms` }}
                >
                  <div className="relative h-80 bg-linear-to-br from-slate-100 to-slate-200 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <div className="relative w-full h-full">
                        {/* Placeholder for product image */}
                        <div className="w-full h-full bg-white rounded-xl shadow-2xl flex items-center justify-center border-4 border-slate-200 group-hover:border-orange-400 transition-all duration-300">
                          <img src={product.image} alt="" />
                        </div>
                        <div className="absolute -top-3 -right-3 bg-linear-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg transform rotate-12">
                          {product.weight}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-linear-to-br from-slate-50 to-white">
                    <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-orange-600 transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center text-slate-600">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                      <span className="text-sm font-medium">Premium Quality</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {products.brandss.map((brand, index) => (
            <div
              key={index}
              className={`bg-linear-to-br from-blue-600 to-blue-700 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
              style={{ transitionDelay: `${800 + index * 100}ms` }}
            >
              <div className="flex items-center">
                <Award className="w-10 h-10 text-yellow-400 mr-4" />
                <h3 className="text-2xl md:text-3xl font-bold text-white">{brand}</h3>
              </div>
            </div>

          ))}
        </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {brandImages.map((product, index) => (
                <div
                  key={product.id}
                  className={`group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                    }`}
                  style={{ transitionDelay: `${1000 + index * 100}ms` }}
                >
                  <div className="relative h-80 bg-linear-to-br from-slate-100 to-slate-200 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <div className="relative w-full h-full">
                        {/* Placeholder for product image */}
                        <div className="w-full h-full bg-white rounded-xl shadow-2xl flex items-center justify-center border-4 border-slate-200 group-hover:border-orange-400 transition-all duration-300">
                          <img src={product.image} alt="" />
                        </div>
                        <div className="absolute -top-3 -right-3 bg-linear-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg transform rotate-12">
                          {product.weight}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-linear-to-br from-slate-50 to-white">
                    <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-orange-600 transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center text-slate-600">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                      <span className="text-sm font-medium">Premium Quality</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

      </div>
      <TestimonialCarousel />
    </div>
  );
};

export default Products;