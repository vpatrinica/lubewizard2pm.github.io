import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface CategoryData {
  name: string;
  value: number;
}

interface CategoryDistributionChartProps {
  data: CategoryData[];
}

const COLORS = ['#f59e0b', '#d97706', '#b45309', '#ef4444', '#78716c', '#a8a29e', '#57534e'];

const RADIAN = Math.PI / 180;
// FIX: The generic type for renderCustomizedLabel was too restrictive. The props passed by
// the Pie component from Recharts have optional properties in their type definitions,
// which caused a type conflict. Using `any` on the destructured parameter makes the
// function signature compatible.
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }: any) => {
  if (percent === undefined || percent === null || !isFinite(percent)) return null;
  const pct = percent * 100;
  const radius = innerRadius + (outerRadius - innerRadius) * (pct < 5 ? 1.05 : 0.55);
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  const textAnchor = x > cx ? 'start' : 'end';
  const display = pct < 1 ? '<1%' : `${Math.round(pct)}%`;
  return (
    <text x={x} y={y} fill="#f8fafc" textAnchor={textAnchor} dominantBaseline="central" className="text-[10px] font-semibold">
      {display}
    </text>
  );
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const slice = payload[0];
    const rawPercent = slice.percent; // Provided by Recharts
    let percentNumber: number | null = null;

    if (rawPercent !== undefined && rawPercent !== null && isFinite(rawPercent)) {
      percentNumber = rawPercent * 100;
    } else {
      // Fallback: compute manually from payload sum
      const total = payload.reduce((sum: number, p: any) => sum + (typeof p.value === 'number' ? p.value : 0), 0);
      if (total > 0 && typeof slice.value === 'number') {
        percentNumber = (slice.value / total) * 100;
      }
    }

    const percentage = percentNumber !== null ? percentNumber.toFixed(2) : '0.00';

    return (
      <div className="bg-slate-850 p-3 border border-slate-700 rounded-lg shadow-xl">
        <p className="font-bold" style={{ color: slice.payload.fill }}>{`${slice.name}: €${slice.value.toFixed(2)}`}</p>
        <p className="text-sm text-slate-300">{`Represents ${percentage}% of total cost`}</p>
      </div>
    );
  }
  return null;
};


const CategoryDistributionChart: React.FC<CategoryDistributionChartProps> = ({ data }) => {
  return (
    <div style={{ width: '100%', height: 350 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
            stroke="#1e293b"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend
             layout="vertical" 
             verticalAlign="middle" 
             align="right"
             wrapperStyle={{ color: '#e2e8f0', fontSize: '12px', paddingLeft: '20px' }}
             iconType="circle"
             formatter={(value, entry) => <span className="text-slate-300">{value}</span>}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CategoryDistributionChart;