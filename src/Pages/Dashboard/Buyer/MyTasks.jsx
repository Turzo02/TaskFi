import { Edit2, Trash2, Users, Eye, CheckCircle, PauseCircle } from 'lucide-react';
import { Link } from 'react-router';
import Card from '../../../Components/UI/Card';
import Button from '../../../Components/UI/Button';
import Badge from '../../../Components/UI/Badge';

const MyTasks = () => {
  const myTasks = [
    { id: 1, title: 'Website Usability Testing', reward: 5, workersNeeded: 5, workersApplied: 3, status: 'active', category: 'Testing' },
    { id: 2, title: 'Product Data Entry', reward: 3.5, workersNeeded: 10, workersApplied: 8, status: 'active', category: 'Data Entry' },
    { id: 3, title: 'Customer Survey', reward: 2, workersNeeded: 50, workersApplied: 45, status: 'completed', category: 'Survey' },
    { id: 4, title: 'App Beta Testing', reward: 6, workersNeeded: 8, workersApplied: 2, status: 'paused', category: 'Testing' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">My Tasks</h1>
          <p className="text-slate-600 dark:text-slate-400">Manage your posted tasks</p>
        </div>
        <Link to="/dashboard/buyer/add-task">
          <Button variant="primary">Post New Task</Button>
        </Link>
      </div>

      <Card className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-600">Task</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-600">Category</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-600">Progress</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-600">Reward</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-600">Status</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {myTasks.map((task) => (
                <tr key={task.id} className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-4 px-4">
                    <p className="font-medium text-slate-900 dark:text-white">{task.title}</p>
                  </td>
                  <td className="py-4 px-4">
                    <Badge variant="info" size="sm">{task.category}</Badge>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-slate-400" />
                      <span className="text-sm">{task.workersApplied}/{task.workersNeeded}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-green-600 font-semibold">${task.reward.toFixed(2)}</td>
                  <td className="py-4 px-4">
                    <Badge 
                      variant={task.status === 'active' ? 'success' : task.status === 'completed' ? 'default' : 'warning'} 
                      size="sm"
                    >
                      {task.status}
                    </Badge>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm"><Eye className="w-4 h-4" /></Button>
                      <Button variant="ghost" size="sm"><Edit2 className="w-4 h-4" /></Button>
                      <Button variant="ghost" size="sm"><Trash2 className="w-4 h-4 text-red-500" /></Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default MyTasks;
