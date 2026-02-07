import { Shield, CheckCircle, TrendingUp } from 'lucide-react';
import Card from '../UI/Card';

const features = [
  {
    icon: CheckCircle,
    title: 'Quick Tasks',
    description: 'Complete micro-tasks in minutes and earn instantly'
  },
  {
    icon: Shield,
    title: 'Secure Payments',
    description: 'Your earnings are safe with our secure payment system'
  },
  {
    icon: TrendingUp,
    title: 'Grow Income',
    description: 'Build reputation and unlock higher-paying opportunities'
  },
];

const FeaturesSection = () => {
  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
          Why Choose TaskFi?
        </h2>
        <p className="text-slate-600 dark:text-slate-400">
          The premier platform for micro-tasks and earning opportunities
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="text-center py-8">
            <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
              <feature.icon className="w-7 h-7 text-indigo-600" strokeWidth={1.75} />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              {feature.description}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
