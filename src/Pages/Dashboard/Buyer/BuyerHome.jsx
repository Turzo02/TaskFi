import { useAuth } from '../../../Context/AuthContext';
import { Wallet, PlusCircle, Users, TrendingUp, ArrowRight, DollarSign, CheckCircle, Clock } from 'lucide-react';
import { Link } from 'react-router';
import Card from '../../../Components/UI/Card';
import Button from '../../../Components/UI/Button';
import Badge from '../../../Components/UI/Badge';

const BuyerHome = () => {
  const { user } = useAuth();

  const stats = [
    { label: 'Coin Balance', value: user?.coin || 500, icon: Wallet, color: 'indigo' },
    { label: 'Active Tasks', value: '8', icon: PlusCircle, color: 'blue' },
    { label: 'Total Workers', value: '45', icon: Users, color: 'green' },
    { label: 'Completion Rate', value: '92%', icon: TrendingUp, color: 'purple' },
  ];

  const myTasks = [
    { id: 1, title: 'Website Testing', reward: 5, workersNeeded: 5, workersApplied: 3, status: 'active' },
    { id: 2, title: 'Data Entry Project', reward: 3.5, workersNeeded: 10, workersApplied: 8, status: 'active' },
    { id: 3, title: 'Survey Distribution', reward: 2, workersNeeded: 50, workersApplied: 45, status: 'completed' },
  ];

  const recentSubmissions = [
    { id: 1, worker: 'John D.', task: 'Website Testing', status: 'pending', date: '2 hours ago' },
    { id: 2, worker: 'Sarah M.', task: 'Data Entry', status: 'approved', date: '5 hours ago' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Buyer Dashboard</h1>
          <p className="text-slate-600 dark:text-slate-400">Welcome back, {user?.name || 'Buyer'}!</p>
        </div>
        <Link to="/dashboard/buyer/add-task">
          <Button variant="primary">Post New Task</Button>
        </Link>
      </div>

      {/* Stats */}
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
        {/* My Tasks */}
        <Card className="p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">My Tasks</h3>
            <Link to="/dashboard/buyer/tasks" className="text-sm text-indigo-600 hover:underline">View All</Link>
          </div>
          <div className="space-y-3">
            {myTasks.map((task) => (
              <div key={task.id} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">{task.title}</p>
                  <p className="text-sm text-slate-500">${task.reward} • {task.workersApplied}/{task.workersNeeded} workers</p>
                </div>
                <Badge variant={task.status === 'active' ? 'success' : 'default'} size="sm">{task.status}</Badge>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Submissions */}
        <Card className="p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Recent Submissions</h3>
            <Link to="/dashboard/buyer/tasks" className="text-sm text-indigo-600 hover:underline">Review</Link>
          </div>
          <div className="space-y-3">
            {recentSubmissions.map((sub) => (
              <div key={sub.id} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <div className="flex items-center gap-3">
                  {sub.status === 'approved' ? <CheckCircle className="w-5 h-5 text-green-500" /> : <Clock className="w-5 h-5 text-amber-500" />}
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">{sub.worker}</p>
                    <p className="text-sm text-slate-500">{sub.task} • {sub.date}</p>
                  </div>
                </div>
                <Badge variant={sub.status === 'approved' ? 'success' : 'warning'} size="sm">{sub.status}</Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="p-5">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Quick Actions</h3>
        <div className="flex flex-wrap gap-3">
          <Link to="/dashboard/buyer/add-task"><Button variant="outline">Post Task</Button></Link>
          <Link to="/dashboard/buyer/purchase"><Button variant="outline" className="flex items-center gap-2"><DollarSign className="w-4 h-4" />Buy Coins</Button></Link>
          <Link to="/dashboard/buyer/payments"><Button variant="outline">Payment History</Button></Link>
        </div>
      </Card>
    </div>
  );
};

export default BuyerHome;
