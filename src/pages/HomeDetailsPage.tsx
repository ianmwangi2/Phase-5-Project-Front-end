import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, Users, Heart, Calendar, Phone, Mail, Clock, Shield, ArrowLeft } from 'lucide-react';
import { homesData } from '../types';
import ScheduleVisitModal from '../components/ScheduleVisitModal';

const HomeDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showScheduleVisit, setShowScheduleVisit] = useState(false);
  
  const home = homesData.find(h => h.id === Number(id));

  if (!home) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Home Not Found</h2>
          <button
            onClick={() => navigate('/')}
            className="text-indigo-600 hover:text-indigo-500 font-medium flex items-center justify-center"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-96">
        <button
          onClick={() => navigate('/')}
          className="absolute left-4 top-4 z-10 flex items-center text-white hover:text-gray-200 transition-colors bg-black bg-opacity-30 rounded-lg px-4 py-2"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Homes
        </button>
        
        <img
          src={home.image}
          alt={home.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-white">{home.name}</h1>
            <div className="flex items-center text-white mt-2">
              <MapPin className="h-5 w-5 mr-2" />
              <span>{home.location}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-semibold mb-4">About</h2>
              <p className="text-gray-600 leading-relaxed">{home.description}</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-semibold mb-4">Current Needs</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {home.needs.map((need, index) => (
                  <div key={index} className="bg-indigo-50 p-4 rounded-lg">
                    <div className="font-semibold text-indigo-900">{need.category}</div>
                    <div className="text-sm text-indigo-700 mt-1">{need.details}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-semibold mb-4">Visiting Hours</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(home.visitingHours).map(([day, hours]) => (
                  <div key={day} className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-gray-400" />
                    <span className="text-gray-600">
                      <span className="font-medium">{day}:</span> {hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4">Quick Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-indigo-600 mr-3" />
                  <div>
                    <div className="font-medium">Children</div>
                    <div className="text-gray-600">{home.children} residents</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-indigo-600 mr-3" />
                  <div>
                    <div className="font-medium">Established</div>
                    <div className="text-gray-600">{home.established}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Heart className="h-5 w-5 text-indigo-600 mr-3" />
                  <div>
                    <div className="font-medium">Success Stories</div>
                    <div className="text-gray-600">{home.successStories}+ children</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-gray-600">{home.contact.phone}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-gray-600">{home.contact.email}</span>
                </div>
              </div>
            </div>

            <button 
              onClick={() => navigate('/donate')}
              className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center"
            >
              <Heart className="h-5 w-5 mr-2" />
              Support This Home
            </button>
            
            <button
              onClick={() => setShowScheduleVisit(true)}
              className="w-full bg-white border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors flex items-center justify-center"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Schedule Visit
            </button>
          </div>
        </div>
      </div>

      <ScheduleVisitModal
        isOpen={showScheduleVisit}
        onClose={() => setShowScheduleVisit(false)}
        home={home}
      />
    </div>
  );
};

export default HomeDetailsPage;
