import { Copy, Wallet } from 'lucide-react';

interface BankTransferProps {
  amount: number;
}

const BankTransfer = ({ amount }: BankTransferProps) => {
  const bankDetails = {
    bankName: 'Kenya Commercial Bank',
    accountName: "Children's Care Initiative",
    accountNumber: '1234567890',
    branchCode: '01100',
    swiftCode: 'KCBLKENX'
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-semibold text-blue-800 mb-2">Bank Transfer Instructions</h4>
        <ol className="list-decimal list-inside text-sm text-blue-700 space-y-2">
          <li>Copy the account details below</li>
          <li>Log in to your bank's platform</li>
          <li>Make a transfer using these details</li>
          <li>Save your transaction reference</li>
        </ol>
      </div>

      <div className="space-y-4">
        {Object.entries(bankDetails).map(([key, value]) => (
          <div key={key} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <div>
              <div className="text-sm text-gray-600">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </div>
              <div className="font-medium text-gray-900">{value}</div>
            </div>
            <button
              onClick={() => copyToClipboard(value)}
              className="p-2 text-gray-500 hover:text-gray-700"
            >
              <Copy className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-600">Amount to Transfer:</span>
          <span className="font-semibold text-gray-900">KES {amount.toLocaleString()}</span>
        </div>
      </div>

      <button
        type="button"
        className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center"
      >
        <Wallet className="h-5 w-5 mr-2" />
        I've Completed the Transfer
      </button>
    </div>
  );
};

export default BankTransfer;
