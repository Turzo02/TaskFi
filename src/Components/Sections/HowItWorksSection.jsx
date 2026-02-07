import { Users, Wallet } from 'lucide-react';
import Card from '../UI/Card';

const workerSteps = [
  { step: 1, title: 'Create Account', description: 'Sign up for free and complete your profile' },
  { step: 2, title: 'Browse Tasks', description: 'Find tasks that match your skills and interests' },
  { step: 3, title: 'Complete & Earn', description: 'Submit your work and get paid in coins' },
];

const buyerSteps = [
  { step: 1, title: 'Post a Task', description: 'Describe what you need and set your budget' },
  { step: 2, title: 'Review Submissions', description: 'Workers apply and complete your tasks' },
  { step: 3, title: 'Get Results', description: 'Approve work and download your deliverables' },
];

const HowItWorksSection = () => {
  return (
    <section className="bg-gradient-to-b from-indigo-50 to-white dark:from-slate-900 dark:to-slate-800 rounded-2xl p-8 lg:p-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
          How It Works
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Get started in minutes - whether you want to earn or get work done
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* For Workers */}
        <Card className="p-6" elevated>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <Users className="w-6 h-6 text-indigo-600" />
            For Workers
          </h3>
          <div className="space-y-4">
            {workerSteps.map((item) => (
              <div key={item.step} className="flex items-start gap-4">
                <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-sm font-bold text-indigo-600">{item.step}</span>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white">{item.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
        {/* For Buyers */}
        <Card className="p-6" elevated>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <Wallet className="w-6 h-6 text-green-600" />
            For Buyers
          </h3>
          <div className="space-y-4">
            {buyerSteps.map((item) => (
              <div key={item.step} className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-sm font-bold text-green-600">{item.step}</span>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white">{item.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default HowItWorksSection;
