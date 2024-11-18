import React from 'react';
import { Home, Users, Heart, Star } from 'lucide-react';

const metrics = [
  {
    icon: Home,
    value: '50+',
    label: "Children's Homes",
  },
  {
    icon: Users,
    value: '1,000+',
    label: 'Children Supported',
  },
  {
    icon: Heart,
    value: '10K+',
    label: 'Active Donors',
  },
  {
    icon: Star,
    value: '95%',
    label: 'Success Rate',
  },
];

const ImpactMetrics = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-full mb-4">
                <metric.icon className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
              <div className="text-gray-600">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;