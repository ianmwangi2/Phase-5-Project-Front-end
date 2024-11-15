import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <Heart className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">KidsCare</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-indigo-600">Home</Link>
            <Link to="/donate" className="text-gray-600 hover:text-indigo-600">Donate</Link>
            <Link to="/about" className="text-gray-600 hover:text-indigo-600">About</Link>
            <Link to="/signup" className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-600 hover:text-indigo-600"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/donate"
                className="block px-3 py-2 text-gray-600 hover:text-indigo-600"
                onClick={() => setIsOpen(false)}
              >
                Donate
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-600 hover:text-indigo-600"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/signup"
                className="block px-3 py-2 text-indigo-600 hover:text-indigo-700 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;