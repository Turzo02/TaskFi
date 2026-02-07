import { useState } from 'react';
import { Search, Filter, Ban, CheckCircle, Eye, Shield } from 'lucide-react';
import Card from '../../../Components/UI/Card';
import Button from '../../../Components/UI/Button';
import Input from '../../../Components/UI/Input';
import Badge from '../../../Components/UI/Badge';

const ManageUsers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');

  const users = [
    { id: 1, name: 'John Worker', email: 'john@demo.com', role: 'worker', status: 'active', coins: 150, tasksCompleted: 24 },
    { id: 2, name: 'Sarah Buyer', email: 'sarah@demo.com', role: 'buyer', status: 'active', coins: 500, tasksPosted: 12 },
    { id: 3, name: 'Mike Worker', email: 'mike@demo.com', role: 'worker', status: 'pending', coins: 50, tasksCompleted: 5 },
    { id: 4, name: 'Lisa Buyer', email: 'lisa@demo.com', role: 'buyer', status: 'active', coins: 1000, tasksPosted: 25 },
    { id: 5, name: 'Tom Worker', email: 'tom@demo.com', role: 'worker', status: 'blocked', coins: 0, tasksCompleted: 3 },
  ];

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'all' || user.role === filterRole;
    return matchesSearch && matchesRole;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Manage Users</h1>
        <p className="text-slate-600 dark:text-slate-400">View and manage platform users</p>
      </div>

      <Card className="p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <Input
              placeholder="Search users..."
              icon={Search}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-slate-500" />
            <select
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
              className="px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800"
            >
              <option value="all">All Roles</option>
              <option value="worker">Worker</option>
              <option value="buyer">Buyer</option>
            </select>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-600">User</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-600">Role</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-600">Balance</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-600">Status</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-4 px-4">
                    <p className="font-medium text-slate-900 dark:text-white">{user.name}</p>
                    <p className="text-sm text-slate-500">{user.email}</p>
                  </td>
                  <td className="py-4 px-4">
                    <Badge variant={user.role === 'worker' ? 'success' : 'info'} size="sm">{user.role}</Badge>
                  </td>
                  <td className="py-4 px-4 text-slate-600">{user.coins} coins</td>
                  <td className="py-4 px-4">
                    <Badge variant={user.status === 'active' ? 'success' : user.status === 'pending' ? 'warning' : 'error'} size="sm">
                      {user.status}
                    </Badge>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm"><Eye className="w-4 h-4" /></Button>
                      {user.status === 'active' ? (
                        <Button variant="ghost" size="sm"><Ban className="w-4 h-4 text-red-500" /></Button>
                      ) : (
                        <Button variant="ghost" size="sm"><CheckCircle className="w-4 h-4 text-green-500" /></Button>
                      )}
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

export default ManageUsers;
