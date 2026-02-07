import { useParams } from 'react-router';
import { Clock, DollarSign, Star, Users, FileText, CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import Card from '../../../Components/UI/Card';
import Button from '../../../Components/UI/Button';
import Badge from '../../../Components/UI/Badge';
import Input from '../../../Components/UI/Input';

const TaskDetails = () => {
  const { id } = useParams();

  // Mock task data
  const task = {
    id: id || 1,
    title: 'Website Usability Testing',
    description: 'We need detailed feedback on our new e-commerce website. You will navigate through the site, complete a purchase flow, and provide feedback on any issues or confusing elements you encounter.',
    reward: 5.00,
    timeEstimate: '30 min',
    category: 'Testing',
    buyer: {
      name: 'TechCorp Inc',
      rating: 4.9,
      totalTasks: 156,
      memberSince: '2023'
    },
    requirements: [
      'Desktop or laptop computer',
      'Modern web browser (Chrome, Firefox, Safari)',
      'Ability to record screen (optional but preferred)',
      'Good written English skills'
    ],
    workersNeeded: 5,
    workersApplied: 2,
    deadline: '2026-02-15',
    instructions: `1. Visit the website at demo-link.com
2. Create an account and complete the onboarding
3. Browse products and add 2-3 items to cart
4. Complete the checkout process (use test payment)
5. Submit a written report of any bugs or UX issues found`
  };

  return (
    <div className="space-y-6">
      <Link to="/dashboard/worker/tasks" className="inline-flex items-center text-slate-600 hover:text-indigo-600">
        <ArrowLeft className="w-4 h-4 mr-1" />
        Back to Tasks
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <Badge variant="info" size="sm" className="mb-2">{task.category}</Badge>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{task.title}</h1>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-green-600">${task.reward.toFixed(2)}</p>
                <p className="text-sm text-slate-500">per task</p>
              </div>
            </div>

            <p className="text-slate-600 dark:text-slate-400 mb-6">{task.description}</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-t border-b border-slate-200 dark:border-slate-700">
              <div className="text-center">
                <Clock className="w-5 h-5 mx-auto mb-1 text-slate-500" />
                <p className="text-sm font-medium">{task.timeEstimate}</p>
                <p className="text-xs text-slate-500">Duration</p>
              </div>
              <div className="text-center">
                <Users className="w-5 h-5 mx-auto mb-1 text-slate-500" />
                <p className="text-sm font-medium">{task.workersNeeded - task.workersApplied}</p>
                <p className="text-xs text-slate-500">Spots Left</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-5 h-5 mx-auto mb-1 text-slate-500" />
                <p className="text-sm font-medium">{task.deadline}</p>
                <p className="text-xs text-slate-500">Deadline</p>
              </div>
              <div className="text-center">
                <Star className="w-5 h-5 mx-auto mb-1 text-amber-500" />
                <p className="text-sm font-medium">{task.buyer.rating}</p>
                <p className="text-xs text-slate-500">Buyer Rating</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Requirements</h3>
            <ul className="space-y-2">
              {task.requirements.map((req, index) => (
                <li key={index} className="flex items-center gap-2 text-slate-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  {req}
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Instructions</h3>
            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg whitespace-pre-line text-slate-600 dark:text-slate-400 text-sm">
              {task.instructions}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Submit Work</h3>
            <div className="space-y-4">
              <Input label="Submission URL/Notes" placeholder="Enter your submission details..." />
              <div className="border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg p-8 text-center">
                <FileText className="w-8 h-8 mx-auto mb-2 text-slate-400" />
                <p className="text-sm text-slate-500">Drag and drop files here, or click to browse</p>
              </div>
              <Button variant="primary" className="w-full">Submit Work</Button>
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          <Card className="p-5">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-3">About Buyer</h3>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-indigo-600">{task.buyer.name[0]}</span>
              </div>
              <div>
                <p className="font-medium text-slate-900 dark:text-white">{task.buyer.name}</p>
                <div className="flex items-center text-amber-500 text-sm">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="ml-1">{task.buyer.rating}</span>
                </div>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-slate-600">{task.buyer.totalTasks} tasks posted</p>
              <p className="text-slate-600">Member since {task.buyer.memberSince}</p>
            </div>
          </Card>

          <Button variant="primary" className="w-full" size="lg">
            Apply for Task
          </Button>

          <Button variant="outline" className="w-full">
            Save for Later
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
