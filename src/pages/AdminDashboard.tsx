import React, { useState } from 'react';
import { Users, Home, BarChart2, Plus, Edit, Trash2, Eye } from 'lucide-react';
import { homesData, HomeDetails } from '../types';
import AdminUserManagement from '../components/admin/AdminUserManagement';
import AdminHomesList from '../components/admin/AdminHomesList';
import AdminAnalytics from '../components/admin/AdminAnalytics';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('homes');
  const [homes, setHomes] = useState<HomeDetails[]>(homesData);

  const handleDeleteHome = (id: number) => {
    setHomes(homes.filter(home => home.id !== id));
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'users':
        return <AdminUserManagement />;
      case 'analytics':
        return <AdminAnalytics homes={homes} />;
      default:
        return <AdminHomesList homes={homes} onDelete={handleDeleteHome} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64 space-y-2">
            <button
              onClick={() => setActiveTab('homes')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'homes'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-indigo-50'
              }`}
            >
              <Home className="h-5 w-5" />
              <span>Children's Homes</span>
            </button>
            <button
              onClick={() => setActiveTab('users')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'users'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-indigo-50'
              }`}
            >
              <Users className="h-5 w-5" />
              <span>User Management</span>
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'analytics'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-indigo-50'
              }`}
            >
              <BarChart2 className="h-5 w-5" />
              <span>Analytics</span>
            </button>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;