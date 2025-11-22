import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { DetectionData } from '../types';

interface DetectionChartProps {
  isDark: boolean;
}

const data: DetectionData[] = [
  { model: 'CADDM', raw: 0.91, beautified: 0.76 },
  { model: 'RECCE', raw: 0.81, beautified: 0.66 },
  { model: 'FTCN', raw: 0.80, beautified: 0.64 },
];

const CustomTooltip = ({ active, payload, label, isDark }: any) => {
  if (active && payload && payload.length) {
    const raw = payload[0].value;
    const beautified = payload[1].value;
    const absDrop = (raw - beautified).toFixed(2);
    const pctDrop = ((raw - beautified) / raw * 100).toFixed(1);

    return (
      <div className={`p-4 rounded shadow-xl border ${isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'}`}>
        <p className={`font-bold mb-2 ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>{label}</p>
        <p className="text-emerald-500 dark:text-emerald-400 text-sm">Raw Accuracy: {raw.toFixed(2)}</p>
        <p className="text-rose-500 dark:text-rose-400 text-sm">With Filters: {beautified.toFixed(2)}</p>
        <div className={`mt-2 pt-2 border-t text-xs ${isDark ? 'border-slate-800 text-slate-500' : 'border-slate-100 text-slate-500'}`}>
          Difference: <span className="text-rose-600 dark:text-rose-500 font-bold">-{absDrop}</span> ({pctDrop}%)
        </div>
      </div>
    );
  }
  return null;
};

export const DetectionChart: React.FC<DetectionChartProps> = ({ isDark }) => {
  const axisColor = isDark ? '#94a3b8' : '#64748b'; // slate-400 vs slate-500
  const gridColor = isDark ? '#334155' : '#e2e8f0'; // slate-700 vs slate-200

  return (
    <div className="w-full h-[400px] bg-white/50 dark:bg-slate-800/30 rounded-xl p-4 border border-slate-200 dark:border-slate-700 backdrop-blur-sm">
      <h4 className="text-center text-slate-500 dark:text-slate-400 mb-6 text-sm uppercase tracking-widest">Impact of Beautification Filters on Detection (AUC)</h4>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} vertical={false} />
          <XAxis dataKey="model" stroke={axisColor} tick={{ fill: axisColor }} axisLine={false} tickLine={false} />
          <YAxis stroke={axisColor} tick={{ fill: axisColor }} axisLine={false} tickLine={false} domain={[0, 1]} />
          <Tooltip content={<CustomTooltip isDark={isDark} />} cursor={{fill: 'transparent'}} />
          <Legend wrapperStyle={{ paddingTop: '20px' }} />
          <Bar dataKey="raw" name="Raw Video" fill="#34d399" radius={[4, 4, 0, 0]} />
          <Bar dataKey="beautified" name="With Beautification" fill="#fb7185" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};