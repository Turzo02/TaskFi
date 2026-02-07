import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { Wallet, Mail, Lock, Eye, EyeOff, User, Building2, Shield } from 'lucide-react';
import Button from '../../Components/UI/Button';
import Input from '../../Components/UI/Input';
import Card from '../../Components/UI/Card';
import { useAuth } from '../../Context/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { login, isLoading } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState('worker');
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const roles = [
    { id: 'worker', label: 'Worker', icon: User, color: 'green', desc: 'Complete tasks & earn' },
    { id: 'buyer', label: 'Buyer', icon: Building2, color: 'blue', desc: 'Post tasks & hire' },
    { id: 'admin', label: 'Admin', icon: Shield, color: 'purple', desc: 'Manage platform' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(formData.email, formData.password, selectedRole);
    if (success) {
      navigate(`/dashboard/${selectedRole}`);
    }
  };

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Wallet className="w-8 h-8 text-white" strokeWidth={2} />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            Demo Login
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-2">
            Select a role to preview the dashboard
          </p>
        </div>

        <Card className="p-6">
          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
              Select Role (Demo Only)
            </label>
            <div className="grid grid-cols-3 gap-2">
              {roles.map((role) => {
                const Icon = role.icon;
                const isSelected = selectedRole === role.id;
                return (
                  <button
                    key={role.id}
                    type="button"
                    onClick={() => setSelectedRole(role.id)}
                    className={`
                      p-3 rounded-lg border-2 text-center transition-all
                      ${isSelected 
                        ? `border-${role.color}-500 bg-${role.color}-50 dark:bg-${role.color}-900/20` 
                        : 'border-slate-200 dark:border-slate-700 hover:border-slate-300'}
                    `}
                  >
                    <Icon className={`w-5 h-5 mx-auto mb-1 ${isSelected ? `text-${role.color}-600` : 'text-slate-500'}`} />
                    <span className={`text-xs font-medium ${isSelected ? 'text-slate-900 dark:text-white' : 'text-slate-600'}`}>
                      {role.label}
                    </span>
                  </button>
                );
              })}
            </div>
            <p className="text-xs text-slate-500 mt-2">
              {roles.find(r => r.id === selectedRole)?.desc}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Email (Optional for demo)"
              type="email"
              placeholder="demo@example.com"
              icon={Mail}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />

            <div className="relative">
              <Input
                label="Password (Optional for demo)"
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                icon={Lock}
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[38px] text-slate-400 hover:text-slate-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            <Button 
              type="submit" 
              variant="primary" 
              className="w-full"
              isLoading={isLoading}
            >
              {isLoading ? 'Logging in...' : `Login as ${roles.find(r => r.id === selectedRole)?.label}`}
            </Button>
          </form>

          <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
            <p className="text-xs text-center text-slate-500">
              No backend required. Click login to see the {selectedRole} dashboard.
            </p>
          </div>
        </Card>

        <p className="text-center mt-6 text-sm text-slate-600">
          Want to see a different view?{' '}
          <Link to="/register" className="text-indigo-600 hover:underline">
            Try Register Page
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
