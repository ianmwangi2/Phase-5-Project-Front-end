import React, { useState } from "react";
import { X, Calendar, Clock, Users, MapPin } from "lucide-react";
import { HomeDetails } from "../types";

interface ScheduleVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
  home: HomeDetails | null;
}

const ScheduleVisitModal = ({
  isOpen,
  onClose,
  home,
}: ScheduleVisitModalProps) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [visitors, setVisitors] = useState("1");
  const [purpose, setPurpose] = useState("");

  if (!isOpen || !home) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle visit scheduling logic here
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Schedule a Visit
          </h2>

          <div className="mb-6">
            <div className="flex items-center text-gray-600 mb-2">
              <MapPin className="h-4 w-4 mr-2" />
              <span>{home.name}</span>
            </div>
            <div className="text-sm text-gray-500">
              Available hours: {home.visitingHours["Monday-Friday"]}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Visit Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Visit Time
              </label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Number of Visitors
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={visitors}
                  onChange={(e) => setVisitors(e.target.value)}
                  className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Purpose of Visit
              </label>
              <textarea
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                rows={3}
                placeholder="Please describe the purpose of your visit..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Schedule Visit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ScheduleVisitModal;
