'use client';

interface Props {
  balance: string;
  symbol: string;
}

export default function TokenBalanceResult({ balance, symbol }: Props) {
  return (
    <div className="mt-6 p-6 text-left">
      <div className="text-2xl font-bold text-white">
      Token Balance: <span className="text-indigo-600">{balance}</span> {symbol}
      </div>
    </div>
  );
}
