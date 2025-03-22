'use client';

import {
  Wallet,
  Search,
  QrCode,
  Flame,
  Repeat,
} from 'lucide-react';
import ToolCard from './ToolCard';

const tools = [
  {
    href: '/wallet-dashboard',
    label: 'Wallet Dashboard',
    description: 'Connect your wallet and view balances, transactions, and network info.',
    icon: <Wallet size={24} className="text-blue-600" />,
  },
  {
    href: '/balance-checker',
    label: 'Balance Checker',
    description: 'Check ERC-20 token balances for any address.',
    icon: <Search size={24} className="text-green-600" />,
  },
  {
    href: '/ens-resolver',
    label: 'ENS Resolver',
    description: 'Resolve ENS names to addresses and vice versa.',
    icon: <QrCode size={24} className="text-purple-600" />,
  },
  {
    href: '/gas-estimator',
    label: 'Gas Estimator',
    description: 'Check current gas prices and estimate transaction costs.',
    icon: <Flame size={24} className="text-red-600" />,
  },
  {
    href: '/swap',
    label: 'Token Swap',
    description: 'Simulate or execute token swaps via Uniswap.',
    icon: <Repeat size={24} className="text-yellow-500" />,
  },
];

export default function ToolGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full px-4">
      {tools.map(tool => (
        <ToolCard key={tool.href} {...tool} />
      ))}
    </div>
  );
}
