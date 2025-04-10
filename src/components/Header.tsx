import React from 'react';
import { Menu, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isResourcesOpen, setIsResourcesOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = React.useState(false);

  const menuItems = [
    { label: 'Flights', href: 'https://flightpadi.com/flight-booking/' },
    { label: 'Refunds', href: 'https://flightpadi.com/flight-refunds/' },
    { label: 'Visa', href: 'https://flightpadi.com/visa-assistance/' },
    { label: 'Vacation', href: 'https://flightpadi.com/vacation/' },
    { label: 'Explore', href: 'https://flightpadi.com/visit/' },
  ];

  const resourceItems = [
    { label: 'Attractions', href: 'https://flightpadi.com/attraction/' },
    { label: 'Airlines', href: 'https://flightpadi.com/airline/' },
    { label: 'Airports', href: 'https://flightpadi.com/airport/' },
    { label: 'Cheap Flights', href: 'https://flightpadi.com/cheap-flight/' },
    { label: 'Destinations', href: 'https://flightpadi.com/destinations/' },
    { label: 'Travel Guides', href: 'https://flightpadi.com/travel-guides/' },
  ];

  return (
    <header className="bg-white shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="https://flightpadi.com" className="flex items-center gap-2">
              <img
                src="https://flightpadi.com/wp-content/uploads/2023/12/flightpadi-Canvas-Banner-1000-x-250-px-300x75.png"
                alt="FlightPadi"
                className="h-10 object-contain"
              />
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map(item => (
              <a
                key={item.label}
                href={item.href}
                className="text-[#334155] hover:text-[#0284C7] transition-colors text-base font-semibold relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#0284C7] transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
              </a>
            ))}
            <div className="relative">
              <button
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                className="flex items-center text-[#334155] hover:text-[#0284C7] transition-colors text-base font-semibold relative group"
              >
                Resources
                <ChevronDown className="h-4 w-4 ml-1" />
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#0284C7] transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
              </button>
              {isResourcesOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 border border-gray-100">
                  {resourceItems.map(item => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block px-4 py-2 text-[#334155] hover:bg-blue-50 hover:text-[#0284C7] text-base font-semibold"
                  >
                    {item.label}
                  </a>
                ))}
                </div>
              )}
            </div>
          </nav>

          <div className="hidden md:block">
            <Link
              to="/"
              className="bg-[#010b52] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#010b52]/90 transition-colors"
            >
              Fly with Flightpadi
            </Link>
          </div>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-white border-t border-gray-100 shadow-lg md:hidden">
          <div className="px-4 py-2 space-y-1">
            {menuItems.map(item => (
             <a
               key={item.label}
               href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-[#334155] hover:bg-blue-50 hover:text-[#0284C7] transition-colors"
              >
               {item.label}
             </a>
            ))}
            <button
              onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
              className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium text-[#334155] hover:bg-blue-50 hover:text-[#0284C7] transition-colors"
            >
              Resources
              {mobileResourcesOpen ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>
            {mobileResourcesOpen && (
              <div className="pl-6 pb-2 space-y-1 bg-gray-50">
                {resourceItems.map(item => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-[#334155] hover:bg-blue-100 hover:text-[#0284C7] transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
