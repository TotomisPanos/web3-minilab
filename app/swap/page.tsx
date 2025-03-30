'use client';

import TokenSwapForm from '@/components/swap/TokenSwapForm';

export default function TokenSwapPage() {
  const simulateRate = (from: string, to: string): number => {
    const rates: Record<string, number> = {
      'DAI-ETH': 0.0005,
      'ETH-DAI': 2000,
      'USDC-ETH': 0.00051,
      'ETH-USDC': 1950,
      'DAI-USDC': 1,
      'USDC-DAI': 1,
    };
    return rates[`${from}-${to}`] ?? 0;
  };

  return (
    <div className="max-w-xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold text-indigo-600 mb-4">Token Swap Simulator</h1>
      <TokenSwapForm simulateRate={simulateRate} />
    </div>
  );
}
