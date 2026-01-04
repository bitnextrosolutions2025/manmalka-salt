import { useEffect, useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import logo from "../assets/logo.png"
import { Link, useLocation } from 'react-router';
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Infrastructure', href: '/infrastructure' },
    { name: 'Products', href: '/products' },
    { name: 'Associated Concerns', href: '/associatedconcerns' },
    { name: 'Enquiry', href: '/enquiry' },
    { name: 'Contact Us', href: '/contact' }
  ];
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 130) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])



  return (
    <nav className="bg-white shadow-md ">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 `}>
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <div className='flex justify-between items-center' >


            <div className="flex items-center space-x-3 animate-fade-in-up ">
              <img className='md:h-25 h-15 ' src={logo} alt="" />
            </div>

            
            <div className="hidden lg:flex flex-col items-end space-y-1 text-sm">
              <div className="flex items-center space-x-2 text-yellow-500">
                <Phone className="w-8 h-8" />
                <a href="tel:9830866994"><span className="text-gray-700 text-2xl hover:text-yellow-500">033 46012461 / 9830866994</span></a>
              </div>
              <a href="mailto:info@msmsalt.com"> <div className="flex items-center space-x-2 text-yellow-500 mr-4.25">
                <Mail className="w-8 h-8" />
                <span className="text-gray-700 text-2xl hover:text-yellow-500">info@msmsalt.com</span>
              </div></a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Navigation Links - Desktop */}
        <div className={`hidden lg:flex items-center bg-white  justify-center space-x-8 py-4 border-t border-gray-200`}>
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className={`text-xl font-medium transition-colors p-2 ${link.href === location.pathname
                ? 'text-[#fef100] bg-blue-900  rounded-2xl'
                : 'text-gray-700 hover:text-yellow-700'
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-2 text-base font-medium transition-colors ${link.href === location.pathname
                    ? 'text-yellow-500 bg-yellow-50'
                    : 'text-gray-700 hover:bg-gray-100'
                    }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Contact Info in Mobile Menu */}
              <div className="px-4 py-3 mt-4 space-y-2 border-t border-gray-200">
                <div className="flex items-center space-x-2 text-sm">
                  <Phone className="w-6 h-6 text-yellow-500" />
                  <span className="text-gray-700 text-xl">033 46012461 / 9830866994</span>
                </div>
                <a href="mailto:info@msmsalt.com"><div className="flex items-center space-x-2 text-sm">
                  <Mail className="w-6 h-6 text-yellow-500" />
                  <span className="text-gray-700 text-xl">info@msmsalt.com</span>
                </div> </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}