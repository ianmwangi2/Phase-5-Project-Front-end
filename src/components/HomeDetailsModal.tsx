import { useState } from "react";
import {
  MapPin,
  Users,
  Heart,
  Calendar,
  Phone,
  Mail,
  Clock,
  Shield,
  ArrowLeft,
} from "lucide-react";
import { HomeDetails } from "../types";
import ScheduleVisitModal from "./ScheduleVisitModal";

interface HomeDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  home: HomeDetails | null;
}

const HomeDetailsModal = ({ isOpen, onClose, home }: HomeDetailsModalProps) => {
  const [showScheduleVisit, setShowScheduleVisit] = useState(false);

  if (!isOpen || !home) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
        <div className="bg-white rounded-lg max-w-4xl w-full relative my-8">
          <div className="absolute left-4 top-4 z-10">
            <button
              onClick={onClose}
              className="flex items-center text-white hover:text-gray-200 transition-colors bg-black bg-opacity-30 rounded-lg px-4 py-2"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Homes
            </button>
          </div>

          <div className="relative h-64 rounded-t-lg overflow-hidden">
            <img
              src={home.image}
              alt={home.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <h2 className="text-3xl font-bold text-white">{home.name}</h2>
              <div className="flex items-center text-white mt-2">
                <MapPin className="h-4 w-4 mr-2" />
                <span>{home.location}</span>
              </div>
            </div>
          </div>

          <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">About</h3>
                <p className="text-gray-600">{home.description}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Current Needs</h3>
                <div className="grid grid-cols-2 gap-4">
                  {home.needs.map((need, index) => (
                    <div key={index} className="bg-indigo-50 p-4 rounded-lg">
                      <div className="font-semibold text-indigo-900">
                        {need.category}
                      </div>
                      <div className="text-sm text-indigo-700 mt-1">
                        {need.details}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Visiting Hours</h3>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(home.visitingHours).map(([day, hours]) => (
                    <div key={day} className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-gray-400" />
                      <span className="text-gray-600">
                        <span className="font-medium">{day}:</span> {hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">
                  Quick Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-indigo-600 mr-3" />
                    <div>
                      <div className="font-medium">Children</div>
                      <div className="text-gray-600">
                        {home.children} residents
                      </div>
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
                      <div className="text-gray-600">
                        {home.successStories}+ children
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-gray-600">{home.contact.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-gray-600">{home.contact.email}</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center">
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
      </div>

      <ScheduleVisitModal
        isOpen={showScheduleVisit}
        onClose={() => setShowScheduleVisit(false)}
        home={home}
      />
    </>
  );
};

export default HomeDetailsModal;
