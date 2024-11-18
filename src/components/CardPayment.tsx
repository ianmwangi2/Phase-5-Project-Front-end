import React from 'react';
import { CreditCard, Calendar, Lock } from 'lucide-react';

interface CardPaymentProps {
  amount: number;
}

const CardPayment = ({ amount }: CardPaymentProps) => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Card Number
          </label>
          <div className="relative">
            <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="1234 5678 9012 3456"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Expiry Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="MM/YY"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              CVC
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="123"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-600">Amount:</span>
          <span className="font-semibold text-gray-900">KES {amount.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Processing Fee:</span>
          <span className="font-semibold text-gray-900">KES 0</span>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center"
      >
        <CreditCard className="h-5 w-5 mr-2" />
        Complete Payment
      </button>
    </div>
  );
};

export default CardPayment;