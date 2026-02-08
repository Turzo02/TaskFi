import React, { useState } from 'react';
import { DollarSign, CreditCard, Clock, ArrowUpRight, TrendingUp, Wallet, ArrowDownLeft, History } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
// No Auth import needed for demo

const Withdrawals = () => {
  // 👤 DEMO USER DATA
  const user = {
    displayName: "Alex Worker",
    coin: 2450.75, // Demo Balance
  };

  const [withdrawAmount, setWithdrawAmount] = useState('');

  // 📊 Chart Data
  const chartData = [
    { name: 'Jan', amount: 400 },
    { name: 'Feb', amount: 850 },
    { name: 'Mar', amount: 600 },
    { name: 'Apr', amount: 1200 },
    { name: 'May', amount: 900 },
    { name: 'Jun', amount: 1500 },
    { name: 'Jul', amount: 2400 },
  ];

  const withdrawalHistory = [
    { id: 1, amount: 150.00, method: 'PayPal', status: 'completed', date: 'Feb 01, 2026' },
    { id: 2, amount: 50.00, method: 'Bank Transfer', status: 'pending', date: 'Feb 05, 2026' },
    { id: 3, amount: 200.00, method: 'Crypto (USDT)', status: 'completed', date: 'Jan 28, 2026' },
    { id: 4, amount: 25.00, method: 'PayPal', status: 'completed', date: 'Jan 20, 2026' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in zoom-in duration-500">
      
      {/* 🟢 Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-text-main tracking-tight">Financial Center</h1>
          <p className="text-text-muted font-medium mt-1">Manage your earnings and payout methods.</p>
        </div>
        <div className="flex gap-2">
           <button className="px-5 py-2.5 rounded-xl bg-bg-surface border border-border-base text-text-main font-bold hover:bg-bg-elevated hover:border-brand/30 transition-all text-sm shadow-sm flex items-center gap-2">
             <Clock className="w-4 h-4 text-text-muted" />
             History Log
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* 💳 LEFT COLUMN: Stats & Chart (Span 7) */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Main Balance Card (Glassmorphism) */}
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-emerald-600 to-teal-800 p-8 md:p-10 shadow-2xl shadow-emerald-500/20 text-white group">
            {/* Texture & FX */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-[80px] group-hover:bg-white/20 transition-colors duration-700" />
            
            <div className="relative z-10 flex flex-col h-full justify-between gap-8">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2 mb-2 opacity-80">
                    <span className="p-1 rounded bg-white/20"><Wallet className="w-3 h-3" /></span>
                    <p className="font-bold uppercase tracking-widest text-xs">Total Earnings</p>
                  </div>
                  <h2 className="text-5xl md:text-6xl font-black tracking-tight flex items-baseline gap-1">
                    <span className="text-3xl opacity-60 font-medium">$</span>
                    {user.coin.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </h2>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 shadow-lg">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-black/20 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/5 flex-1">
                  <p className="text-[10px] text-emerald-200 font-bold uppercase mb-1">Last Payout</p>
                  <p className="font-bold flex items-center gap-1 text-lg">
                    <ArrowUpRight className="w-4 h-4 text-emerald-300" /> $450.00
                  </p>
                </div>
                <div className="bg-black/20 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/5 flex-1">
                  <p className="text-[10px] text-emerald-200 font-bold uppercase mb-1">Pending</p>
                  <p className="font-bold flex items-center gap-1 text-lg opacity-90">
                    <Clock className="w-4 h-4 text-yellow-300" /> $50.00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Earnings Chart */}
          <div className="clay-card p-6 md:p-8 bg-bg-surface border border-white/40 dark:border-white/5">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-bold text-text-main flex items-center gap-2 text-lg">
                <div className="p-2 rounded-lg bg-brand/10 text-brand"><TrendingUp className="w-5 h-5" /></div>
                Income Growth
              </h3>
              <select className="bg-bg-elevated border-none text-xs font-bold text-text-muted rounded-lg px-3 py-2 outline-none cursor-pointer hover:bg-bg-elevated/80 transition-colors">
                <option>Last 6 Months</option>
                <option>This Year</option>
              </select>
            </div>
            
            <div className="h-[280px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
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
                    tickFormatter={(value) => `$${value}`} 
                    dx={-10}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'var(--color-surface)', 
                      border: '1px solid var(--color-border-base)', 
                      borderRadius: '12px', 
                      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                      color: 'var(--color-text-main)',
                      fontWeight: 'bold'
                    }}
                    cursor={{ stroke: 'var(--color-border-base)', strokeWidth: 2 }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="amount" 
                    stroke="#10B981" 
                    strokeWidth={4} 
                    fillOpacity={1} 
                    fill="url(#colorIncome)" 
                    animationDuration={1500}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>

        {/* 🏦 RIGHT COLUMN: Actions & History (Span 5) */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Withdrawal Form */}
          <div className="clay-card p-8 bg-bg-surface relative overflow-hidden border border-white/40 dark:border-white/5">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand/5 rounded-full blur-3xl pointer-events-none" />
            
            <h3 className="text-xl font-black text-text-main mb-6 flex items-center gap-2">
              <CreditCard className="w-6 h-6 text-brand" />
              Request Payout
            </h3>

            <div className="space-y-6 relative z-10">
              <div className="space-y-2">
                <label className="text-xs font-bold text-text-muted uppercase tracking-wider ml-1">Withdrawal Amount</label>
                <div className="relative group">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted font-bold text-lg group-focus-within:text-brand transition-colors">$</span>
                  <input 
                    type="number" 
                    value={withdrawAmount}
                    onChange={(e) => setWithdrawAmount(e.target.value)}
                    placeholder="0.00" 
                    className="w-full pl-10 pr-20 py-4 rounded-2xl bg-bg-elevated border-2 border-transparent text-text-main font-black text-2xl focus:bg-bg-surface focus:border-brand focus:ring-4 focus:ring-brand/10 transition-all outline-none placeholder:text-text-muted/30"
                  />
                  <button 
                    onClick={() => setWithdrawAmount(user.coin)} 
                    className="absolute right-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-brand/10 text-brand text-xs font-bold hover:bg-brand hover:text-white transition-colors"
                  >
                    MAX
                  </button>
                </div>
                <div className="flex justify-between px-1">
                  <p className="text-xs text-text-muted font-medium">Min withdrawal: $10.00</p>
                  <p className="text-xs text-text-muted font-medium">Fee: 2%</p>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-text-muted uppercase tracking-wider ml-1">Select Method</label>
                <div className="grid grid-cols-3 gap-2">
                  {['PayPal', 'Bank', 'Crypto'].map((m) => (
                    <button key={m} className="px-2 py-3 rounded-xl border-2 border-border-base bg-bg-surface text-xs font-bold text-text-muted hover:border-brand hover:text-brand hover:bg-brand/5 focus:border-brand focus:bg-brand/10 active:scale-95 transition-all">
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              <button className="w-full py-4 rounded-xl bg-text-main text-bg-surface font-black text-lg hover:bg-brand hover:text-white transition-all shadow-xl shadow-text-main/10 hover:shadow-brand/25 mt-2 flex items-center justify-center gap-2 group transform active:scale-[0.98]">
                Confirm Withdrawal
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* History List */}
          <div className="clay-card p-6 bg-bg-surface h-full border border-white/40 dark:border-white/5">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-text-main flex items-center gap-2">
                <History className="w-5 h-5 text-text-muted" />
                Recent Activity
              </h3>
              <button className="text-xs font-bold text-brand hover:underline hover:text-brand-sec transition-colors">View All</button>
            </div>

            <div className="space-y-3">
              {withdrawalHistory.map((tx) => (
                <div key={tx.id} className="group flex items-center justify-between p-4 rounded-2xl bg-bg-elevated/30 hover:bg-bg-elevated transition-all cursor-default border border-transparent hover:border-border-base">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${
                      tx.status === 'completed' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500' : 'bg-amber-500/10 border-amber-500/20 text-amber-500'
                    }`}>
                      {tx.status === 'completed' ? <ArrowDownLeft className="w-5 h-5" strokeWidth={3} /> : <Clock className="w-5 h-5" strokeWidth={3} />}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-text-main">{tx.method}</p>
                      <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider mt-0.5">{tx.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-sm font-black ${tx.status === 'completed' ? 'text-text-main' : 'text-text-muted'}`}>
                      -${tx.amount.toFixed(2)}
                    </p>
                    <span className={`inline-block mt-1 px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider ${
                      tx.status === 'completed' ? 'bg-emerald-500/10 text-emerald-600' : 'bg-amber-500/10 text-amber-600'
                    }`}>
                      {tx.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Withdrawals;
