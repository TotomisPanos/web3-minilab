'use client';

interface Props {
  gasLimit: string;
  estimatedCostEth: string;
}

export default function GasEstimateResult({ gasLimit, estimatedCostEth }: Props) {
  return (
    <div className="mt-6 p-4 rounded-lg text-left space-y-2">
      <div><strong>Estimated Gas Limit:</strong> {gasLimit} units</div>
      <div><strong>Estimated Transaction Cost:</strong> {estimatedCostEth} ETH</div>
    </div>
  );
}
