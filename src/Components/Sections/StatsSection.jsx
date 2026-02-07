import { Wallet, Users, TrendingUp } from 'lucide-react';
import Card from '../UI/Card';

const stats = [
  { icon: Users, value: '50K+', label: 'Active Workers' },
  { icon: Wallet, value: '$2M+', label: 'Paid to Workers' },
  { icon: TrendingUp, value: '100K+', label: 'Tasks Completed' },
];

const StatsSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="text-center py-8" elevated>
          <stat.icon className="w-10 h-10 text-indigo-600 mx-auto mb-4" strokeWidth={1.75} />
          <p className="text-3xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
          <p className="text-slate-600 dark:text-slate-400">{stat.label}</p>
        </Card>
      ))}
    </section>
  );
};

export default StatsSection;
