import { useAuth } from '../../../Context/AuthContext';
import { Wallet, CheckCircle, Clock, TrendingUp, DollarSign, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import Card from '../../../Components/UI/Card';
import Button from '../../../Components/UI/Button';
import Badge from '../../../Components/UI/Badge';

const WorkerHome = () => {
  const { user } = useAuth();

  // Mock stats
  const stats = [
    { label: 'Available Balance', value: `$${user?.coin?.toFixed(2) || '0.00'}`, icon: Wallet, color: 'green' },
    { label: 'Tasks Completed', value: '24', icon: CheckCircle, color: 'blue' },
    { label: 'Pending Review', value: '3', icon: Clock, color: 'amber' },
    { label: 'Success Rate', value: '98%', icon: TrendingUp, color: 'purple' },
  ];

  // Mock recent tasks
  const recentTasks = [
    { id: 1, title: 'Website Review', reward: 2.50, status: 'pending', date: '2 hours ago' },
    { id: 2, title: 'Data Entry Form', reward: 1.75, status: 'approved', date: 'Yesterday' },
    { id: 3, title: 'Survey Completion', reward: 3.00, status: 'approved', date: '2 days ago' },
  ];

  // Mock available tasks
  const availableTasks = [
    { id: 101, title: 'App Testing', reward: 5.00, time: '30 min', buyer: 'TechStart', rating: 4.9 },
    { id: 102, title: 'Image Tagging', reward: 1.50, time: '10 min', buyer: 'AI Corp', rating: 4.7 },
    { id: 103, title: 'Translation Review', reward: 4.00, time: '25 min', buyer: 'Global Inc', rating: 4.8 },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Worker Dashboard</h1>
          <p className="text-slate-600 dark:text-slate-400">Welcome back, {user?.name || 'Worker'}!</p>
        </div>
        <Link to="/dashboard/worker/tasks">
          <Button variant="primary">Find Tasks</Button>
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="p-4" elevated>
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-lg bg-${stat.color}-100 dark:bg-${stat.color}-900/30 flex items-center justify-center`}>
                <stat.icon className={`w-5 h-5 text-${stat.color}-600`} />
              </div>
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</p>
                <p className="text-xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Submissions */}
        <Card className="p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Recent Submissions</h3>
            <Link to="/dashboard/worker/submissions" className="text-sm text-indigo-600 hover:underline">View All</Link>
          </div>
          <div className="space-y-3">
            {recentTasks.map((task) => (
              <div key={task.id} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">{task.title}</p>
                  <p className="text-sm text-slate-500">{task.date}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-600 font-semibold">${task.reward.toFixed(2)}</span>
                  <Badge variant={task.status === 'approved' ? 'success' : 'warning'} size="sm">
                    {task.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Available Tasks */}
        <Card className="p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Available Tasks</h3>
            <Link to="/dashboard/worker/tasks" className="text-sm text-indigo-600 hover:underline">
              Browse All <ArrowRight className="w-4 h-4 inline" />
            </Link>
          </div>
          <div className="space-y-3">
            {availableTasks.map((task) => (
              <div key={task.id} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">{task.title}</p>
                  <p className="text-sm text-slate-500">by {task.buyer} • {task.time}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center text-amber-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm ml-1">{task.rating}</span>
                  </div>
                  <span className="text-green-600 font-semibold">${task.reward.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="p-5">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Quick Actions</h3>
        <div className="flex flex-wrap gap-3">
          <Link to="/dashboard/worker/tasks">
            <Button variant="outline">Browse Tasks</Button>
          </Link>
          <Link to="/dashboard/worker/submissions">
            <Button variant="outline">My Submissions</Button>
          </Link>
          <Link to="/dashboard/worker/withdrawals">
            <Button variant="outline" className="flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              Withdraw
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default WorkerHome;
