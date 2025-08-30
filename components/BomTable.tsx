
import React from 'react';
import type { BomItem } from '../types';

interface BomTableProps {
  data: BomItem[];
}

const BomTable: React.FC<BomTableProps> = ({ data }) => {
  const formatCurrency = (value: number | null) => {
    if (value === null || typeof value === 'undefined') return <span className="text-slate-500">N/A</span>;
    return `€${value.toFixed(2)}`;
  };
  
  const ExternalLinkIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-slate-700">
        <thead className="bg-slate-850">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-amber-400 uppercase tracking-wider">Part</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-amber-400 uppercase tracking-wider">Category</th>
            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-amber-400 uppercase tracking-wider">Qty</th>
            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-amber-400 uppercase tracking-wider">Total (20 pcs)</th>
            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-amber-400 uppercase tracking-wider">Total (200 pcs)</th>
            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-amber-400 uppercase tracking-wider">Total (1k pcs)</th>
          </tr>
        </thead>
        <tbody className="bg-slate-800 divide-y divide-slate-700">
          {data.map((item, index) => (
            <tr key={index} className="hover:bg-slate-700/50 transition-colors duration-200">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-200">
                {item.part}
                {item.reference && (
                  <a href={item.reference} target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:text-amber-400">
                    <ExternalLinkIcon />
                  </a>
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-400">{item.category}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300 text-right">{item.qty}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300 text-right">{formatCurrency(item.total20)}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300 text-right">{formatCurrency(item.total200)}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300 text-right">{formatCurrency(item.total1k)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BomTable;