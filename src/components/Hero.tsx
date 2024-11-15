import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SearchResults from './SearchResults';
import { homesData } from '../types';

const Hero = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);

  const filteredHomes = homesData.filter(home => 
    home.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    home.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  return (
    <div className="relative bg-indigo-600 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">Support Children's</span>
                <span className="block text-indigo-200">Homes & Orphanages</span>
              </h1>
              <p className="mt-3 text-base text-indigo-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Make a difference in children's lives by supporting local homes and orphanages. Every donation counts towards creating better futures.
              </p>
              
              <div className="mt-8 sm:mt-12">
                <form onSubmit={handleSearch} className="relative max-w-xl lg:max-w-lg">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setShowResults(e.target.value.length > 0);
                    }}
                    placeholder="Search for children's homes by location or name..."
                    className="w-full px-4 py-3 pl-4 pr-12 rounded-lg text-gray-900 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                  />
                  <button 
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-indigo-600 p-2 rounded-md text-white hover:bg-indigo-700"
                  >
                    <Search className="h-5 w-5" />
                  </button>

                  {showResults && searchQuery && (
                    <SearchResults 
                      results={filteredHomes} 
                      onClose={() => setShowResults(false)}
                      onSelect={(id) => {
                        navigate(`/home/${id}`);
                        setShowResults(false);
                        setSearchQuery('');
                      }}
                    />
                  )}
                </form>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuVmA6HWDXjGteAm3NBNfGb0cXLS5Huh1Gcw&s"
          alt="Children playing together"
        />
      </div>
    </div>
  );
};

export default Hero;