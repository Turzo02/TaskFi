import { CheckCircle, Clock, XCircle, Eye, Download } from 'lucide-react';
import Card from '../../../Components/UI/Card';
import Button from '../../../Components/UI/Button';
import Badge from '../../../Components/UI/Badge';

const MySubmissions = () => {
  // Mock submissions data
  const submissions = [
    { id: 1, taskTitle: 'Website Usability Testing', reward: 5.00, status: 'approved', date: '2026-02-05', buyer: 'TechCorp' },
    { id: 2, taskTitle: 'Product Data Entry', reward: 3.50, status: 'pending', date: '2026-02-06', buyer: 'ShopMall' },
    { id: 3, taskTitle: 'Customer Survey', reward: 2.00, status: 'rejected', date: '2026-02-04', buyer: 'Research Inc' },
    { id: 4, taskTitle: 'App Feature Testing', reward: 6.00, status: 'approved', date: '2026-02-03', buyer: 'AppDev Co' },
    { id: 5, taskTitle: 'Image Categorization', reward: 4.00, status: 'pending', date: '2026-02-06', buyer: 'AI Labs' },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'approved': return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'pending': return <Clock className="w-5 h-5 text-amber-500" />;
      case 'rejected': return <XCircle className="w-5 h-5 text-red-500" />;
      default: return null;
    }
  };

  const getStatusBadge = (status) => {
    const variants = { approved: 'success', pending: 'warning', rejected: 'error' };
    return <Badge variant={variants[status]} size="sm">{status}</Badge>;
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">My Submissions</h1>
        <p className="text-slate-600 dark:text-slate-400">Track your task submissions and earnings</p>
      </div>

      <Card className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-600 dark:text-slate-400">Task</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-600 dark:text-slate-400">Buyer</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-600 dark:text-slate-400">Submitted</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-600 dark:text-slate-400">Reward</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-600 dark:text-slate-400">Status</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-600 dark:text-slate-400">Actions</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((sub) => (
                <tr key={sub.id} className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-4 px-4">
                    <p className="font-medium text-slate-900 dark:text-white">{sub.taskTitle}</p>
                  </td>
                  <td className="py-4 px-4 text-slate-600">{sub.buyer}</td>
                  <td className="py-4 px-4 text-slate-600">{sub.date}</td>
                  <td className="py-4 px-4 text-green-600 font-semibold">${sub.reward.toFixed(2)}</td>
                  <td className="py-4 px-4">{getStatusBadge(sub.status)}</td>
                  <td className="py-4 px-4">
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm"><Eye className="w-4 h-4" /></Button>
                      {sub.status === 'approved' && (
                        <Button variant="ghost" size="sm"><Download className="w-4 h-4" /></Button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4 text-center" elevated>
          <p className="text-2xl font-bold text-green-600">$18.50</p>
          <p className="text-sm text-slate-600">Total Earned</p>
        </Card>
        <Card className="p-4 text-center" elevated>
          <p className="text-2xl font-bold text-blue-600">12</p>
          <p className="text-sm text-slate-600">Approved</p>
        </Card>
        <Card className="p-4 text-center" elevated>
          <p className="text-2xl font-bold text-amber-600">2</p>
          <p className="text-sm text-slate-600">Pending Review</p>
        </Card>
      </div>
    </div>
  );
};

export default MySubmissions;
