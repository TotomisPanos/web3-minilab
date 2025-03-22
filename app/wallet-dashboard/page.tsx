'use client';

import { useState } from 'react';
import { ethers } from 'ethers';
import WalletConnectButton from '@/components/wallet-dashboard/WalletConnectButton'
import WalletInfo from '@/components/wallet-dashboard/WalletInfo';

export default function WalletDashboardPage() {
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);
  const [address, setAddress] = useState<string>('');

  const handleConnect = (prov: ethers.BrowserProvider, addr: string) => {
    setProvider(prov);
    setAddress(addr);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Wallet Dashboard</h1>
      {!provider ? (
        <WalletConnectButton onConnect={handleConnect} />
      ) : (
        <WalletInfo provider={provider} address={address} />
      )}
    </div>
  );
}
