'use client';

import { useState } from 'react';
import { ethers } from 'ethers';
import ENSResolverForm from '@/components/ens-resolver/ENSResolverForm';
import ENSResolverResult from '@/components/ens-resolver/ENSResolverResult';

export default function ENSResolverPage() {
  const [result, setResult] = useState<string | null>(null);
  const [query, setQuery] = useState('');
  const [type, setType] = useState<'ens' | 'address' | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleResolve = async (input: string, resolveType: 'ens' | 'address') => {
    setQuery(input);
    setType(resolveType);
    setResult(null);
    setError(null);

    try {
      if (!window.ethereum) {
        setError('No Ethereum provider found. Please install MetaMask.');
        return;
      }
      const provider = new ethers.BrowserProvider(window.ethereum);
      const network = await provider.getNetwork();
      
      

      if (Number(network.chainId) !== 1) {
        setError(`ENS resolution requires Ethereum Mainnet. Current network: ${network.name}`);
        return;
      }

      let res: string | null = null;
      if (resolveType === 'ens') {
        res = await provider.resolveName(input);
      } else {
        res = await provider.lookupAddress(input);
      }

      setResult(res);
    } catch (err) {
      console.error(err);
      setError('Failed to resolve. Check your input and network connection.');
      setResult(null);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">ENS Resolver</h1>
      <ENSResolverForm onResolve={handleResolve} />
      {error && <div className="mt-4 text-red-600 text-sm">{error}</div>}
      {type && query && !error && (
        <ENSResolverResult query={query} result={result} type={type} />
      )}
    </div>
  );
}
