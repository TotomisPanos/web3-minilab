'use client';

interface Props {
  query: string;
  result: string | null;
  type: 'ens' | 'address';
}

export default function ENSResolverResult({ query, result, type }: Props) {
  return (
    <div className="mt-6 p-4 text-left space-y-2">
      <div className="font-medium text-white">
        {type === 'ens' ? 'ENS Name' : 'Address'}: <span className="text-indigo-600">{query}</span>
      </div>
      <div className="font-medium text-white">
        {type === 'ens' ? 'Resolved Address' : 'Reverse ENS'}:{' '}
        <span className="text-indigo-600">
          {result ?? 'Not found'}
        </span>
      </div>
    </div>
  );
}
