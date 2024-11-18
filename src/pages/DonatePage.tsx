import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import PaymentMethodSelector from '../components/PaymentMethodSelector';
import MpesaPayment from '../components/MpesaPayment';
import CardPayment from '../components/CardPayment';
import BankTransfer from '../components/BankTransfer';
import { homesData } from '../types';

const DonatePage = () => {
  const location = useLocation();
  const selectedHomeId = location.state?.selectedHomeId;
  
  const [amount, setAmount] = useState<number>(1000);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [donationType, setDonationType] = useState('one-time');
  const [selectedHome, setSelectedHome] = useState(
    selectedHomeId ? homesData.find(h => h.id === selectedHomeId) : null
  );

  const renderPaymentForm = () => {
    switch (paymentMethod) {
      case 'mpesa':
        return <MpesaPayment amount={amount} />;
      case 'bank':
        return <BankTransfer amount={amount} />;
      default:
        return <CardPayment amount={amount} />;
    }
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Make a Donation</h1>
          
          {selectedHome && (
            <div className="bg-indigo-50 p-4 rounded-lg mb-8">
              <div className="flex items-center">
                <img
                  src={selectedHome.image}
                  alt={selectedHome.name}
                  className="h-16 w-16 rounded-lg object-cover"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">{selectedHome.name}</h3>
                  <p className="text-gray-600">{selectedHome.location}</p>
                </div>
              </div>
            </div>
          )}
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            {/* Donation Type Selection */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {['one-time', 'monthly', 'annual'].map((type) => (
                <button
                  key={type}
                  onClick={() => setDonationType(type)}
                  className={`p-6 border-2 rounded-lg text-center transition-colors ${
                    donationType === type
                      ? 'border-indigo-600 bg-indigo-50'
                      : 'border-gray-200 hover:border-indigo-600 hover:bg-indigo-50'
                  }`}
                >
                  <Heart className={`h-8 w-8 mx-auto mb-3 ${
                    donationType === type ? 'text-indigo-600' : 'text-gray-400'
                  }`} />
                  <div className="font-semibold text-gray-900">
                    {type === 'one-time' ? 'One-time' : type === 'monthly' ? 'Monthly' : 'Annual'}
                  </div>
                </button>
              ))}
            </div>

            {/* Amount Selection */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Select Amount (KES)
              </label>
              <div className="grid grid-cols-3 gap-4 mb-4">
                {[1000, 2000, 5000].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setAmount(preset)}
                    className={`py-2 px-4 border-2 rounded-lg text-center transition-colors ${
                      amount === preset
                        ? 'border-indigo-600 bg-indigo-50'
                        : 'border-gray-200 hover:border-indigo-600 hover:bg-indigo-50'
                    }`}
                  >
                    KES {preset.toLocaleString()}
                  </button>
                ))}
              </div>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                placeholder="Custom amount"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Payment Method Selection */}
            <PaymentMethodSelector
              selectedMethod={paymentMethod}
              onMethodSelect={setPaymentMethod}
            />

            {/* Payment Form */}
            <div className="mt-8">
              {renderPaymentForm()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;