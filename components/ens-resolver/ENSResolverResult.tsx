'use client';

interface Props {
  query: string;
  result: string | null;
  type: 'ens' | 'address';
}

export default function ENSResolverResult({ query, result, type }: Props) {
  return (
    <div className="mt-6 p-4 bg-white shadow rounded-lg text-left space-y-2">
      <div className="font-medium text-gray-700">
        {type === 'ens' ? 'ENS Name' : 'Address'}: <span className="text-gray-900">{query}</span>
      </div>
      <div className="font-medium text-gray-700">
        {type === 'ens' ? 'Resolved Address' : 'Reverse ENS'}:{' '}
        <span className="text-gray-900">
          {result ?? 'Not found'}
        </span>
      </div>
    </div>
  );
}
