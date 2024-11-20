import { Heart, Users, Globe, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">About Us</h1>
          
          <div className="prose prose-lg mx-auto mb-12">
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We are dedicated to improving the lives of children in need across Kenya. Our platform connects generous donors with verified children's homes and orphanages,ensuring that every contribution makes a meaningful impact.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Since our establishment, we have helped thousands of children access better education, healthcare, and opportunities for a brighter future. We believe in transparency, accountability, and the power of community support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <Heart className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To provide every child with the care, support, and opportunities they deserve by connecting caring donors with trusted children's homes.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <Globe className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Vision</h3>
              <p className="text-gray-600">
                A world where every child has access to quality care, education, and the chance to reach their full potential.
              </p>
            </div>
          </div>

          <div className="bg-indigo-50 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <Shield className="h-6 w-6 text-indigo-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Transparency</h3>
                  <p className="text-gray-600">
                    We ensure complete transparency in how donations are used and their impact.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="h-6 w-6 text-indigo-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Community</h3>
                  <p className="text-gray-600">
                    We believe in the power of community support and collective action.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Want to Make a Difference?</h2>
            <button 
              onClick={() => navigate('/donate')}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors inline-flex items-center"
            >
              <Heart className="h-5 w-5 mr-2" />
              Start Donating
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
