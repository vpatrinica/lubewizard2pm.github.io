
import React from 'react';

interface SummaryCardProps {
  title: string;
  value: number;
  prefix?: string;
  decimals?: number;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, value, prefix = '', decimals = 0 }) => {
  const formattedValue = value.toFixed(decimals);

  return (
    <div className="bg-slate-850/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-slate-700 hover:border-amber-500 transition-colors duration-300">
      <h3 className="text-md font-semibold text-slate-400 mb-2">{title}</h3>
      <p className="text-4xl font-bold text-white">
        {prefix}{formattedValue}
      </p>
    </div>
  );
};

export default SummaryCard;