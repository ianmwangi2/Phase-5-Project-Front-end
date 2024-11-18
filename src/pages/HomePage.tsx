import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import ImpactMetrics from '../components/ImpactMetrics';
import FeaturedHomes from '../components/featuredhomes';
import { ArrowRight } from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Hero />
      <ImpactMetrics />
      <FeaturedHomes />
      
      {/* Call to Action */}
      <section className="bg-indigo-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Make a Difference Today
            </h2>
            <p className="text-gray-600 mb-8">
              Your support can transform lives. Join us in creating better futures for children in need.
            </p>
            <button 
              onClick={() => navigate('/donate')}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center mx-auto"
            >
              Start Donating
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;