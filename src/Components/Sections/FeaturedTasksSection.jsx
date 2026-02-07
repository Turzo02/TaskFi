import { ArrowRight, Star, Clock, Users, DollarSign } from 'lucide-react';
import { Link } from 'react-router';
import Button from '../UI/Button';
import Card from '../UI/Card';
import Badge from '../UI/Badge';

const sampleTasks = [
  {
    id: 1,
    title: 'Website Testing',
    description: 'Test a website and provide feedback on user experience',
    reward: 2.50,
    timeEstimate: '15 min',
    availableCount: 12,
    buyerName: 'TechCorp Inc',
    buyerRating: 4.8,
    category: 'Testing'
  },
  {
    id: 2,
    title: 'Data Entry',
    description: 'Enter product information into spreadsheet',
    reward: 1.50,
    timeEstimate: '10 min',
    availableCount: 25,
    buyerName: 'DataPro LLC',
    buyerRating: 4.9,
    category: 'Data'
  },
  {
    id: 3,
    title: 'Survey Completion',
    description: 'Complete a market research survey',
    reward: 3.00,
    timeEstimate: '20 min',
    availableCount: 8,
    buyerName: 'Research Co',
    buyerRating: 4.7,
    category: 'Survey'
  },
];

const FeaturedTasksSection = () => {
  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
            Featured Tasks
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            Start earning with these available tasks
          </p>
        </div>
        <Link to="/login">
          <Button variant="ghost">
            View All
            <ArrowRight className="w-4 h-4 ml-1" strokeWidth={1.75} />
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleTasks.map((task) => (
          <Card key={task.id} className="p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <Badge variant="info" size="sm">{task.category}</Badge>
              <div className="flex items-center text-amber-500">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm ml-1">{task.buyerRating}</span>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
              {task.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
              {task.description}
            </p>
            <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {task.timeEstimate}
              </span>
              <span className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                {task.availableCount} left
              </span>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
              <div>
                <span className="text-sm text-slate-500">by {task.buyerName}</span>
              </div>
              <div className="flex items-center gap-1 text-green-600 font-semibold">
                <DollarSign className="w-4 h-4" />
                {task.reward.toFixed(2)}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FeaturedTasksSection;
