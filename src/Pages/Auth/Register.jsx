import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { Wallet, Mail, Lock, Eye, EyeOff, User, Building2, Shield, ArrowRight, UserPlus, Layers, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../../Context/AuthContext';
import Logo from '../../Components/Shared/Logo';

const Register = () => {
  const navigate = useNavigate();
  const { register, isLoading } = useAuth();
  
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState('worker');
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });

  const roleConfig = {
    worker: { label: 'Worker', color: 'text-emerald-500', bg: 'bg-emerald-500', border: 'border-emerald-500', icon: User },
    buyer: { label: 'Buyer', color: 'text-blue-500', bg: 'bg-blue-500', border: 'border-blue-500', icon: Building2 },
    admin: { label: 'Admin', color: 'text-violet-500', bg: 'bg-violet-500', border: 'border-violet-500', icon: Shield }
  };

  const activeTheme = roleConfig[selectedRole];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) return alert("Passwords don't match");
    const success = await register(formData.name, formData.email, formData.password, selectedRole);
    if (success) navigate(`/dashboard/${selectedRole}`);
  };

  return (
    <div className="min-h-screen w-full bg-bg-primary flex items-center justify-center p-4 md:p-6 relative overflow-hidden">
      
      {/* 🟢 Background Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-brand/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl bg-bg-surface rounded-[2.5rem] shadow-2xl shadow-brand/5 border border-border-base overflow-hidden flex flex-col-reverse md:flex-row min-h-[700px]">
        
        {/* 📝 LEFT SIDE: The Form (Larger Area) */}
        <div className="w-full md:w-7/12 p-8 md:p-14 flex flex-col justify-center">
          
          <div className="mb-10">
      <Logo />
            <h2 className="text-3xl md:text-4xl font-black text-text-main mb-2">Create Account</h2>
            <p className="text-text-muted font-medium">Start your journey in the gig economy today.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Role Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {['worker', 'buyer', 'admin'].map((role) => {
                const config = roleConfig[role];
                const isSelected = selectedRole === role;
                const Icon = config.icon;
                
                return (
                  <button
                    key={role}
                    type="button"
                    onClick={() => setSelectedRole(role)}
                    className={`relative p-4 rounded-2xl border-2 text-left transition-all duration-300 flex flex-col gap-3 group ${
                      isSelected 
                        ? `bg-bg-surface ${config.border} shadow-lg scale-[1.02]` 
                        : 'bg-bg-elevated border-border-base hover:bg-bg-surface hover:border-border-base'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isSelected ? `${config.bg} text-white` : 'bg-bg-surface text-text-muted group-hover:text-text-main'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className={`font-bold text-sm uppercase tracking-wide ${isSelected ? 'text-text-main' : 'text-text-muted group-hover:text-text-main'}`}>
                        {role}
                      </div>
                      {isSelected && <div className={`text-[10px] font-bold ${config.color}`}>Selected</div>}
                    </div>
                    {isSelected && <div className={`absolute top-3 right-3 w-2 h-2 rounded-full ${config.bg}`} />}
                  </button>
                );
              })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-text-main ml-1 uppercase">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl bg-bg-elevated border border-border-base text-text-main font-medium focus:bg-bg-surface focus:border-brand focus:ring-4 focus:ring-brand/10 transition-all outline-none shadow-inner"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-text-main ml-1 uppercase">Email</label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl bg-bg-elevated border border-border-base text-text-main font-medium focus:bg-bg-surface focus:border-brand focus:ring-4 focus:ring-brand/10 transition-all outline-none shadow-inner"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5 relative">
                <label className="text-xs font-bold text-text-main ml-1 uppercase">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl bg-bg-elevated border border-border-base text-text-main font-medium focus:bg-bg-surface focus:border-brand focus:ring-4 focus:ring-brand/10 transition-all outline-none shadow-inner"
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-main">
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-text-main ml-1 uppercase">Confirm</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl bg-bg-elevated border border-border-base text-text-main font-medium focus:bg-bg-surface focus:border-brand focus:ring-4 focus:ring-brand/10 transition-all outline-none shadow-inner"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`
                w-full h-14 mt-4 rounded-xl font-bold text-lg text-white shadow-xl 
                flex items-center justify-center gap-2 group relative overflow-hidden transition-all duration-300
                hover:scale-[1.01] active:scale-[0.99]
                ${activeTheme.bg}
              `}
            >
              {isLoading ? 'Creating Account...' : 'Complete Registration'}
              {!isLoading && <UserPlus className="w-5 h-5 group-hover:rotate-12 transition-transform" />}
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-text-muted">
            Already have an account? <Link to="/login" className={`font-bold hover:underline ${activeTheme.color}`}>Login</Link>
          </p>
        </div>

        {/* 🎨 RIGHT SIDE: The Blueprint Illustration */}
        <div className={`w-full md:w-5/12 relative overflow-hidden flex flex-col items-center justify-center p-12 text-center ${selectedRole === 'worker' ? 'bg-emerald-900/5' : selectedRole === 'buyer' ? 'bg-blue-900/5' : 'bg-violet-900/5'} border-l border-border-base`}>
          
          <div className="relative z-10 w-full max-w-sm">
            {/* The Blueprint Card */}
            <div className="clay-card bg-bg-surface p-6 rounded-3xl shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-500 mb-8 relative group">
              <div className="flex items-center gap-3 mb-4 border-b border-border-base pb-4">
                <div className={`w-10 h-10 rounded-full ${activeTheme.bg} flex items-center justify-center text-white`}>
                  <User className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="h-2 w-24 bg-text-main/10 rounded mb-1" />
                  <div className="h-2 w-16 bg-text-main/10 rounded" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-2 w-full bg-text-main/5 rounded" />
                <div className="h-2 w-3/4 bg-text-main/5 rounded" />
                <div className="h-2 w-5/6 bg-text-main/5 rounded" />
              </div>
              <div className={`absolute -right-3 -top-3 w-10 h-10 rounded-full bg-bg-surface border-4 ${selectedRole === 'worker' ? 'border-emerald-100' : 'border-blue-100'} flex items-center justify-center shadow-lg`}>
                <CheckCircle2 className={`w-6 h-6 ${activeTheme.color}`} />
              </div>
            </div>

            <h3 className="text-2xl font-black text-text-main mb-2">
              Setup your <br/>
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${selectedRole === 'worker' ? 'from-emerald-500 to-teal-500' : 'from-blue-500 to-indigo-500'}`}>
                Digital Identity
              </span>
            </h3>
            <p className="text-text-muted text-sm">
              Your gateway to secure payments and global opportunities starts here.
            </p>
          </div>

          {/* Decorative Background Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-text-muted)_1px,_transparent_1px)] [background-size:20px_20px] opacity-[0.05]" />
        </div>

      </div>
    </div>
  );
};

export default Register;
