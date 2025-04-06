
import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Helper to determine if a link is active
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === path;
    }
    // For other paths, check if the current path includes the path segment
    return location.pathname.includes(path);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-company-blue font-bold text-2xl">
            Shanthi Aishwarya uPVC Windows and Doors Ltd.
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors ${isActive('/') ? 'text-company-blue font-medium' : 'text-company-darkgray hover:text-company-blue'}`}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`transition-colors ${isActive('/products') ? 'text-company-blue font-medium' : 'text-company-darkgray hover:text-company-blue'}`}
            >
              Products
            </Link>
            <Link 
              to="/projects" 
              className={`transition-colors ${isActive('/projects') ? 'text-company-blue font-medium' : 'text-company-darkgray hover:text-company-blue'}`}
            >
              Projects
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors ${isActive('/about') ? 'text-company-blue font-medium' : 'text-company-darkgray hover:text-company-blue'}`}
            >
              About
            </Link>
            <Link 
              to="/#contact" 
              className="text-company-darkgray hover:text-company-blue transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-company-blue">
              <Phone className="h-4 w-4 mr-2" />
              <span className="font-medium">+1 (555) 123-4567</span>
            </div>
            <Link to="/#contact">
              <Button className="btn-primary">Book Appointment</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-company-darkgray hover:text-company-blue"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`transition-colors ${isActive('/') ? 'text-company-blue font-medium' : 'text-company-darkgray hover:text-company-blue'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className={`transition-colors ${isActive('/products') ? 'text-company-blue font-medium' : 'text-company-darkgray hover:text-company-blue'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                to="/projects" 
                className={`transition-colors ${isActive('/projects') ? 'text-company-blue font-medium' : 'text-company-darkgray hover:text-company-blue'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link 
                to="/about" 
                className={`transition-colors ${isActive('/about') ? 'text-company-blue font-medium' : 'text-company-darkgray hover:text-company-blue'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/#contact" 
                className="text-company-darkgray hover:text-company-blue transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex items-center text-company-blue pt-2">
                <Phone className="h-4 w-4 mr-2" />
                <span className="font-medium">+1 (555) 123-4567</span>
              </div>
              <Link to="/#contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="btn-primary w-full">Book Appointment</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
