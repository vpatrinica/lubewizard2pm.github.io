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
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  if (percent * 100 < 5) return null;

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" className="text-xs font-bold">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0];
    const percentage = (data.percent && isFinite(data.percent)) 
        ? (data.percent * 100).toFixed(2) 
        : '0.00';

    return (
      <div className="bg-slate-850 p-3 border border-slate-700 rounded-lg shadow-xl">
        <p className="font-bold" style={{ color: data.payload.fill }}>{`${data.name}: €${data.value.toFixed(2)}`}</p>
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