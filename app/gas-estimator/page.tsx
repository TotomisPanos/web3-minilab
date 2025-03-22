'use client';

import { useState } from 'react';
import { BrowserProvider, parseUnits, formatEther } from 'ethers';
import GasPriceInfo from '@/components/gas-estimator/GasPriceInfo';
import GasEstimateForm from '@/components/gas-estimator/GasEstimateForm';
import GasEstimateResult from '@/components/gas-estimator/GasEstimateResult';

export default function GasEstimatorPage() {
  const [gasLimit, setGasLimit] = useState('');
  const [costEth, setCostEth] = useState('');

  const estimate = async (to: string, amountEth: string) => {
    const provider = new BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const value = parseUnits(amountEth, 'ether');

    const gas = await provider.estimateGas({
      to,
      value,
      from: await signer.getAddress(),
    });

    const feeData = await provider.getFeeData();
    const gasPrice = feeData.gasPrice ?? BigInt(0);
    const totalCost = gasPrice * gas;

    setGasLimit(gas.toString());
    setCostEth(formatEther(totalCost));
  };

  return (
    <div className="max-w-xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Gas Estimator</h1>
      <GasPriceInfo />
      <GasEstimateForm onEstimate={estimate} />
      {gasLimit && costEth && (
        <GasEstimateResult gasLimit={gasLimit} estimatedCostEth={costEth} />
      )}
    </div>
  );
}
