'use client';

import { useState } from 'react';
import { isAddress } from 'ethers';

interface Props {
  onEstimate: (to: string, amountEth: string) => void;
}

export default function GasEstimateForm({ onEstimate }: Props) {
  const [to, setTo] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!isAddress(to)) {
      setError('Invalid destination address');
      return;
    }

    if (!amount || isNaN(+amount) || +amount <= 0) {
      setError('Invalid ETH amount');
      return;
    }

    onEstimate(to.trim(), amount.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">To Address</label>
        <input
          type="text"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          placeholder="0x..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">ETH Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          placeholder="0.01"
        />
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        Estimate Gas
      </button>
    </form>
  );
}
