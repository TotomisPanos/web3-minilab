'use client';

import ToolGrid from '@/components/home/ToolGrid';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-8">
      <div className="mt-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700">Welcome to Web3-MiniLab</h1>
        <p className="mt-4 text-lg text-gray-700 max-w-xl mx-auto">
          Your personal Ethereum toolkit. Quickly test, explore, and interact with on-chain data.
        </p>
      </div>
      <ToolGrid />
    </div>
  );
}
