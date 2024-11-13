import React, { useState } from 'react';
import { Phone, ArrowRight } from 'lucide-react';

interface MpesaPaymentProps {
  amount: number;
}

const MpesaPayment = ({ amount }: MpesaPaymentProps) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle M-Pesa payment logic here
  };

  return (
    <div className="space-y-6">
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-semibold text-green-800 mb-2">How M-Pesa Works</h4>
        <ol className="list-decimal list-inside text-sm text-green-700 space-y-2">
          <li>Enter your M-Pesa registered phone number</li>
          <li>You'll receive a prompt on your phone</li>
          <li>Enter your M-Pesa PIN to complete the payment</li>
        </ol>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            M-Pesa Phone Number
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="tel"
              pattern="[0-9]{10}"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="0712345678"
              className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-600">Amount:</span>
            <span className="font-semibold text-gray-900">KES {amount.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Transaction Fee:</span>
            <span className="font-semibold text-gray-900">KES 0</span>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center"
        >
          Pay with M-Pesa
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </form>
    </div>
  );
};

export default MpesaPayment;