import { useState } from 'react';
import { Search, Filter, CheckCircle, XCircle, Eye, Trash2 } from 'lucide-react';
import Card from '../../../Components/UI/Card';
import Button from '../../../Components/UI/Button';
import Input from '../../../Components/UI/Input';
import Badge from '../../../Components/UI/Badge';

const ManageTasks = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const tasks = [
    { id: 1, title: 'Website Testing', buyer: 'TechCorp', reward: 5, workersNeeded: 5, workersApplied: 3, status: 'active' },
    { id: 2, title: 'Data Entry', buyer: 'ShopMall', reward: 3.5, workersNeeded: 10, workersApplied: 8, status: 'active' },
    { id: 3, title: 'Survey', buyer: 'Research Inc', reward: 2, workersNeeded: 50, workersApplied: 50, status: 'completed' },
    { id: 4, title: 'Translation', buyer: 'Global Biz', reward: 8, workersNeeded: 3, workersApplied: 0, status: 'pending' },
    { id: 5, title: 'Image Tagging', buyer: 'AI Labs', reward: 4, workersNeeded: 8, workersApplied: 2, status: 'active' },
  ];

  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || task.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Manage Tasks</h1>
        <p className="text-slate-600 dark:text-slate-400">Review and moderate platform tasks</p>
      </div>

      <Card className="p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <Input
              placeholder="Search tasks..."
              icon={Search}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-slate-500" />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-600">Task</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-600">Buyer</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-600">Reward</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-600">Progress</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-600">Status</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTasks.map((task) => (
                <tr key={task.id} className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-4 px-4 font-medium text-slate-900 dark:text-white">{task.title}</td>
                  <td className="py-4 px-4 text-slate-600">{task.buyer}</td>
                  <td className="py-4 px-4 text-green-600 font-semibold">${task.reward.toFixed(2)}</td>
                  <td className="py-4 px-4 text-slate-600">{task.workersApplied}/{task.workersNeeded} workers</td>
                  <td className="py-4 px-4">
                    <Badge variant={task.status === 'active' ? 'success' : task.status === 'pending' ? 'warning' : 'default'} size="sm">
                      {task.status}
                    </Badge>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm"><Eye className="w-4 h-4" /></Button>
                      {task.status === 'pending' && (
                        <Button variant="ghost" size="sm"><CheckCircle className="w-4 h-4 text-green-500" /></Button>
                      )}
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

export default ManageTasks;
