
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-company-blue text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">WindowWise</h3>
            <p className="mb-6">
              Premium uPVC windows and doors for residential, commercial, and institutional projects. 
              Energy efficient, durable, and custom-designed for all your needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-company-lightblue">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-company-lightblue">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-company-lightblue">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-company-lightblue">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-company-lightblue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#products" className="hover:text-company-lightblue transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/#projects" className="hover:text-company-lightblue transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/#about" className="hover:text-company-lightblue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="hover:text-company-lightblue transition-colors">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Our Products</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-company-lightblue transition-colors">
                  Casement Windows
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-company-lightblue transition-colors">
                  Sliding Windows
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-company-lightblue transition-colors">
                  Tilt & Turn Windows
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-company-lightblue transition-colors">
                  Entry Doors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-company-lightblue transition-colors">
                  Sliding Doors
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                <span>123 Window Street, Suite 456<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>info@windowwise.com</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                <span>
                  Monday - Friday: 8:00am - 6:00pm<br />
                  Saturday: 9:00am - 4:00pm<br />
                  Sunday: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-white/20 text-center md:text-left md:flex md:justify-between md:items-center">
          <p>&copy; {currentYear} WindowWise. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex justify-center md:justify-end space-x-6">
              <li>
                <a href="#" className="hover:text-company-lightblue text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-company-lightblue text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-company-lightblue text-sm">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
