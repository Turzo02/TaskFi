import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import Button from '../UI/Button';

const HeroSection = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-indigo-50 to-white dark:from-slate-900 dark:to-slate-800 rounded-2xl overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
          Complete Tasks.
          <br />
          <span className="text-indigo-600 dark:text-indigo-400">Earn Rewards.</span>
        </h1>
        <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
          Join thousands of workers earning money by completing simple micro-tasks. 
          Or post tasks and get quality work done fast.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/login">
            <Button variant="primary" size="lg">
              Start Earning
              <ArrowRight className="w-5 h-5 ml-2" strokeWidth={1.75} />
            </Button>
          </Link>
          <Link to="/login">
            <Button variant="outline" size="lg">
              Post a Task
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
