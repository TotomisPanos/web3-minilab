'use client';

import { useState } from 'react';
import { ethers } from 'ethers';
import TokenBalanceForm from '@/components/balance-checker/TokenBalanceForm';
import TokenBalanceResult from '@/components/balance-checker/TokenBalanceResult';

const ERC20_ABI = [
  'function balanceOf(address owner) view returns (uint256)',
  'function decimals() view returns (uint8)',
  'function symbol() view returns (string)',
];

export default function BalanceCheckerPage() {
  const [balance, setBalance] = useState('');
  const [symbol, setSymbol] = useState('');

  
  const checkBalance = async (wallet: string, token: string) => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const contract = new ethers.Contract(token, ERC20_ABI, provider);
      
      const [rawBalance, decimals, sym] = await Promise.all([
        contract.balanceOf(wallet),
        contract.decimals(),
        contract.symbol(),
      ]);
      
      const formatted = ethers.formatUnits(rawBalance, decimals);
      setBalance(formatted);
      setSymbol(sym);
    } catch (err) {
      console.error(err);
      setBalance('');
      setSymbol('');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Token Balance Checker</h1>
      <TokenBalanceForm onCheck={checkBalance} />
      {balance && symbol && <TokenBalanceResult balance={balance} symbol={symbol} />}
    </div>
  );
}