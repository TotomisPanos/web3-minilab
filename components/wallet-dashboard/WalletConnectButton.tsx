'use client';


import { useState } from 'react';
import { ethers } from 'ethers';
import type { MetaMaskInpageProvider } from '@metamask/providers';

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}



interface Props {
  onConnect: (provider: ethers.BrowserProvider, address: string) => void;
}

export default function WalletConnectButton({ onConnect }: Props) {
  const [connecting, setConnecting] = useState(false);

  const connectWallet = async () => {
    setConnecting(true);
    try {
      if (!window.ethereum) {
        alert('MetaMask not detected');
        return;
      }

      const provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send('eth_requestAccounts', []);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();

      onConnect(provider, address);
    } catch (err) {
      console.error(err);
    } finally {
      setConnecting(false);
    }
  };

  return (
    <button
      onClick={connectWallet}
      disabled={connecting}
      className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
    >
      {connecting ? 'Connecting...' : 'Connect Wallet'}
    </button>
  );
}
