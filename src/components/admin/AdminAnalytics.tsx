import { BarChart2, TrendingUp, AlertTriangle } from 'lucide-react';
import { HomeDetails } from '../../types';

interface AdminAnalyticsProps {
  homes: HomeDetails[];
}

const AdminAnalytics = ({ homes }: AdminAnalyticsProps) => {
  // Mock analytics data 
  const mockVisits = homes.map(home => ({
    id: home.id,
    name: home.name,
    visits: Math.floor(Math.random() * 1000),
  })).sort((a, b) => b.visits - a.visits);

  const mockDonationNeeds = homes.map(home => ({
    id: home.id,
    name: home.name,
    needsCount: home.needs.length,
    urgencyScore: Math.floor(Math.random() * 100),
  })).sort((a, b) => b.urgencyScore - a.urgencyScore);

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Analytics Dashboard</h2>

      {/* Most Visited Homes */}
      <div className="bg-white rounded-lg p-6">
        <div className="flex items-center mb-4">
          <TrendingUp className="h-6 w-6 text-indigo-600 mr-2" />
          <h3 className="text-xl font-semibold">Most Visited Homes</h3>
        </div>
        <div className="space-y-4">
          {mockVisits.slice(0, 5).map((home, index) => (
            <div key={home.id} className="flex items-center">
              <div className="w-8 text-gray-500">{index + 1}.</div>
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900">{home.name}</div>
                <div className="text-sm text-gray-500">{home.visits} visits</div>
              </div>
              <div className="w-1/3 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-indigo-600"
                  style={{
                    width: `${(home.visits / mockVisits[0].visits) * 100}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Homes Needing Urgent Support */}
      <div className="bg-white rounded-lg p-6">
        <div className="flex items-center mb-4">
          <AlertTriangle className="h-6 w-6 text-red-600 mr-2" />
          <h3 className="text-xl font-semibold">Homes Needing Urgent Support</h3>
        </div>
        <div className="space-y-4">
          {mockDonationNeeds.slice(0, 5).map((home, index) => (
            <div key={home.id} className="flex items-center">
              <div className="w-8 text-gray-500">{index + 1}.</div>
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900">{home.name}</div>
                <div className="text-sm text-gray-500">
                  {home.needsCount} urgent needs
                </div>
              </div>
              <div className="w-1/3 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-red-600"
                  style={{
                    width: `${(home.urgencyScore / 100) * 100}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Summary Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-indigo-50 p-6 rounded-lg">
          <div className="text-indigo-600 text-sm font-medium">Total Homes</div>
          <div className="text-3xl font-bold text-indigo-900 mt-2">
            {homes.length}
          </div>
        </div>
        <div className="bg-green-50 p-6 rounded-lg">
          <div className="text-green-600 text-sm font-medium">Total Children</div>
          <div className="text-3xl font-bold text-green-900 mt-2">
            {homes.reduce((acc, home) => acc + home.children, 0)}
          </div>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg">
          <div className="text-purple-600 text-sm font-medium">Success Stories</div>
          <div className="text-3xl font-bold text-purple-900 mt-2">
            {homes.reduce((acc, home) => acc + home.successStories, 0)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAnalytics;