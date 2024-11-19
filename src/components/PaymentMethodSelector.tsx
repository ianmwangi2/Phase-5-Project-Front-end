import { CreditCard, Phone, Wallet } from 'lucide-react';

interface PaymentMethodSelectorProps {
  selectedMethod: string;
  onMethodSelect: (method: string) => void;
}

const PaymentMethodSelector = ({ selectedMethod, onMethodSelect }: PaymentMethodSelectorProps) => {
  const methods = [
    {
      id: 'card',
      name: 'Credit Card',
      icon: CreditCard,
      description: 'Pay securely with your credit or debit card'
    },
    {
      id: 'mpesa',
      name: 'M-Pesa',
      icon: Phone,
      description: 'Pay using M-Pesa mobile money'
    },
    {
      id: 'bank',
      name: 'Bank Transfer',
      icon: Wallet,
      description: 'Direct bank transfer to our account'
    }
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Payment Method</h3>
      <div className="grid gap-4">
        {methods.map((method) => (
          <button
            key={method.id}
            onClick={() => onMethodSelect(method.id)}
            className={`flex items-start p-4 border-2 rounded-lg w-full text-left transition-colors ${
              selectedMethod === method.id
                ? 'border-indigo-600 bg-indigo-50'
                : 'border-gray-200 hover:border-indigo-600 hover:bg-indigo-50'
            }`}
          >
            <method.icon className={`h-6 w-6 mr-4 ${
              selectedMethod === method.id ? 'text-indigo-600' : 'text-gray-400'
            }`} />
            <div>
              <div className="font-semibold text-gray-900">{method.name}</div>
              <div className="text-sm text-gray-600">{method.description}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PaymentMethodSelector;
