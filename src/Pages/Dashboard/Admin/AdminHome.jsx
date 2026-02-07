import { Users, Briefcase, DollarSign, Shield, Activity, TrendingUp, Ban, CheckCircle } from 'lucide-react';
import { Link } from 'react-router';
import Card from '../../../Components/UI/Card';
import Button from '../../../Components/UI/Button';
import Badge from '../../../Components/UI/Badge';

const AdminHome = () => {
  const stats = [
    { label: 'Total Users', value: '1,234', icon: Users, color: 'blue' },
    { label: 'Active Tasks', value: '89', icon: Briefcase, color: 'green' },
    { label: 'Total Revenue', value: '$12.5K', icon: DollarSign, color: 'purple' },
    { label: 'Pending Reviews', value: '23', icon: Activity, color: 'amber' },
  ];

  const recentUsers = [
    { id: 1, name: 'John Worker', email: 'john@demo.com', role: 'worker', status: 'active', joined: '2 hours ago' },
    { id: 2, name: 'Sarah Buyer', email: 'sarah@demo.com', role: 'buyer', status: 'active', joined: '5 hours ago' },
    { id: 3, name: 'Mike Worker', email: 'mike@demo.com', role: 'worker', status: 'pending', joined: '1 day ago' },
  ];

  const systemHealth = [
    { name: 'Server Status', status: 'healthy', uptime: '99.9%' },
    { name: 'Database', status: 'healthy', uptime: '100%' },
    { name: 'API Response', status: 'good', uptime: '45ms avg' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Admin Dashboard</h1>
        <p className="text-slate-600 dark:text-slate-400">Platform overview and management</p>
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
        {/* Recent Users */}
        <Card className="p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Recent Users</h3>
            <Link to="/dashboard/admin/users" className="text-sm text-indigo-600 hover:underline">Manage All</Link>
          </div>
          <div className="space-y-3">
            {recentUsers.map((user) => (
              <div key={user.id} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">{user.name}</p>
                  <p className="text-sm text-slate-500">{user.email} • {user.joined}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={user.role === 'worker' ? 'success' : 'info'} size="sm">{user.role}</Badge>
                  <Badge variant={user.status === 'active' ? 'success' : 'warning'} size="sm">{user.status}</Badge>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* System Health */}
        <Card className="p-5">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">System Health</h3>
          <div className="space-y-3">
            {systemHealth.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <div className="flex items-center gap-3">
                  {item.status === 'healthy' ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <TrendingUp className="w-5 h-5 text-blue-500" />
                  )}
                  <span className="font-medium text-slate-900 dark:text-white">{item.name}</span>
                </div>
                <span className="text-sm text-slate-500">{item.uptime}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="p-5">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Quick Actions</h3>
        <div className="flex flex-wrap gap-3">
          <Link to="/dashboard/admin/users"><Button variant="outline">Manage Users</Button></Link>
          <Link to="/dashboard/admin/tasks"><Button variant="outline">Review Tasks</Button></Link>
          <Button variant="outline" className="flex items-center gap-2"><Ban className="w-4 h-4" /> Block User</Button>
        </div>
      </Card>
    </div>
  );
};

export default AdminHome;
