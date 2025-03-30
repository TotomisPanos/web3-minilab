'use client';

import { useState, useEffect } from 'react';
import { ArrowDownUp } from 'lucide-react';



const tokens = ['DAI', 'USDC', 'ETH'];

interface Props {
  simulateRate: (from: string, to: string) => number;
}

export default function TokenSwapForm({ simulateRate }: Props) {
  const [fromToken, setFromToken] = useState('DAI');
  const [toToken, setToToken] = useState('ETH');
  const [amount, setAmount] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!amount || isNaN(+amount) || +amount <= 0 || fromToken === toToken) {
      setOutput('');
      return;
    }

    const rate = simulateRate(fromToken, toToken);
    const result = (parseFloat(amount) * rate).toFixed(6);
    setOutput(result);
  }, [amount, fromToken, toToken, simulateRate]);

  const swapTokens = () => {
    const temp = fromToken;
    setFromToken(toToken);
    setToToken(temp);
  };

  return (
    <form className="space-y-4 mt-4 bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-md border border-zinc-200 dark:border-zinc-700">
      <div>
        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">From</label>
        <div className="flex items-center gap-2">
          <select
            value={fromToken}
            onChange={(e) => setFromToken(e.target.value)}
            className="border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 dark:text-white rounded-md p-2"
          >
            {tokens.map((token) => (
              <option key={token}>{token}</option>
            ))}
          </select>
          <input
            type="number"
            step="any"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="flex-1 border border-zinc-300 dark:border-zinc-700 rounded-md p-2 text-right bg-white dark:bg-zinc-800 dark:text-white"
            placeholder="0.0"
          />
        </div>
      </div>

      <div className="flex justify-center">
        <button
          type="button"
          onClick={swapTokens}
          className="rounded-full bg-zinc-100 dark:bg-zinc-800 p-2 hover:bg-zinc-200 dark:hover:bg-zinc-700"
          title="Swap tokens"
        >
          <ArrowDownUp className="text-zinc-600 dark:text-zinc-400" />
        </button>
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">To</label>
        <div className="flex items-center gap-2">
          <select
            value={toToken}
            onChange={(e) => setToToken(e.target.value)}
            className="border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 dark:text-white rounded-md p-2"
          >
            {tokens.map((token) => (
              <option key={token}>{token}</option>
            ))}
          </select>
          <input
            disabled
            value={output}
            placeholder="—"
            className="flex-1 border border-zinc-200 dark:border-zinc-700 rounded-md p-2 bg-zinc-50 dark:bg-zinc-800 text-right text-zinc-600 dark:text-zinc-400 cursor-not-allowed"
          />
        </div>
        {fromToken !== toToken && output && (
          <p className="text-xs text-indigo-600 mt-1 text-right">
            1 {fromToken} ≈ {(parseFloat(output) / parseFloat(amount || '1')).toFixed(6)} {toToken}
          </p>
        )}
      </div>

      {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}

      <button
        type="button"
        className="w-full mt-4 px-4 py-3 rounded-xl bg-indigo-600 text-white text-base font-semibold hover:bg-indigo-700 transition"
        onClick={() => setError('This is just a simulator. Swap not executed.')}
      >
        Simulate Swap
      </button>
    </form>
  );
}
