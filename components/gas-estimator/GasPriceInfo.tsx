'use client';

import { useEffect, useState } from 'react';
import { BrowserProvider, formatUnits } from 'ethers';

export default function GasPriceInfo() {
  const [gasPrice, setGasPrice] = useState<string | null>(null);

  useEffect(() => {
    const fetchGasPrice = async () => {
      if (typeof window !== 'undefined' && window.ethereum) {
        const provider = new BrowserProvider(window.ethereum);
        const feeData = await provider.getFeeData();
        if (feeData.gasPrice) {
          setGasPrice(formatUnits(feeData.gasPrice, 'gwei'));
        }
      } else {
        setGasPrice(null);
      }
    };
    fetchGasPrice();
  }, []);

  return (
    <div className="p-4 rounded-lg mt-4">
      <div className="text-lg font-semibold text-gray-500">
        <p>Current Gas Price: <span>{gasPrice ? <span className="text-lg font-semibold text-indigo-600">{`${gasPrice} Gwei`}</span> : 'Loading...'}</span></p>
      </div>
    </div>
  );
}
