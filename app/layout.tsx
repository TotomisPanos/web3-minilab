'use client';

import './globals.css';
import Link from 'next/link';
import { useState } from 'react';
import { ReactNode } from 'react';
import { Menu, X } from 'lucide-react'; // uses lucide icons, can swap with Heroicons or others

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/wallet-dashboard', label: 'Wallet Dashboard' },
  { href: '/balance-checker', label: 'Balance Checker' },
  { href: '/ens-resolver', label: 'ENS Resolver' },
  { href: '/gas-estimator', label: 'Gas Estimator' },
  { href: '/swap', label: 'Token Swap' },
];

export default function RootLayout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 text-gray-900">
        <header className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="text-xl font-bold text-blue-600">Web3-MiniLab</div>
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-gray-700 focus:outline-none"
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
            <nav className="hidden md:flex gap-6 text-sm font-medium">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Mobile dropdown menu */}
          {menuOpen && (
            <div className="md:hidden px-4 pb-4">
              <nav className="flex flex-col gap-3">
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </header>

        <main className="p-6 max-w-7xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
