'use client';

import { useEffect, useState } from 'react';
import { ethers } from 'ethers';

interface Props {
  provider: ethers.BrowserProvider;
  address: string;
}

export default function WalletInfo({ provider, address }: Props) {
  const [balance, setBalance] = useState<string>('');
  const [network, setNetwork] = useState<string>('');

  useEffect(() => {
    const fetchInfo = async () => {
      const bal = await provider.getBalance(address);
      setBalance(ethers.formatEther(bal));

      const net = await provider.getNetwork();
      setNetwork(net.name);
    };

    fetchInfo();
  }, [provider, address]);

  return (
    <div className="mt-6 p-4  shadow rounded-lg text-left space-y-2">
      <div><span className="font-semibold">Address:</span> {address}</div>
      <div><span className="font-semibold">Network:</span> {network}</div>
      <div><span className="font-semibold">ETH Balance:</span> {balance} ETH</div>
    </div>
  );
}
