
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import siteData from '../data/siteData.json';
import { Menu, X, ChevronDown } from 'lucide-react';
import PageLoader from './PageLoader';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  
  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to top and show loader on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
    
    // Show loader
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // Short timeout for better UX
    
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      {loading && <PageLoader />}
      
      {/* Header */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 header-animation ${
          isScrolled || location.pathname !== '/' 
            ? 'bg-white shadow-md py-2' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">
                {siteData.siteInfo.name}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              {siteData.navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors link-underline ${
                    location.pathname === item.path
                      ? 'text-primary font-semibold'
                      : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 animate-slide-down">
            <div className="container mx-auto px-4 py-3">
              <nav className="flex flex-col space-y-3">
                {siteData.navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`text-sm font-medium py-2 px-3 rounded-md transition-colors ${
                      location.pathname === item.path
                        ? 'bg-primary/10 text-primary font-semibold'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow animate-fade-in">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* College Info */}
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold mb-4">{siteData.siteInfo.name}</h3>
              <p className="mb-4">{siteData.siteInfo.slogan}</p>
              <address className="not-italic mb-4">
                <p>{siteData.siteInfo.address}</p>
                <p className="mt-2">
                  Phone: <a href={`tel:${siteData.siteInfo.phone}`} className="hover:underline">
                    {siteData.siteInfo.phone}
                  </a>
                </p>
                <p className="mt-1">
                  Email: <a href={`mailto:${siteData.siteInfo.email}`} className="hover:underline">
                    {siteData.siteInfo.email}
                  </a>
                </p>
              </address>
              <div className="flex space-x-4 mt-4">
                {siteData.siteInfo.socialLinks.map((social) => (
                  <a 
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent"
                    aria-label={social.name}
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {siteData.navigation.map((item) => (
                  <li key={item.name}>
                    <Link to={item.path} className="hover:underline">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Programs</h3>
              <ul className="space-y-2">
                <li><Link to="/courses" className="hover:underline">B.Tech CSE</Link></li>
                <li><Link to="/courses" className="hover:underline">B.Tech IT</Link></li>
                <li><Link to="/courses" className="hover:underline">B.Tech AIML</Link></li>
                <li><Link to="/courses" className="hover:underline">B.Tech ESE</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} {siteData.siteInfo.name}. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
