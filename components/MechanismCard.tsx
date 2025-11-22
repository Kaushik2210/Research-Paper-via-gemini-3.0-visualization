import React from 'react';
import { Brain, Layers, Repeat, GitFork } from 'lucide-react';

interface MechanismCardProps {
  title: string;
  abbr: string;
  description: string;
  iconType: 'ann' | 'cnn' | 'rnn' | 'gan';
}

export const MechanismCard: React.FC<MechanismCardProps> = ({ title, abbr, description, iconType }) => {
  const getIcon = () => {
    switch (iconType) {
      case 'ann': return <Brain className="w-8 h-8 text-blue-500 dark:text-blue-400" />;
      case 'cnn': return <Layers className="w-8 h-8 text-purple-500 dark:text-purple-400" />;
      case 'rnn': return <Repeat className="w-8 h-8 text-emerald-500 dark:text-emerald-400" />;
      case 'gan': return <GitFork className="w-8 h-8 text-rose-500 dark:text-rose-400" />;
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-6 rounded-xl hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 group">
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 bg-slate-100 dark:bg-slate-900 rounded-lg group-hover:scale-110 transition-transform">
          {getIcon()}
        </div>
        <span className="text-3xl font-bold text-slate-300 dark:text-slate-700 group-hover:text-slate-400 dark:group-hover:text-slate-600 transition-colors">{abbr}</span>
      </div>
      <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-slate-100">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};