import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#010b52] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/">
              <img
                src="https://flightpadi.com/wp-content/uploads/2023/12/flightpadi-white-logo-wide.png"
                alt="FlightPadi"
                className="h-12 object-contain"
              />
            </Link>
            <p className="text-gray-300 text-sm">
              Empowering the top 1% to escape the stress of planning and rediscover the joy of travel.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/myflightpadi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/flightpadi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@MyFlightpadi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-400 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/flightpadi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/flightpadi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <div className="space-y-4">
              <a
                href="https://www.trustpilot.com/review/flightpadi.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src="https://flightpadi.com/wp-content/uploads/2023/12/flightpadi-on-trustpilot-1.png"
                  alt="Trustpilot"
                  className="h-12 object-contain"
                />
              </a>
              <a
                href="https://www.trustpilot.com/review/flightpadi.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src="https://flightpadi.com/wp-content/uploads/2023/12/flightpadi-corporate-affairs-commission-registered.png"
                  alt="Corporate Affairs Commission"
                  className="h-16 object-contain"
                />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-6">
            <div className="border-b border-white/20 pb-2">
              <h3 className="text-lg font-semibold">Company</h3>
            </div>
            <ul className="space-y-3">
              <li>
                <a href="https://flightpadi.com/about-us" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="https://flightpadi.com/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="border-b border-white/20 pb-2 mt-8">
              <h3 className="text-lg font-semibold">Legal</h3>
            </div>
            <ul className="space-y-3">
              <li>
                <a href="https://flightpadi.com/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://flightpadi.com/terms-of-service" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <div className="border-b border-white/20 pb-2">
              <h3 className="text-lg font-semibold">Services</h3>
            </div>
            <ul className="space-y-3">
              <li>
                <a href="https://flightpadi.com/flight-booking" className="text-gray-300 hover:text-white transition-colors">
                  Flight Booking
                </a>
              </li>
              <li>
                <a href="https://flightpadi.com/visa-assistance" className="text-gray-300 hover:text-white transition-colors">
                  Visa Assistance
                </a>
              </li>
              <li>
                <a href="https://flightpadi.com/flight-refunds" className="text-gray-300 hover:text-white transition-colors">
                  Flight Refund
                </a>
              </li>
              <li>
                <a href="https://flightpadi.com/vacation" className="text-gray-300 hover:text-white transition-colors">
                  Vacation Planning
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <div className="border-b border-white/20 pb-2">
              <h3 className="text-lg font-semibold">Resources</h3>
            </div>
            <ul className="space-y-3">
              <li>
                <a href="https://flightpadi.com/airline" className="text-gray-300 hover:text-white transition-colors">
                  Airlines
                </a>
              </li>
              <li>
                <a href="https://flightpadi.com/airport" className="text-gray-300 hover:text-white transition-colors">
                  Airports
                </a>
              </li>
              <li>
                <a href="https://flightpadi.com/cheap-flight" className="text-gray-300 hover:text-white transition-colors">
                  Cheap Flights
                </a>
              </li>
              <li>
                <a href="https://flightpadi.com/travel-guides" className="text-gray-300 hover:text-white transition-colors">
                  Travel Guides
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-sm text-gray-400">
            © 2023. Flightpadi is part of the GorillaZap portfolio.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
