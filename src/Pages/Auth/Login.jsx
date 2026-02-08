import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { Wallet, Mail, Lock, Eye, EyeOff, User, Building2, Shield, ArrowRight, KeyRound, Sparkles } from 'lucide-react';
import { useAuth } from '../../Context/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { login, isLoading } = useAuth();
  
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState('worker');
  const [formData, setFormData] = useState({ email: '', password: '' });

  const roleConfig = {
    worker: { label: 'Worker', color: 'text-emerald-500', bg: 'bg-emerald-500', icon: User },
    buyer: { label: 'Buyer', color: 'text-blue-500', bg: 'bg-blue-500', icon: Building2 },
    admin: { label: 'Admin', color: 'text-violet-500', bg: 'bg-violet-500', icon: Shield }
  };

  const activeRole = roleConfig[selectedRole];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(formData.email, formData.password, selectedRole);
    if (success) navigate(`/dashboard/${selectedRole}`);
  };

  return (
    <div className="min-h-screen w-full  flex items-center justify-center p-4 md:p-6 relative overflow-hidden">
      
      {/* 🟢 Background Texture & Grain */}


      {/* 📖 THE MAIN STORY CARD */}
      <div className="relative z-10 w-full max-w-7xl bg-bg-surface rounded-[2.5rem] shadow-2xl shadow-brand/5 border border-border-base overflow-hidden flex flex-col md:flex-row min-h-[650px]">
        
        {/* 🎨 LEFT SIDE: The Illustration Scene */}
        <div className="w-full md:w-1/2 bg-bg-elevated relative flex flex-col items-center justify-center p-12 text-center overflow-hidden group">


          {/* The "Illustration" Composition */}
          <div className="relative z-10 mb-8 animate-float">
            {/* Main Key Icon */}
            <div className="w-32 h-32 rounded-[2rem] bg-bg-surface shadow-xl flex items-center justify-center relative z-20 transform rotate-[-10deg] group-hover:rotate-0 transition-transform duration-500">
              <KeyRound className="w-16 h-16 text-brand" strokeWidth={1.5} />
            </div>
          </div>

          <div className="relative z-10 max-w-xs">
            <h2 className="text-3xl font-black text-text-main mb-3 tracking-tight">
              Unlock your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-sec">
                Earning Potential.
              </span>
            </h2>
            <p className="text-text-muted font-medium">
              Secure, decentralized, and instant access to the global micro-task economy.
            </p>
          </div>
        </div>

        {/* 📝 RIGHT SIDE: The Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-bg-surface border-l border-border-base">
          
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-text-main mb-2 flex items-center gap-2">
              Welcome Back <span className="text-2xl">👋</span>
            </h3>
            <p className="text-text-muted text-sm">Please enter your details to sign in.</p>
          </div>

          {/* Custom Role Selector (Tab Style) */}
          <div className="p-1.5 bg-bg-elevated rounded-2xl flex mb-8">
            {['worker', 'buyer', 'admin'].map((role) => {
              const isSelected = selectedRole === role;
              return (
                <button
                  key={role}
                  type="button"
                  onClick={() => setSelectedRole(role)}
                  className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 flex items-center justify-center gap-2 ${
                    isSelected 
                      ? 'bg-bg-surface text-text-main shadow-sm ring-1 ring-border-base' 
                      : 'text-text-muted hover:text-text-main'
                  }`}
                >
                  {role}
                  {isSelected && <div className={`w-1.5 h-1.5 rounded-full ${roleConfig[role].bg}`} />}
                </button>
              );
            })}
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-text-main ml-1 uppercase tracking-wide">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted group-focus-within:text-brand transition-colors" />
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-bg-elevated border border-border-base text-text-main placeholder:text-text-muted/60 font-medium focus:outline-none focus:bg-bg-surface focus:border-brand focus:ring-4 focus:ring-brand/10 transition-all shadow-inner"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-text-main ml-1 uppercase tracking-wide">Password</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted group-focus-within:text-brand transition-colors" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-12 pr-12 py-4 rounded-xl bg-bg-elevated border border-border-base text-text-main placeholder:text-text-muted/60 font-medium focus:outline-none focus:bg-bg-surface focus:border-brand focus:ring-4 focus:ring-brand/10 transition-all shadow-inner"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-main transition-colors p-1"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex justify-end">
              <Link to="#" className="text-xs font-bold text-text-muted hover:text-brand transition-colors">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`
                w-full py-4 rounded-xl font-bold text-lg text-white shadow-xl 
                flex items-center justify-center gap-2 group relative overflow-hidden transition-all duration-300
                hover:scale-[1.02] active:scale-[0.98] hover:shadow-brand/30
                ${activeRole.bg}
              `}
            >
              <span className="relative z-10 flex items-center gap-2">
                {isLoading ? 'Accessing...' : 'Sign In'}
                {!isLoading && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
              </span>
              
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]" />
            </button>
          </form>

          <div className="mt-8 text-center pt-6 border-t border-border-base">
            <p className="text-text-muted text-sm font-medium">
              Don't have an account?{' '}
              <Link to="/register" className={`font-bold hover:underline ${activeRole.color}`}>
                Register Now
              </Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
