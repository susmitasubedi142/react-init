import React from 'react';
import { Link } from 'react-router-dom';

export function NewFooter() {
  return (
    <div className='bg-gray-300'>
      <footer className="from-blue-500 to-pink-500 py-5 text-gray-700 text-center">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-wrap justify-around items-start space-y-4 md:space-y-0 md:space-x-6">
        
        {/* Logo and Description */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <img src="images/logo.png" alt="NagarikApp Logo" className="w-16 h-16" />
          <p className="text-sm text-gray-700">
            NagarikApp - Your go-to app for all government  services at your fingertips.
          </p>
        </div>
        
        {/* Navigation Links */}
        <div className="space-y-2 text-center md:text-left">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="space-y-1">
            <li><Link to="/" className="text-gray-700 hover:text-yellow-500">Home</Link></li>
            <li><Link to="/services" className="text-gray-700 hover:text-yellow-500">Services</Link></li>
            <li><Link to="/news" className="text-gray-700 hover:text-yellow-500">News</Link></li>
            <li><Link to="/faq" className="text-gray-700 hover:text-yellow-500">FAQ</Link></li>
            <li><Link to="/privacy-policy" className="text-gray-700 hover:text-yellow-500">Privacy & Policy</Link></li>
            <li><Link to="/contact" className="text-gray-700 hover:text-yellow-500">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-2 text-center md:text-left">
          <h4 className="text-lg font-semibold">Contact Us</h4>
          <p className="text-sm text-gray-600">Email: info@sus.com</p>
          <p className="text-sm text-gray-600">Phone: +9779800000000</p>
          <p className="text-sm text-gray-600">Address: Kathmandu, Nepal</p>
        </div>

        {/* Social Media Links */}
        <div className="space-y-2 text-center md:text-left">
          <h4 className="text-lg font-semibold">Follow Us</h4>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#"><img src="images/aps.png" alt="App Store" className="w-24 h-12" /></a>
            <a href="#"><img src="images/gp.png" alt="Google Play" className="w-24 h-12" /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-200 py-2 mt-5">
        <p className="text-sm text-gray-700">&copy; 2024 NagarikApp. All Rights Reserved.</p>
      </div>
    </footer>
    </div>
  );
}
