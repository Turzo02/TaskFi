import { useAuth } from '../../../Context/AuthContext'; // Update path if needed
import { 
  Wallet, 
  CheckCircle2, 
  Clock, 
  TrendingUp, 
  DollarSign, 
  Star, 
  ArrowRight, 
  Zap, 
  Briefcase 
} from 'lucide-react';
import { Link } from 'react-router';
import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts';

const WorkerHome = () => {
  const { user } = useAuth();

  // Mock Data
  const stats = [
    { label: 'Available Balance', value: `$${user?.coin?.toFixed(2) || '0.00'}`, icon: Wallet, color: 'text-emerald-500', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
    { label: 'Tasks Completed', value: '24', icon: CheckCircle2, color: 'text-blue-500', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
    { label: 'Pending Review', value: '3', icon: Clock, color: 'text-amber-500', bg: 'bg-amber-500/10', border: 'border-amber-500/20' },
    { label: 'Success Rate', value: '98%', icon: TrendingUp, color: 'text-purple-500', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
  ];

  const recentTasks = [
    { id: 1, title: 'Website UX Review', reward: 2.50, status: 'pending', date: '2h ago', icon: Zap },
    { id: 2, title: 'Data Entry Form', reward: 1.75, status: 'approved', date: 'Yesterday', icon: Briefcase },
    { id: 3, title: 'Survey Completion', reward: 3.00, status: 'approved', date: '2d ago', icon: Star },
  ];

  const availableTasks = [
    { id: 101, title: 'Mobile App Testing', reward: 5.00, time: '30 min', buyer: 'TechStart', rating: 4.9 },
    { id: 102, title: 'AI Image Tagging', reward: 1.50, time: '10 min', buyer: 'AI Corp', rating: 4.7 },
    { id: 103, title: 'Translation Review', reward: 4.00, time: '25 min', buyer: 'Global Inc', rating: 4.8 },
  ];

  // Tiny chart data for sparkline effect
  const sparkData = [
    { v: 10 }, { v: 15 }, { v: 8 }, { v: 20 }, { v: 18 }, { v: 30 }, { v: 25 }
  ];

  return (
    <div className="space-y-8 animate-in fade-in zoom-in duration-500">
      
      {/* 🟢 Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <h1 className="text-3xl font-black text-text-main tracking-tight">
            Dashboard
          </h1>
          <p className="text-text-muted font-medium mt-1">
            Welcome back, <span className="text-brand font-bold">{user?.displayName || 'Worker'}</span>! Ready to earn?
          </p>
        </div>
        
        <Link to="/dashboard/worker/tasks">
          <button className="clay-btn flex items-center gap-2 px-6 py-3 shadow-lg shadow-brand/20 group hover:-translate-y-1 transition-transform">
            <Zap className="w-5 h-5 fill-white/20" />
            Find New Tasks
          </button>
        </Link>
      </div>

      {/* 📊 Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className={`clay-card p-5 relative overflow-hidden bg-bg-surface border-2 hover:border-brand/30 transition-all group`}>
            <div className="flex justify-between items-start mb-4">
              <div className={`p-2.5 rounded-xl ${stat.bg} ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              {/* Mini Sparkline Chart */}
              <div className="w-16 h-8 opacity-50 grayscale group-hover:grayscale-0 transition-all">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={sparkData}>
                    <Area type="monotone" dataKey="v" stroke="currentColor" fill="currentColor" fillOpacity={0.2} className={stat.color} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold text-text-muted uppercase tracking-wider mb-1">{stat.label}</p>
              <h3 className="text-2xl font-black text-text-main">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* 📋 Left Col: Available Tasks (Span 2) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-text-main flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-brand" />
              Recommended for You
            </h2>
            <Link to="/dashboard/worker/tasks" className="text-sm font-bold text-brand hover:underline">View Market</Link>
          </div>

          <div className="grid gap-4">
            {availableTasks.map((task) => (
              <div key={task.id} className="group clay-card p-5 bg-bg-surface hover:bg-bg-elevated/50 transition-all border border-transparent hover:border-brand/30 cursor-pointer flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand/10 to-brand-sec/10 flex items-center justify-center text-brand font-bold text-lg group-hover:scale-110 transition-transform">
                    {task.buyer[0]}
                  </div>
                  <div>
                    <h3 className="font-bold text-text-main group-hover:text-brand transition-colors text-lg">{task.title}</h3>
                    <div className="flex items-center gap-3 text-xs font-medium text-text-muted mt-1">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {task.time}</span>
                      <span className="flex items-center gap-1"><Star className="w-3 h-3 text-yellow-500 fill-yellow-500" /> {task.rating}</span>
                      <span>• {task.buyer}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end pl-16 md:pl-0">
                  <div className="text-right">
                    <span className="block text-xl font-black text-emerald-500">${task.reward.toFixed(2)}</span>
                    <span className="text-[10px] font-bold text-text-muted uppercase">Reward</span>
                  </div>
                  <div className="p-2 rounded-full bg-bg-elevated text-text-muted group-hover:bg-brand group-hover:text-white transition-all">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* 🕒 Right Col: Activity Feed (Span 1) */}
        <div className="lg:col-span-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-text-main flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-500" />
              Recent Activity
            </h2>
          </div>

          <div className="clay-card p-6 bg-bg-surface h-full">
            <div className="relative border-l-2 border-border-base ml-3 space-y-8 py-2">
              {recentTasks.map((task, idx) => (
                <div key={task.id} className="relative pl-8">
                  {/* Timeline Dot */}
                  <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-bg-surface ${
                    task.status === 'approved' ? 'bg-emerald-500' : 'bg-amber-500'
                  }`} />
                  
                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between items-start">
                      <span className="text-xs font-bold text-text-muted uppercase">{task.date}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${
                        task.status === 'approved' ? 'bg-emerald-500/10 text-emerald-600' : 'bg-amber-500/10 text-amber-600'
                      }`}>
                        {task.status}
                      </span>
                    </div>
                    <h4 className="font-bold text-text-main text-sm">{task.title}</h4>
                    <p className="font-bold text-emerald-500 text-sm flex items-center gap-1">
                      +${task.reward.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <Link to="/dashboard/worker/submissions" className="block mt-6 text-center">
              <button className="text-xs font-bold text-brand hover:underline tracking-widest uppercase">View Full History</button>
            </Link>
          </div>
        </div>

      </div>

      {/* ⚡ Quick Actions Dock */}
      <div className="clay-card p-4 bg-bg-surface flex flex-wrap gap-4 items-center justify-between border-t-4 border-t-brand/20">
        <p className="text-sm font-bold text-text-muted px-2">Quick Actions:</p>
        <div className="flex flex-wrap gap-3">
          {[
            { label: 'Withdraw Funds', icon: DollarSign, to: '/dashboard/worker/withdrawals' },
            { label: 'View Profile', icon: ArrowRight, to: '/profile' } // Placeholder link
          ].map((action, i) => (
            <Link key={i} to={action.to}>
              <button className="px-4 py-2 rounded-xl bg-bg-elevated border border-transparent hover:border-brand/30 hover:bg-bg-surface hover:text-brand transition-all text-sm font-bold text-text-sec flex items-center gap-2 group">
                <action.icon className="w-4 h-4 text-text-muted group-hover:text-brand" />
                {action.label}
              </button>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
};

export default WorkerHome;
