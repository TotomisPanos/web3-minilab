'use client';

import { useState } from 'react';
import { ethers } from 'ethers';

interface Props {
  onResolve: (query: string, type: 'ens' | 'address') => void;
}

export default function ENSResolverForm({ onResolve }: Props) {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = input.trim();

    if (query.endsWith('.eth')) {
      onResolve(query, 'ens');
      setError('');
    } else if (ethers.isAddress(query)) {
      onResolve(query, 'address');
      setError('');
    } else {
      setError('Invalid ENS name or Ethereum address');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-500">
          ENS Name or Address
        </label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="vitalik.eth or 0x..."
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
        {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
      </div>
      <button
        type="submit"
        className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        Resolve
      </button>
    </form>
  );
}
