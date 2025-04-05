
import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-company-blue font-bold text-2xl">
            WindowWise
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-company-darkgray hover:text-company-blue transition-colors">
              Home
            </Link>
            <Link to="/#products" className="text-company-darkgray hover:text-company-blue transition-colors">
              Products
            </Link>
            <Link to="/#projects" className="text-company-darkgray hover:text-company-blue transition-colors">
              Projects
            </Link>
            <Link to="/#about" className="text-company-darkgray hover:text-company-blue transition-colors">
              About
            </Link>
            <Link to="/#contact" className="text-company-darkgray hover:text-company-blue transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-company-blue">
              <Phone className="h-4 w-4 mr-2" />
              <span className="font-medium">+1 (555) 123-4567</span>
            </div>
            <Button className="btn-primary">Book Appointment</Button>
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
                className="text-company-darkgray hover:text-company-blue transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/#products" 
                className="text-company-darkgray hover:text-company-blue transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                to="/#projects" 
                className="text-company-darkgray hover:text-company-blue transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link 
                to="/#about" 
                className="text-company-darkgray hover:text-company-blue transition-colors"
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
              <Button className="btn-primary w-full">Book Appointment</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
