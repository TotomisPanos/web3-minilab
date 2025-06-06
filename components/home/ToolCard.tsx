"use client";

import { ReactNode } from "react";
import Link from "next/link";

interface ToolCardProps {
  href: string;
  icon: ReactNode;
  label: string;
  description: string;
}

export default function ToolCard({
  href,
  icon,
  label,
  description,
}: ToolCardProps) {
  return (
    <Link
      href={href}
      className="flex flex-col items-start p-6 rounded-2xl shadow-md shadow-gray-700 bg-gray-800 hover:shadow-xl transition-shadow"
    >
      <div className="mb-3">{icon}</div>
      <h2 className="text-xl font-semibold text-gray-100">{label}</h2>
      <p className="mt-1 text-sm text-gray-500 text-left">{description}</p>
    </Link>
  );
}