import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowUp, X,  } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
export default function ProfessionalFooter() {
      const [showButton, setShowButton] = useState(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-linear-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

                    {/* Contact Us Section */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold mb-6 relative inline-block">
                            Contact Us
                            <span className="absolute bottom-0 left-0 w-12 h-1 bg-blue-400 -mb-2"></span>
                        </h3>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3 group">
                                <MapPin className="w-5 h-5 mt-1 shrink-0 text-blue-300 group-hover:text-blue-200 transition-colors" />
                                <p className="text-sm leading-relaxed text-gray-100">
                                    KAMALALAYA CENTRE, 156A Lenin Sarani,<br />
                                    Kolkata - 700013
                                </p>
                            </div>

                            <div className="flex items-center gap-3 group">
                                <Phone className="w-5 h-5 shrink-0 text-blue-300 group-hover:text-blue-200 transition-colors" />
                                <a href="tel:9830866994" className="text-sm hover:text-blue-300 transition-colors">
                                    033 46012461 / 9830866994
                                </a>
                            </div>

                            <div className="flex items-center gap-3 group">
                                <Mail className="w-5 h-5 shrink-0 text-blue-300 group-hover:text-blue-200 transition-colors" />
                                <a href="mailto:info@msmsalt.com" className="text-sm hover:text-blue-300 transition-colors break-all">
                                    info@msmsalt.com
                                </a>
                            </div>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex gap-3 pt-2">
                            <a href="#" className="w-10 h-10 bg-blue-700/50 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110" aria-label="Facebook">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="https://x.com/manmalka" target='_blank' className="w-10 h-10 bg-blue-700/50 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110" aria-label="Twitter">
                                <X className="w-5 h-5 font-extrabold" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-blue-700/50 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110" aria-label="LinkedIn">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-blue-700/50 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110" aria-label="Instagram">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-blue-700/50 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110" aria-label="YouTube">
                                <Youtube className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Featured Links Section */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold mb-6 relative inline-block">
                            Quick Links
                            <span className="absolute bottom-0 left-0 w-12 h-1 bg-blue-400 -mb-2"></span>
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/" onClick={scrollToTop} className="text-sm text-gray-200 hover:text-blue-300 transition-colors flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:w-2 group-hover:h-2 transition-all"></span>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" onClick={scrollToTop} className="text-sm text-gray-200 hover:text-blue-300 transition-colors flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:w-2 group-hover:h-2 transition-all"></span>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/infrastructure" onClick={scrollToTop} className="text-sm text-gray-200 hover:text-blue-300 transition-colors flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:w-2 group-hover:h-2 transition-all"></span>
                                    Infrastructure
                                </Link>
                            </li>
                            <li>
                                <Link to="/products" onClick={scrollToTop} className="text-sm text-gray-200 hover:text-blue-300 transition-colors flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:w-2 group-hover:h-2 transition-all"></span>
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" onClick={scrollToTop} className="text-sm text-gray-200 hover:text-blue-300 transition-colors flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:w-2 group-hover:h-2 transition-all"></span>
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company Info Section */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold mb-6 relative inline-block">
                            Company Info
                            <span className="absolute bottom-0 left-0 w-12 h-1 bg-blue-400 -mb-2"></span>
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-sm text-gray-200 hover:text-blue-300 transition-colors flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:w-2 group-hover:h-2 transition-all"></span>
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray-200 hover:text-blue-300 transition-colors flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:w-2 group-hover:h-2 transition-all"></span>
                                    Terms & Conditions
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray-200 hover:text-blue-300 transition-colors flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:w-2 group-hover:h-2 transition-all"></span>
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <Link to="/contact" className="text-sm text-gray-200 hover:text-blue-300 transition-colors flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:w-2 group-hover:h-2 transition-all"></span>
                                    Support
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Map Section */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold mb-6 relative inline-block">
                            Location
                            <span className="absolute bottom-0 left-0 w-12 h-1 bg-blue-400 -mb-2"></span>
                        </h3>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3334.195997548173!2d88.35486207475687!3d22.563894433290397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277a9fd6fffff%3A0xc96c5f21c24f5831!2sMSM%20SALT%20PVT%20LTD!5e1!3m2!1sen!2sus!4v1767023118081!5m2!1sen!2sus"
                                width="100%"
                                height="200"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Company Location"
                                className="grayscale hover:grayscale-0 transition-all duration-300"
                            ></iframe>
                            <div className="p-3 bg-blue-800/50">
                                <a
                                    href="https://maps.google.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs text-blue-200 hover:text-white transition-colors flex items-center justify-center gap-1"
                                >
                                    View larger map →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t  border-blue-700 bg-blue-900">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-around items-center gap-4">
                        <p className="text-sm text-gray-300 text-center md:text-left">
                            © 2026 <span className="font-semibold">MANMALKA SALT</span> All Rights Reserved.
                        </p>
                        <p className="text-[15px] text-gray-300 text-center md:text-right">
                            Made By <a href="https://www.bitnextro.com" className="font-semibold text-blue-300 hover:text-yellow-500 transition-colors"> Bitnextro Solutionss</a>
                        </p>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            {showButton?<button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 bg-linear-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group z-50"
                aria-label="Scroll to top"
            >
                <ArrowUp className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>:""}
        </footer>
    );
}