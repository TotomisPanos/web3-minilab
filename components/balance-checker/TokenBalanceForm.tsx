'use client';

import { useState } from 'react';
import { ethers } from 'ethers';

interface Props {
  onCheck: (wallet: string, token: string) => void;
}

const predefinedTokens = [
  {
    label: 'Lido Staked Ether (Mainnet)',
    address: '0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84',
  },
  {
    label: 'Movement (Mainnet)',
    address: '0x3073f7aAA4DB83f95e9FFf17424F71D4751a3073',
  },
  {
    label: 'Coinbase Wrapped BTC (Base)',
    address: '0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf',
  },
  {
    label: 'Custom Token',
    address: '',
  },
];

export default function TokenBalanceForm({ onCheck }: Props) {
  const [wallet, setWallet] = useState('');
  const [selectedToken, setSelectedToken] = useState(predefinedTokens[0].address);
  const [customToken, setCustomToken] = useState('');
  const [errors, setErrors] = useState<{ wallet?: string; token?: string }>({});

  const isCustom = selectedToken === '';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors: { wallet?: string; token?: string } = {};
    if (!ethers.isAddress(wallet)) {
      validationErrors.wallet = 'Invalid wallet address';
    }

    const tokenToUse = isCustom ? customToken : selectedToken;

    if (!ethers.isAddress(tokenToUse)) {
      validationErrors.token = 'Invalid token address';
    }

    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    onCheck(wallet.trim(), tokenToUse.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-500">Wallet Address</label>
        <input
          type="text"
          value={wallet}
          onChange={(e) => setWallet(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          placeholder="0x..."
        />
        {errors.wallet && <p className="text-sm text-red-600 mt-1">{errors.wallet}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-500">Select Token</label>
        <select
          value={selectedToken}
          onChange={(e) => setSelectedToken(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        >
          {predefinedTokens.map((token) => (
            <option key={token.label} value={token.address} className="p-2 bg-gray-800 text-white">
              {token.label}
            </option>
          ))}
        </select>
      </div>

      {isCustom && (
        <div>
          <label className="block text-sm font-medium text-gray-700">Custom Token Address</label>
          <input
            type="text"
            value={customToken}
            onChange={(e) => setCustomToken(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            placeholder="0x..."
          />
          {errors.token && <p className="text-sm text-red-600 mt-1">{errors.token}</p>}
        </div>
      )}

      <button
        type="submit"
        className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        Check Balance
      </button>
    </form>
  );
}
