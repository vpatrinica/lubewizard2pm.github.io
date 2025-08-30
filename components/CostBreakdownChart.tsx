import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { BomItem } from '../types';

interface CostBreakdownChartProps {
  data: BomItem[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-850 p-4 border border-slate-700 rounded-lg shadow-xl">
        <p className="font-bold text-amber-400">{label}</p>
        {payload.map((entry: any) => (
          <p key={entry.name} style={{ color: entry.color }} className="text-sm">
            {`${entry.name}: €${entry.value?.toFixed(2) ?? 'N/A'}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const CostBreakdownChart: React.FC<CostBreakdownChartProps> = ({ data }) => {
  const chartData = data
    .filter(item => (item.total20 || 0) + (item.total200 || 0) + (item.total1k || 0) > 0)
    .map(item => ({
        name: item.part,
        'Cost per unit (20)': item.total20 ? item.total20 / 20 : null,
        'Cost per unit (200)': item.total200 ? item.total200 / 200 : null,
        'Cost per unit (1k)': item.total1k ? item.total1k / 1000 : null,
    }));
    
  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <BarChart
          data={chartData}
          margin={{
            top: 5,
            right: 20,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis dataKey="name" tick={{ fill: '#94a3b8', fontSize: 10 }} angle={-45} textAnchor="end" height={80} interval={0} />
          <YAxis tick={{ fill: '#94a3b8', fontSize: 12 }} />
          <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(100, 116, 139, 0.1)'}} />
          <Legend wrapperStyle={{ color: '#e2e8f0', paddingTop: '20px' }} />
          <Bar dataKey="Cost per unit (20)" fill="#f59e0b" />
          <Bar dataKey="Cost per unit (200)" fill="#fb923c" />
          <Bar dataKey="Cost per unit (1k)" fill="#ea580c" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CostBreakdownChart;