import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:justify-between space-y-4 md:space-y-0">
        {/* Brand */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-white">Women of Influence</h3>
          <p className="text-gray-300 text-sm">Empowering Stories, Inspiring Change</p>
        </div>

        {/* Navigation */}
        <nav className="flex space-x-6">
          <Link
            to="/"
            className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300 transition-colors text-sm"
          >
            Home
          </Link>
          <Link
            to="/stories"
            className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300 transition-colors text-sm"
          >
            Stories
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300 transition-colors text-sm"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300 transition-colors text-sm"
          >
            Contact
          </Link>
        </nav>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors"
            aria-label="Follow us on Twitter"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-600 transition-colors"
            aria-label="Connect on LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-400 transition-colors"
            aria-label="Follow us on Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-800 pt-4 text-center text-gray-400 text-sm">
        &copy; {currentYear} Women of Influence. All Rights Reserved.
        <div className="mt-2 text-gray-500">
          Powered by IntelliSync Solutions
        </div>
      </div>
    </footer>
  );
};

export default Footer;
