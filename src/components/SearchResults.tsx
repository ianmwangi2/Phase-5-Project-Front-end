import { useEffect, useRef } from 'react';
import { MapPin, Users } from 'lucide-react';
import { HomeDetails } from '../types';

interface SearchResultsProps {
  results: HomeDetails[];
  onClose: () => void;
  onSelect: (id: number) => void;
}

const SearchResults = ({ results, onClose, onSelect }: SearchResultsProps) => {
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (resultsRef.current && !resultsRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  if (results.length === 0) {
    return (
      <div
        ref={resultsRef}
        className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg overflow-hidden z-50"
      >
        <div className="p-4 text-gray-500 text-center">
          No children's homes found matching your search.
        </div>
      </div>
    );
  }

  return (
    <div
      ref={resultsRef}
      className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg overflow-hidden z-50 max-h-96 overflow-y-auto"
    >
      {results.map((home) => (
        <button
          key={home.id}
          onClick={() => onSelect(home.id)}
          className="w-full text-left p-4 hover:bg-gray-50 border-b border-gray-100 last:border-0 transition-colors"
        >
          <div className="flex items-center">
            <img
              src={home.image}
              alt={home.name}
              className="h-12 w-12 rounded object-cover"
            />
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-900">{home.name}</h3>
              <div className="flex items-center mt-1 space-x-4">
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="h-4 w-4 mr-1" />
                  {home.location}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Users className="h-4 w-4 mr-1" />
                  {home.children} children
                </div>
              </div>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default SearchResults;
