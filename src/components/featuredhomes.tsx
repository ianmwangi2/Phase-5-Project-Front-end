import { MapPin, Users, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { homesData } from '../types';

const FeaturedHomes = () => {
  const navigate = useNavigate();

  const handleDonate = (homeId: number) => {
    navigate('/donate', { state: { selectedHomeId: homeId } });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Children's Homes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homesData.map((home) => (
            <div key={home.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img
                src={home.image}
                alt={home.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{home.name}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{home.location}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <Users className="h-4 w-4 mr-2" />
                  <span>{home.children} children</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Current needs: {home.needs[0].category}
                </p>
                <div className="flex space-x-3">
                  <button 
                    onClick={() => navigate(`/home/${home.id}`)}
                    className="flex-1 bg-white border-2 border-indigo-600 text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-50 transition-colors"
                  >
                    View Details
                  </button>
                  <button 
                    onClick={() => handleDonate(home.id)}
                    className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center"
                  >
                    <Heart className="h-5 w-5 mr-2" />
                    Support
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedHomes;