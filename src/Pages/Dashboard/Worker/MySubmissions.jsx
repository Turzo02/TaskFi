import React from 'react';
import { 
  CheckCircle2, 
  Clock, 
  XCircle, 
  Eye, 
  Download, 
  Search, 
  Filter, 
  ArrowUpRight, 
  Ban, 
  Loader2, 
  TrendingUp, 
  Calendar 
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const MySubmissions = () => {

  // 📊 Mock Chart Data
  const chartData = [
    { name: 'Mon', earned: 12 },
    { name: 'Tue', earned: 18 },
    { name: 'Wed', earned: 5 },
    { name: 'Thu', earned: 25 },
    { name: 'Fri', earned: 15 },
    { name: 'Sat', earned: 30 },
    { name: 'Sun', earned: 22 },
  ];

  const submissions = [
    { id: 1, taskTitle: 'Website Usability Testing', reward: 5.00, status: 'approved', date: 'Feb 05, 2026', buyer: 'TechCorp' },
    { id: 2, taskTitle: 'Product Data Entry', reward: 3.50, status: 'pending', date: 'Feb 06, 2026', buyer: 'ShopMall' },
    { id: 3, taskTitle: 'Customer Survey', reward: 2.00, status: 'rejected', date: 'Feb 04, 2026', buyer: 'Research Inc' },
    { id: 4, taskTitle: 'App Feature Testing', reward: 6.00, status: 'approved', date: 'Feb 03, 2026', buyer: 'AppDev Co' },
    { id: 5, taskTitle: 'Image Categorization', reward: 4.00, status: 'pending', date: 'Feb 06, 2026', buyer: 'AI Labs' },
  ];

  const getStatusConfig = (status) => {
    switch (status) {
      case 'approved': return { color: 'text-emerald-500', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', icon: CheckCircle2 };
      case 'pending': return { color: 'text-amber-500', bg: 'bg-amber-500/10', border: 'border-amber-500/20', icon: Loader2 };
      case 'rejected': return { color: 'text-red-500', bg: 'bg-red-500/10', border: 'border-red-500/20', icon: Ban };
      default: return { color: 'text-slate-500', bg: 'bg-slate-500/10', border: 'border-slate-500/20', icon: Clock };
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in zoom-in duration-500">
      
      {/* 🟢 HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-text-main tracking-tight">Analytics & Logs</h1>
          <p className="text-text-muted font-medium mt-1">Real-time overview of your performance.</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 rounded-xl bg-bg-surface border border-border-base text-text-muted hover:text-text-main hover:bg-bg-elevated transition-colors flex items-center gap-2 font-bold text-sm">
            <Calendar className="w-4 h-4" />
            Last 7 Days
          </button>
          <button className="px-4 py-2 rounded-xl bg-brand text-text-inv border border-brand hover:brightness-110 transition-colors flex items-center gap-2 font-bold text-sm shadow-lg shadow-brand/20">
            <Download className="w-4 h-4" />
            Export CSV
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* 📈 LEFT: METRICS & CHART (Span 2) */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Total Earned */}
            <div className="clay-card p-6 relative overflow-hidden bg-gradient-to-br from-emerald-500/10 to-teal-500/5 border-emerald-500/20">
              <div className="relative z-10">
                <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">Earnings</p>
                <h3 className="text-3xl font-black text-emerald-500">$128.50</h3>
                <div className="mt-2 flex items-center gap-1 text-[10px] font-bold text-emerald-600/80 bg-emerald-500/10 w-fit px-2 py-0.5 rounded-full">
                  <TrendingUp className="w-3 h-3" /> +12% vs last week
                </div>
              </div>
              <div className="absolute right-0 bottom-0 p-4 opacity-10 text-emerald-500">
                <ArrowUpRight className="w-16 h-16" />
              </div>
            </div>

            {/* Approved */}
            <div className="clay-card p-6 bg-bg-surface relative overflow-hidden">
              <p className="text-xs font-bold text-text-muted uppercase tracking-wider mb-1">Approved</p>
              <h3 className="text-3xl font-black text-text-main">42</h3>
              <p className="text-xs text-text-muted mt-1 font-medium">95% Success Rate</p>
              <div className="absolute right-4 top-4 p-2 rounded-xl bg-blue-500/10 text-blue-500">
                <CheckCircle2 className="w-5 h-5" />
              </div>
            </div>

            {/* Pending */}
            <div className="clay-card p-6 bg-bg-surface relative overflow-hidden">
              <p className="text-xs font-bold text-text-muted uppercase tracking-wider mb-1">Pending</p>
              <h3 className="text-3xl font-black text-text-main">5</h3>
              <p className="text-xs text-text-muted mt-1 font-medium">Avg review: 24h</p>
              <div className="absolute right-4 top-4 p-2 rounded-xl bg-amber-500/10 text-amber-500">
                <Loader2 className="w-5 h-5 animate-spin-slow" />
              </div>
            </div>
          </div>

          {/* Chart Area */}
          <div className="clay-card p-6 md:p-8 bg-bg-surface border border-white/10 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-text-main">Earnings Activity</h3>
            </div>
            <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="colorEarned" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border-base)" opacity={0.5} />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fill: 'var(--color-text-muted)', fontSize: 12, fontWeight: 600}} 
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fill: 'var(--color-text-muted)', fontSize: 12, fontWeight: 600}} 
                    tickFormatter={(val) => `$${val}`}
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'var(--color-surface)', borderRadius: '12px', border: '1px solid var(--color-border-base)', color: 'var(--color-text-main)' }}
                    itemStyle={{ color: 'var(--color-text-main)', fontWeight: 'bold' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="earned" 
                    stroke="#10B981" 
                    strokeWidth={3} 
                    fillOpacity={1} 
                    fill="url(#colorEarned)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>

        {/* 📋 RIGHT: Recent Submissions (Span 1) */}
        <div className="lg:col-span-1 flex flex-col h-full">
          <div className="clay-card bg-bg-surface h-full flex flex-col overflow-hidden border border-white/10 shadow-xl">
            
            {/* List Header */}
            <div className="p-6 border-b border-border-base flex items-center justify-between">
              <h3 className="font-bold text-text-main">Recent Logs</h3>
              <div className="flex gap-2">
                <button className="p-2 rounded-lg hover:bg-bg-elevated text-text-muted transition-colors">
                  <Search className="w-4 h-4" />
                </button>
                <button className="p-2 rounded-lg hover:bg-bg-elevated text-text-muted transition-colors">
                  <Filter className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Scrollable List */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-1">
              {submissions.map((sub) => {
                const config = getStatusConfig(sub.status);
                const Icon = config.icon;
                
                return (
                  <div key={sub.id} className="group p-4 rounded-xl hover:bg-bg-elevated/50 transition-all border border-transparent hover:border-border-base cursor-default">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full ${config.bg} ${config.color} flex items-center justify-center`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-text-main line-clamp-1">{sub.taskTitle}</h4>
                          <p className="text-[10px] text-text-muted font-medium">{sub.buyer} • {sub.date}</p>
                        </div>
                      </div>
                      <button className="opacity-0 group-hover:opacity-100 p-1.5 rounded-lg hover:bg-bg-surface text-text-muted transition-all">
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between pl-11">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${config.bg} ${config.color}`}>
                        {sub.status}
                      </span>
                      <span className="font-black text-text-main">${sub.reward.toFixed(2)}</span>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* List Footer */}
            <div className="p-4 border-t border-border-base text-center">
              <button className="text-xs font-bold text-brand hover:text-brand-sec transition-colors uppercase tracking-widest">
                View All History
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default MySubmissions;
